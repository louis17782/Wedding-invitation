import { useRef, useState } from "react";
import styles from "./Gifts.module.scss";
import { gsap } from "gsap";
import confetti from "canvas-confetti";

const Gifts = () => {
  const contentRef = useRef(null);
  const [open, setOpen] = useState(false);

  const toggleBox = () => {
    const newState = !open;
    setOpen(newState);

    // Animación del despliegue
    gsap.to(contentRef.current, {
      height: newState ? "auto" : 0,
      opacity: newState ? 1 : 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Confetti solo cuando se abre
    if (newState) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.3 },
      });
    }
  };

  return (
    <section className={styles.Section}>
      <h1>Regalos</h1>
      <div className={styles.box} onClick={toggleBox}>
        <div className={styles.boxTitle}>Dale aqui</div>

        <div ref={contentRef} className={styles.dropdown}>
          <p>
            ¡Gracias por tu compañía en nuestra nueva etapa! 
            Si quieres tener un detalle con nosotros ¡Suma kilómetros a nuestro viaje! Agradecemos de todo corazón sus aportes económicos.
            <br /><br />
            Cuentas: 
            Zelle: Luirelys.morlets@hotmail.com A nombre de Luirelys Morlets
            <br />
            Si lo desea, contaremos con un buzón en la recepción para tu sobre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
