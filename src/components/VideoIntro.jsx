import { useState, useRef } from "react";
import styles from "./VideoIntro.module.scss";

export default function VideoIntro({ onFinish }) {
  const [hidden, setHidden] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.onended = () => {
        setHidden(true);
        onFinish();
      };
    }

    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Audio blocked until user interacts:", err);
      });
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

      {/* AUDIO OCULTO */}
      <audio
        ref={audioRef}
        src="music.mp3"
        preload="auto"
      />

      <div className={styles.tapText}>Toca y abre la invitación</div>
    </div>
  );
}
