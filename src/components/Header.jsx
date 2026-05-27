import { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { CaretDown } from "phosphor-react";

export default function Header({ start }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (start && videoRef.current) {
      videoRef.current.play();
    }
  }, [start]);

  return (
    <header className={styles.headerSection}>
      <video
        ref={videoRef}
        className={styles.headerVideo}
        src="loop.mp4"
        muted
        loop
        playsInline
      />

      <div className={styles.headerContent}>
        <h1>Nos casamos</h1>
        <h2>Gaby & Luis</h2>
          <p className={styles.cta}>Confirma tu asistencia</p>
          <CaretDown className={styles.caret} size={32} />
      </div>

      <div className={styles.headerOverlay}></div>
    </header>
  );
}
