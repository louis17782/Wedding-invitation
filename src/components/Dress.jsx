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
        <h2 className={styles.title}>Dress code</h2>

        <p className={styles.address}>
          no debe ir de blanco<br />
          importante
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