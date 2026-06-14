import { useEffect, useRef } from "react";
import styles from "./Club.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClubSection = () => {
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
        <h1 className={styles.title}>Lugar de la Recepción</h1>

        <p className={styles.address}>
          Casa Blanca Colonial<br />
          Calle 24 entre carreras 17 y 18, Bqto. (Porton negro a mano izquierda)
        </p>

        <img
          src="club.webp"
          alt="Lugar de rección"
          className={styles.image}
        />
      </section>
  );
};

export default ClubSection;
