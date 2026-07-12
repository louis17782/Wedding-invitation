import { useEffect, useRef } from "react";
import styles from "./ChurchSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ChurchSection = () => {
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
        <h1 className={styles.title}>Lugar de la Ceremonia</h1>

        <p className={styles.address}>
          Parroquia Nuestra Señora de la Consolación<br />
         Av Francia (Calle 11), entre Carrera 2 y 3 de la Urb Sta Elena, Barquisimeto.
         <br />
         Hora: 7:00 pm
        </p>

        <img
          src="iglesia.png"
          alt="Iglesia donde será la ceremonia"
          className={styles.image}
        />
      </section>
  );
};

export default ChurchSection;
