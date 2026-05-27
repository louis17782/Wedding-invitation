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
      <h2>Regalos</h2>
      <div className={styles.box} onClick={toggleBox}>
        <div className={styles.boxTitle}>Dale aqui</div>

        <div ref={contentRef} className={styles.dropdown}>
          <p>
            Si lo preferes, hecha la platica en verdes.
            <br /><br />
            En caso de que os resulte más cómodo, también podéis realizar una transferencia. zelle, zinli, facebank, usdt
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
