import styles from "./Heart.module.scss"

const Heart = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.linea}></div>
      <div className={styles.heart}></div>
      <div className={styles.linea}></div>
    </div>
  )
}

export default Heart;