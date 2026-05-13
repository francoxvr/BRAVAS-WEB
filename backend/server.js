const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('Backend Bravas funcionando 🚀');
});

// Ruta formulario de contacto
app.post('/api/contacto', async (req, res) => {
  const { nombre, email, telefono, empresa, servicio, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email que le llega a Bravas
    await transporter.sendMail({
      from: `"Bravas Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO,
      subject: `Nueva consulta de ${nombre} — Bravas Marketing`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #4e1a6b; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Nueva consulta desde el sitio</h1>
            <p style="color: #e0c4f4; margin: 4px 0 0;">Bravas Marketing</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 140px;">Nombre:</td><td style="padding: 8px 0; font-weight: bold;">${nombre}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Teléfono:</td><td style="padding: 8px 0;">${telefono || 'No especificado'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Empresa:</td><td style="padding: 8px 0;">${empresa || 'No especificada'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Servicio:</td><td style="padding: 8px 0;">${servicio || 'No especificado'}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 6px; border-left: 4px solid #4e1a6b;">
              <p style="color: #666; margin: 0 0 8px; font-size: 13px;">MENSAJE:</p>
              <p style="margin: 0;">${mensaje}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #999;">Este mensaje fue enviado desde el formulario de contacto de bravas-web.vercel.app</p>
          </div>
        </div>
      `,
    });

    // Email de confirmación al cliente
    await transporter.sendMail({
      from: `"Bravas Marketing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Recibimos tu consulta, ${nombre.split(' ')[0]}! — Bravas Marketing`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #4e1a6b; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">¡Recibimos tu mensaje!</h1>
            <p style="color: #e0c4f4; margin: 4px 0 0;">Bravas Marketing</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
            <p>Hola <strong>${nombre.split(' ')[0]}</strong>,</p>
            <p>Gracias por contactarnos. Recibimos tu consulta y nos pondremos en contacto en menos de <strong>24 horas</strong>.</p>
            <p>Mientras tanto, podés seguirnos en nuestras redes sociales o visitar nuestro sitio web.</p>
            <div style="margin-top: 24px; text-align: center;">
              <a href="https://bravas-web.vercel.app" style="background: #4e1a6b; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Visitar sitio web</a>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #999;">Bravas Marketing — Estrategias digitales que generan resultados.</p>
          </div>
        </div>
      `,
    });

    res.json({ ok: true, message: 'Mensaje enviado correctamente' });

  } catch (err) {
    console.error('Error al enviar email:', err);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
