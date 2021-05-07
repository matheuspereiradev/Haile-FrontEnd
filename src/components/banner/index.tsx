import styles from "./style.module.scss";


export function Banner() {

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.text}>
        <h3>Anuncie ou procure imóveis</h3>
        <p>Com a Haile é simples, rápido e seguro fazer negócios imobiliarios!</p>
        <button>anunciar imóvel</button>
      </div> 
      <div className={styles.column}>
        
      </div> 
    </div>
  );

}