import { useState, useEffect, useRef } from "react";
import PageController from "./PageController.jsx";
import CountdownTimer from "./CountDown.jsx";
import ChurchSection from "./ChurchSection.jsx";
import ClubSection from "./Club.jsx";
import Heart from "./Heart.jsx";
import Dress from "./Dress.jsx";
import Gifts from "./Gifts.jsx";
import Gallery from "./Gallery.jsx";
import RSVForm from "./RSVForm.jsx";

const IndexController = () => {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const audioRef = useRef(null); // ← AUDIO

  const handleFormSubmit = (assistance) => {
    setStatus(assistance);
    setSubmitted(true);
  };

  // 🔊 Reproducir música cuando el usuario envía confirmación
  useEffect(() => {
    if (submitted && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [submitted]);

  // 🎬 Video final si asiste
  useEffect(() => {
    if (submitted && status === "si") {
      const video = videoRef.current;
      const container = videoContainerRef.current;

      if (!video) return;

      video.play();

      video.onended = () => {
        container.style.transition = "opacity 1.5s ease";
        container.style.opacity = 0;

        setTimeout(() => {
          setShowFinalMessage(true);
        }, 1500);
      };
    }
  }, [submitted, status]);

  // ❌ NO ASISTE → mensaje directo
  if (submitted && status === "no") {
    return (
      <>
        {/* AUDIO OCULTO */}
        <audio ref={audioRef} src="/music.mp3" preload="auto" loop />

        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Gracias por avisarnos!</h1>
          <p>Tu respuesta sincera es el mejor apoyo para nuestra planificación.
            Lamentamos que no puedas estar, pero agradecemos enormemente tu sinceridad porque que nos ayuda
            a mantener la logística en orden... ¡Cero presiones y cero explicaciones! Sabemos que a veces no se puede y ya.
            No te preocupes por justificarte con nosotros... Un abrazo ❤️.</p>
          <p>— Gaby & Luis</p>
        </div>
      </>
    );
  }

  // ✔ ASISTE → video + mensaje final
  if (submitted && status === "si") {
    return (
      <>
        {/* AUDIO OCULTO */}
        <audio ref={audioRef} src="/music.mp3" preload="auto" loop />

        {!showFinalMessage && (
          <div
            ref={videoContainerRef}
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "black",
            }}
          >
            <video
              ref={videoRef}
              src="/confirmation.mp4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}

        {showFinalMessage && (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Gracias por confirmar tu asistencia</h1>
            <p>Nos hace muchísima ilusión saber que nos acompañarás en este día tan especial.</p>
            <p>Gracias por formar parte de nuestra historia.</p>
            <p>Te esperamos el 15 de agosto en nuestra ceremonia.</p>
            <p>— Gaby & Luis </p>
          </div>
        )}
      </>
    );
  }

  // 🌟 Página normal
  return (
    <>
      <PageController client:load />
      <CountdownTimer client:visible eventDate="2026-08-15t07:00" />
      <Heart />
      <ChurchSection client:visible />
      <Heart />
      <ClubSection client:visible />
      <Heart />
      <Dress client:visible />
      <Heart />
      <Gifts client:visible />
      <Gallery client:visible />
      <RSVForm onSubmitComplete={handleFormSubmit} />

      {/* AUDIO OCULTO (no suena hasta que submitted=true) */}
      <audio ref={audioRef} src="/music.mp3" preload="auto" loop />
    </>
  );
};

export default IndexController;
