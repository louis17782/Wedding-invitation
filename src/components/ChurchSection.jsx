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
          Iglesia La Consolación<br />
          Calle Principal, Cabudare, Venezuela
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
