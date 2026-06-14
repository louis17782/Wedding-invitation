import { useState } from "react";
import styles from "../components/RSVForm.module.scss";

const RSVForm = ({ onSubmitComplete }) => {
  const [form, setForm] = useState({
    name: "",
    assistance: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "http://localhost:3000/api/v1/guests",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guest: {
            name: form.name,
            assistance: form.assistance,
            comment: form.comment,
          },
        }),
      }
    );

    if (res.ok) {
      // Avisamos al componente padre (PageController)
      onSubmitComplete(form.assistance); // "si" o "no"
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Confirma tu asistencia</h1>
      <p>Esperamos contar contigo</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Nombre completo</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>¿Asistirás?</label>
        <div className={styles.checks}>
          <label>
            <input
              type="radio"
              name="assistance"
              value="si"
              onChange={handleChange}
              required
            />
            Sí, asistiré
          </label>

          <label>
            <input
              type="radio"
              name="assistance"
              value="no"
              onChange={handleChange}
              required
            />
            No podré ir
          </label>
        </div>

        <label>Comentarios</label>
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
        />

        <button type="submit">Enviar confirmación</button>
      </form>
    </div>
  );
};

export default RSVForm;