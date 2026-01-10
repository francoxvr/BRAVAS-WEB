const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME || 'miweb',
  process.env.DB_USER || 'miwebuser',
  process.env.DB_PASS || 'miweb123',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  }
);

// Probar conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conectado a MySQL'))
  .catch(err => console.error('❌ Error al conectar a MySQL:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend con MySQL funcionando 🚀');
});

const PORT = process.env.PORT || 5000;



// Modelo de Usuario
const Usuario = sequelize.define('usuarios', {
  nombre: Sequelize.STRING,
  email: Sequelize.STRING,
}, {
  timestamps: false,
});

// Ruta para obtener usuarios
app.get('/api/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));