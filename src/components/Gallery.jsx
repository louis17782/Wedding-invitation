import { useEffect, useRef } from "react";
import styles from "./Gallery.module.scss";

const img1 = "/img1.webp";
const img2 = "/img2.webp";
const img3 = "/img3.webp";
const img4 = "/img4.webp";
const img5 = "/img5.webp";
const img6 = "/img6.webp";
const img7 = "/img7.webp";
const img8 = "/img8.webp";

const Gallery = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    // Duplicar contenido para efecto infinito
    track.innerHTML += track.innerHTML;

    let position = 0;
    const speed = 1.4;

    function moverCarrusel() {
      position -= speed;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(moverCarrusel);
    }

    moverCarrusel();
  }, []);

  return (
    <section className={styles.section}>
      <h1>Nosotros</h1>

      <div className={styles.carouselimg}>
        <div ref={trackRef} className={styles.carouselTrack}>
          <img src={img1} alt="Imagen" />
          <img src={img2} alt="Imagen" />
          <img src={img3} alt="Imagen" />
          <img src={img4} alt="Imagen" />
          <img src={img5} alt="Imagen" />
          <img src={img6} alt="Imagen" />
          <img src={img7} alt="Imagen" />
          <img src={img8} alt="Imagen" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;