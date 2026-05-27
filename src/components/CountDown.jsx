import { useState, useEffect } from "react";
import styles from "./CountDown.module.scss";

const CountdownTimer = ({ eventDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const eventTime = new Date(eventDate).getTime();
      let remaining = eventTime - now;

      if (remaining <= 0) {
        remaining = 0;
        clearInterval(countdownInterval);
      }

      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [eventDate]);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeRemaining);

  return (
    <section className={styles.countdownSection}>
      <h1>Cuenta atrás</h1>
      <p>Para el día más especial de nuestras vidas</p>

      <div className={styles.timer}>
        <div className={styles.box}>
          <span className={styles.number}>{String(days).padStart(2, "0")}</span>
          <span className={styles.label}>Días</span>
        </div>

        <div className={styles.box}>
          <span className={styles.number}>{String(hours).padStart(2, "0")}</span>
          <span className={styles.label}>Horas</span>
        </div>

        <div className={styles.box}>
          <span className={styles.number}>{String(minutes).padStart(2, "0")}</span>
          <span className={styles.label}>Minutos</span>
        </div>

        <div className={styles.box}>
          <span className={styles.number}>{String(seconds).padStart(2, "0")}</span>
          <span className={styles.label}>Segundos</span>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
