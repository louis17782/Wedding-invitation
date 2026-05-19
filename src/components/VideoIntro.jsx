import { useState, useRef } from "react";
import styles from "./VideoIntro.module.scss";

export default function VideoIntro({ onFinish }) {
  const [hidden, setHidden] = useState(false);
  const videoRef = useRef(null);

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.onended = () => {
        setHidden(true);
        onFinish(); 
      };
    }
  };

  return (
    <div
      className={`${styles.videoIntro} ${hidden ? styles.fadeOut : ""}`}
      onClick={startVideo}
    >
      <video
        ref={videoRef}
        src="carta.mp4"
        className={styles.videoFull}
        preload="auto"
      />
      <div className={styles.tapText}>Toca para comenzar</div>
    </div>
  );
}
