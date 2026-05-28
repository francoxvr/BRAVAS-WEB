const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';
const siteUrl = process.env.SITE_URL || process.env.FRONTEND_URL || 'https://bravas-web.vercel.app';
const allowedOrigins = (process.env.CORS_ORIGINS || process.env.FRONTEND_URL || siteUrl)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX_REQUESTS || 5);

app.set('trust proxy', 1);

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);

    const isLocalhost = !isProduction && /^https?:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
    if (allowedOrigins.includes(origin) || isLocalhost) {
      return callback(null, true);
    }

    return callback(new Error('Origen no permitido por CORS'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
}));

app.use(express.json({ limit: '20kb' }));

function getClientIp(req) {
  return req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
}

function contactRateLimit(req, res, next) {
  const now = Date.now();
  const ip = getClientIp(req);
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return res.status(429).json({
      error: 'Demasiados intentos. Probá nuevamente en unos minutos.',
    });
  }

  current.count += 1;
  return next();
}

function cleanText(value, maxLength) {
  return String(value || '')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function cleanMultilineText(value, maxLength) {
  return String(value || '')
    .replace(/\r/g, '')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\n/g, '<br>');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function validateContactPayload(body) {
  const payload = {
    nombre: cleanText(body.nombre, 90),
    email: cleanText(body.email, 120).toLowerCase(),
    telefono: cleanText(body.telefono, 40),
    empresa: cleanText(body.empresa, 90),
    servicio: cleanText(body.servicio, 80),
    mensaje: cleanMultilineText(body.mensaje, 1600),
  };

  if (!payload.nombre || !payload.email || !payload.mensaje) {
    return { error: 'Completá nombre, email y mensaje.', payload };
  }

  if (!isValidEmail(payload.email)) {
    return { error: 'Ingresá un email válido.', payload };
  }

  if (payload.mensaje.length < 10) {
    return { error: 'El mensaje es demasiado corto.', payload };
  }

  return { payload };
}

async function sendEmailViaBrevo({ senderName, senderEmail, to, replyTo, subject, htmlContent }) {
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: to }],
      replyTo: { email: replyTo },
      subject,
      htmlContent,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(`Brevo error ${response.status}: ${JSON.stringify(error)}`);
  }

  return response.json();
}

function contactEmailHtml(payload) {
  const safe = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, escapeHtml(value || 'No especificado')])
  );

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #4e1a6b; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px;">Nueva consulta desde el sitio</h1>
        <p style="color: #e0c4f4; margin: 4px 0 0;">Bravas Marketing</p>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px;">Nombre:</td><td style="padding: 8px 0; font-weight: bold;">${safe.nombre}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Teléfono:</td><td style="padding: 8px 0;">${safe.telefono}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Empresa:</td><td style="padding: 8px 0;">${safe.empresa}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Servicio:</td><td style="padding: 8px 0;">${safe.servicio}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 6px; border-left: 4px solid #4e1a6b;">
          <p style="color: #666; margin: 0 0 8px; font-size: 13px;">MENSAJE:</p>
          <p style="margin: 0;">${safe.mensaje}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">Este mensaje fue enviado desde el formulario de contacto de ${escapeHtml(siteUrl)}.</p>
      </div>
    </div>
  `;
}

function confirmationEmailHtml(payload) {
  const firstName = escapeHtml(payload.nombre.split(' ')[0]);

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #4e1a6b; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px;">¡Recibimos tu mensaje!</h1>
        <p style="color: #e0c4f4; margin: 4px 0 0;">Bravas Marketing</p>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
        <p>Hola <strong>${firstName}</strong>,</p>
        <p>Gracias por contactarnos. Recibimos tu consulta y nos pondremos en contacto en menos de <strong>24 horas</strong>.</p>
        <p>Mientras tanto, podés seguirnos en nuestras redes sociales o visitar nuestro sitio web.</p>
        <div style="margin-top: 24px; text-align: center;">
          <a href="${escapeHtml(siteUrl)}" style="background: #4e1a6b; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Visitar sitio web</a>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">Bravas Marketing — Estrategias digitales que generan resultados.</p>
      </div>
    </div>
  `;
}

app.get('/', (req, res) => {
  res.json({ ok: true, service: 'bravas-backend' });
});

app.post('/api/contacto', contactRateLimit, async (req, res) => {
  if (!process.env.BREVO_API_KEY || !process.env.EMAIL_DESTINO) {
    console.error('Faltan variables: BREVO_API_KEY o EMAIL_DESTINO');
    return res.status(500).json({ error: 'El formulario no está configurado todavía.' });
  }

  const { error, payload } = validateContactPayload(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  const senderEmail = process.env.EMAIL_FROM || 'noreply@bravasmarketing.com';
  const senderName = 'Bravas Marketing';

  try {
    await sendEmailViaBrevo({
      senderName,
      senderEmail,
      to: process.env.EMAIL_DESTINO,
      replyTo: payload.email,
      subject: `Nueva consulta de ${payload.nombre} - Bravas Marketing`,
      htmlContent: contactEmailHtml(payload),
    });

    await sendEmailViaBrevo({
      senderName,
      senderEmail,
      to: payload.email,
      replyTo: senderEmail,
      subject: `Recibimos tu consulta, ${payload.nombre.split(' ')[0]} - Bravas Marketing`,
      htmlContent: confirmationEmailHtml(payload),
    });

    return res.json({ ok: true, message: 'Mensaje enviado correctamente' });
  } catch (err) {
    console.error('Error al enviar email:', err);
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

app.use((err, req, res, next) => {
  if (err.message === 'Origen no permitido por CORS') {
    return res.status(403).json({ error: 'Origen no permitido' });
  }

  console.error('Error inesperado:', err);
  return res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor Bravas corriendo en puerto ${PORT}`);
});
