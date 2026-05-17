# 🟣 BRAVAS WEB

Sitio web de **Bravas Marketing** — Agencia de marketing digital en Córdoba.

Construido con **Next.js 16 + React 19 + TinaCMS** (frontend) y **Express + Nodemailer** (backend).

---

## 📁 Estructura del proyecto

```
BRAVAS-WEB/
├── frontend/        # Next.js + TinaCMS
└── backend/         # Express API (formulario de contacto)
```

---

## 🚀 Cómo correr el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/francoxvr/BRAVAS-WEB.git
cd BRAVAS-WEB
```

### 2. Configurar el backend

```bash
cd backend
npm install
cp .env.example .env
# Editá .env con tus credenciales reales
npm run dev
```

El backend corre en `http://localhost:5000`

### 3. Configurar el frontend

```bash
cd frontend
npm install
cp .env.example .env.local
# Editá .env.local con tus valores
npm run dev
```

El frontend corre en `http://localhost:3000`  
El panel de TinaCMS queda en `http://localhost:3000/admin`

---

## ⚙️ Variables de entorno

### Backend (`backend/.env`)

| Variable | Descripción |
|---|---|
| `PORT` | Puerto del servidor (default: 5000) |
| `NODE_ENV` | `development` o `production` |
| `SITE_URL` | URL pública del sitio web |
| `FRONTEND_URL` | URL del frontend (para CORS) |
| `CORS_ORIGINS` | Orígenes permitidos separados por coma |
| `EMAIL_USER` | Cuenta de Gmail que envía los emails |
| `EMAIL_PASS` | App Password de Gmail (no la contraseña normal) |
| `EMAIL_DESTINO` | Email donde llegan las consultas del formulario |
| `RATE_LIMIT_MAX_REQUESTS` | Máximo de envíos por IP cada 15 minutos (default: 5) |

> **Gmail App Password:** Para obtenerla, activá la verificación en dos pasos en tu cuenta Google y generá una contraseña de aplicación en [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).

### Frontend (`frontend/.env.local`)

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL del backend (`http://localhost:5000` en dev) |
| `TINA_PUBLIC_CLIENT_ID` | Client ID de TinaCMS Cloud |
| `TINA_TOKEN` | Token de TinaCMS Cloud |

---

## 🌐 Deploy

### Frontend → Vercel

1. Importar el repo en [vercel.com](https://vercel.com)
2. Configurar **Root Directory** como `frontend`
3. Agregar las variables de entorno del frontend en el panel de Vercel

### Backend → Railway / Render / VPS

1. Apuntar al directorio `backend`
2. Comando de inicio: `node server.js`
3. Agregar las variables de entorno del backend en la plataforma elegida

---

## 🛠️ Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 + React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 + CSS Modules |
| CMS | TinaCMS |
| Backend | Express.js |
| Emails | Nodemailer (Gmail) |
| Iconos | Lucide React |

---

## 📄 Páginas

| Página | Ruta |
|---|---|
| Home | `/` |
| Servicios | `/servicios` |
| Nosotros | `/nosotros` |
| Contacto | `/contacto` |
| Panel CMS | `/admin` |

---

## 🔒 Seguridad del backend

- Rate limiting por IP (5 requests cada 15 minutos)
- Validación y sanitización de todos los inputs
- Escape de HTML para prevenir XSS en emails
- CORS configurado por variables de entorno
- Headers de seguridad (`X-Frame-Options`, `X-Content-Type-Options`, etc.)
