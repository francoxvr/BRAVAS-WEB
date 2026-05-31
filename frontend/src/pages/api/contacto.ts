import type { NextApiRequest, NextApiResponse } from 'next';

function cleanText(value: unknown, maxLength: number): string {
  return String(value || '')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function cleanMultilineText(value: unknown, maxLength: number): string {
  return String(value || '')
    .replace(/\r/g, '')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\n/g, '<br>');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

async function sendEmailViaBrevo({ senderName, senderEmail, to, replyTo, subject, htmlContent }: {
  senderName: string; senderEmail: string; to: string; replyTo: string; subject: string; htmlContent: string;
}) {
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY!,
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
}

function contactEmailHtml(payload: Record<string, string>, siteUrl: string): string {
  const safe = Object.fromEntries(
    Object.entries(payload).map(([k, v]) => [k, escapeHtml(v || 'No especificado')])
  );
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#4e1a6b;padding:24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:22px">Nueva consulta desde el sitio</h1>
        <p style="color:#e0c4f4;margin:4px 0 0">Bravas Marketing</p>
      </div>
      <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;border:1px solid #eee">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;width:140px">Nombre:</td><td style="padding:8px 0;font-weight:bold">${safe.nombre}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Email:</td><td style="padding:8px 0"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666">Teléfono:</td><td style="padding:8px 0">${safe.telefono}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Empresa:</td><td style="padding:8px 0">${safe.empresa}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Servicio:</td><td style="padding:8px 0">${safe.servicio}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:white;border-radius:6px;border-left:4px solid #4e1a6b">
          <p style="color:#666;margin:0 0 8px;font-size:13px">MENSAJE:</p>
          <p style="margin:0">${safe.mensaje}</p>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#999">Enviado desde ${escapeHtml(siteUrl)}</p>
      </div>
    </div>`;
}

function confirmationEmailHtml(nombre: string, siteUrl: string): string {
  const firstName = escapeHtml(nombre.split(' ')[0]);
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#4e1a6b;padding:24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:22px">¡Recibimos tu mensaje!</h1>
        <p style="color:#e0c4f4;margin:4px 0 0">Bravas Marketing</p>
      </div>
      <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;border:1px solid #eee">
        <p>Hola <strong>${firstName}</strong>,</p>
        <p>Gracias por contactarnos. Recibimos tu consulta y nos pondremos en contacto en menos de <strong>24 horas</strong>.</p>
        <div style="margin-top:24px;text-align:center">
          <a href="${escapeHtml(siteUrl)}" style="background:#4e1a6b;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold">Visitar sitio web</a>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#999">Bravas Marketing — Estrategias digitales que generan resultados.</p>
      </div>
    </div>`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  if (!process.env.BREVO_API_KEY || !process.env.EMAIL_DESTINO) {
    return res.status(500).json({ error: 'El formulario no está configurado todavía.' });
  }

  const body = req.body;
  const payload = {
    nombre: cleanText(body.nombre, 90),
    email: cleanText(body.email, 120).toLowerCase(),
    telefono: cleanText(body.telefono, 40),
    empresa: cleanText(body.empresa, 90),
    servicio: cleanText(body.servicio, 80),
    mensaje: cleanMultilineText(body.mensaje, 1600),
  };

  if (!payload.nombre || !payload.email || !payload.mensaje) {
    return res.status(400).json({ error: 'Completá nombre, email y mensaje.' });
  }
  if (!isValidEmail(payload.email)) {
    return res.status(400).json({ error: 'Ingresá un email válido.' });
  }
  if (payload.mensaje.length < 10) {
    return res.status(400).json({ error: 'El mensaje es demasiado corto.' });
  }

  const siteUrl = process.env.SITE_URL || 'https://bravasmarketing.com';
  const senderEmail = process.env.EMAIL_FROM || 'francoxvr@gmail.com';
  const senderName = 'Bravas Marketing';

  try {
    await sendEmailViaBrevo({
      senderName, senderEmail,
      to: process.env.EMAIL_DESTINO,
      replyTo: payload.email,
      subject: `Nueva consulta de ${payload.nombre} - Bravas Marketing`,
      htmlContent: contactEmailHtml(payload, siteUrl),
    });

    await sendEmailViaBrevo({
      senderName, senderEmail,
      to: payload.email,
      replyTo: senderEmail,
      subject: `Recibimos tu consulta, ${payload.nombre.split(' ')[0]} - Bravas Marketing`,
      htmlContent: confirmationEmailHtml(payload.nombre, siteUrl),
    });

    return res.status(200).json({ ok: true, message: 'Mensaje enviado correctamente' });
  } catch (err) {
    console.error('Error al enviar email:', err);
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
