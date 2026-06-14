import { useEffect, useRef } from "react";
import styles from "./Dress.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Dress = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      y: 80,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
      <section ref={sectionRef} className={styles.churchSection}>
        <h1>Dress code</h1>

        <p className={styles.address}>
        Queremos verte brillar en nuestro gran día. Te pedimos asistir con ropa formal (vestido para las damas, traje para los caballeros).
        <br />
        ¡Ayúdanos a mantener la tradición! Agradecemos evitar el color blanco(solo la novia) y los pantalones blue jeans.
        </p>

        <img
          src="dress.png"
          alt="dress code"
          className={styles.image}
        />
      </section>
  );
};

export default Dress;