import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './ContactForm.module.css';

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio';
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSent(true);

    // Aquí podrías agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);

    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });

    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className={styles.contactFormWrapper}>
      <h2 className={styles.title}>Hablemos de tu proyecto</h2>
      <p className={styles.subtitle}>
        Completá el formulario y nos pondremos en contacto a la brevedad.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
          />
          {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Contanos sobre tu proyecto o consulta"
          />
          {errors.mensaje && <span className={styles.error}>{errors.mensaje}</span>}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Enviar mensaje
        </button>

        {sent && (
          <p className={styles.success}>
            ¡Mensaje enviado! Te responderemos pronto 🚀
          </p>
        )}
      </form>
    </div>
  );
}