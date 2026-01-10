import React, { useState, useEffect } from 'react';
import { Send, Mail, User, MessageSquare, Phone, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm({ darkMode }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  
  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [touched, setTouched] = useState({
    nombre: false,
    email: false,
    telefono: false,
    mensaje: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const MAX_MESSAGE_LENGTH = 1000;

  // Validaciones
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Opcional
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 8;
  };

  const validateNombre = (nombre) => {
    return nombre.trim().length >= 2 && nombre.trim().length <= 50;
  };

  const validateMensaje = (mensaje) => {
    return mensaje.trim().length >= 10 && mensaje.trim().length <= MAX_MESSAGE_LENGTH;
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'nombre':
        if (!value.trim()) {
          error = 'El nombre es requerido';
        } else if (!validateNombre(value)) {
          error = 'El nombre debe tener entre 2 y 50 caracteres';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'El email es requerido';
        } else if (!validateEmail(value)) {
          error = 'Ingresa un email válido (ejemplo: tu@email.com)';
        }
        break;
      case 'telefono':
        if (value && !validatePhone(value)) {
          error = 'Ingresa un teléfono válido (mínimo 8 dígitos)';
        }
        break;
      case 'mensaje':
        if (!value.trim()) {
          error = 'El mensaje es requerido';
        } else if (value.trim().length < 10) {
          error = 'El mensaje debe tener al menos 10 caracteres';
        } else if (value.length > MAX_MESSAGE_LENGTH) {
          error = `El mensaje no puede exceder ${MAX_MESSAGE_LENGTH} caracteres`;
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    // Actualizar contador de caracteres para mensaje
    if (name === 'mensaje') {
      setCharCount(value.length);
    }

    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched({
      ...touched,
      [name]: true,
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const validateForm = () => {
    const newErrors = {
      nombre: validateField('nombre', formData.nombre),
      email: validateField('email', formData.email),
      telefono: validateField('telefono', formData.telefono),
      mensaje: validateField('mensaje', formData.mensaje),
    };

    setErrors(newErrors);
    setTouched({
      nombre: true,
      email: true,
      telefono: true,
      mensaje: true,
    });

    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('validation-error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulación de envío (aquí conectarías con tu backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      setCharCount(0);
      setErrors({ nombre: '', email: '', telefono: '', mensaje: '' });
      setTouched({ nombre: false, email: false, telefono: false, mensaje: false });
      
      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);

    // Aquí iría la llamada real al backend:
    // try {
    //   const response = await fetch('/api/contacto', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setSubmitStatus('success');
    //     setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    //     setCharCount(0);
    //   } else {
    //     setSubmitStatus('error');
    //   }
    // } catch (error) {
    //   setSubmitStatus('error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  // Inicializar contador de caracteres
  useEffect(() => {
    setCharCount(formData.mensaje.length);
  }, []);

  return (
    <div className={`contact-form-container ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="contact-form-title">Envíanos un mensaje</h2>
      <p className="contact-form-subtitle">
        Completa el formulario y nos pondremos en contacto contigo lo antes posible.
      </p>

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="nombre">
            <User size={18} />
            Nombre completo <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              placeholder="Tu nombre completo"
              className={touched.nombre && errors.nombre ? 'input-error' : touched.nombre && !errors.nombre ? 'input-valid' : ''}
              maxLength={50}
            />
            {touched.nombre && !errors.nombre && formData.nombre && (
              <CheckCircle size={20} className="input-icon valid-icon" />
            )}
            {touched.nombre && errors.nombre && (
              <XCircle size={20} className="input-icon error-icon" />
            )}
          </div>
          {touched.nombre && errors.nombre && (
            <span className="error-message">
              <AlertCircle size={14} />
              {errors.nombre}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <Mail size={18} />
            Email <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              placeholder="tu@email.com"
              className={touched.email && errors.email ? 'input-error' : touched.email && !errors.email ? 'input-valid' : ''}
            />
            {touched.email && !errors.email && formData.email && (
              <CheckCircle size={20} className="input-icon valid-icon" />
            )}
            {touched.email && errors.email && (
              <XCircle size={20} className="input-icon error-icon" />
            )}
          </div>
          {touched.email && errors.email && (
            <span className="error-message">
              <AlertCircle size={14} />
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="telefono">
            <Phone size={18} />
            Teléfono <span className="optional">(opcional)</span>
          </label>
          <div className="input-wrapper">
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+54 9 351 123 4567"
              className={touched.telefono && errors.telefono ? 'input-error' : touched.telefono && !errors.telefono && formData.telefono ? 'input-valid' : ''}
            />
            {touched.telefono && !errors.telefono && formData.telefono && (
              <CheckCircle size={20} className="input-icon valid-icon" />
            )}
            {touched.telefono && errors.telefono && (
              <XCircle size={20} className="input-icon error-icon" />
            )}
          </div>
          {touched.telefono && errors.telefono && (
            <span className="error-message">
              <AlertCircle size={14} />
              {errors.telefono}
            </span>
          )}
          {!errors.telefono && formData.telefono && (
            <span className="help-text">Formato: +54 9 351 123 4567</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">
            <MessageSquare size={18} />
            Mensaje <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              rows="5"
              placeholder="Cuéntanos sobre tu proyecto... (mínimo 10 caracteres)"
              className={touched.mensaje && errors.mensaje ? 'input-error' : touched.mensaje && !errors.mensaje ? 'input-valid' : ''}
              maxLength={MAX_MESSAGE_LENGTH}
            />
            {touched.mensaje && !errors.mensaje && formData.mensaje && (
              <CheckCircle size={20} className="input-icon valid-icon textarea-icon" />
            )}
            {touched.mensaje && errors.mensaje && (
              <XCircle size={20} className="input-icon error-icon textarea-icon" />
            )}
          </div>
          <div className="textarea-footer">
            {touched.mensaje && errors.mensaje ? (
              <span className="error-message">
                <AlertCircle size={14} />
                {errors.mensaje}
              </span>
            ) : (
              <span className="char-count" data-warning={charCount > MAX_MESSAGE_LENGTH * 0.9}>
                {charCount} / {MAX_MESSAGE_LENGTH} caracteres
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send size={20} />
              Enviar mensaje
            </>
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="form-message success">
            <CheckCircle size={20} />
            <div>
              <strong>¡Mensaje enviado con éxito!</strong>
              <p>Te contactaremos pronto. Revisa tu email.</p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="form-message error">
            <XCircle size={20} />
            <div>
              <strong>Error al enviar</strong>
              <p>Por favor, intenta nuevamente o contáctanos por WhatsApp.</p>
            </div>
          </div>
        )}

        {submitStatus === 'validation-error' && (
          <div className="form-message warning">
            <AlertCircle size={20} />
            <div>
              <strong>Por favor, corrige los errores</strong>
              <p>Revisa los campos marcados en rojo.</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

