import styles from "./style.module.scss";


export function BannerHome() {

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.pageHeading}>
        <div className={styles.textContent}>
          <h1>Anuncie ou procure imóveis</h1>
          <h2>Com a Haile é simples, rápido e seguro fazer negócios imobiliarios!</h2>
          <button>anunciar imóvel</button>
        </div>
      </div>
    </div>
  );

}