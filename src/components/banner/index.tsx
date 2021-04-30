import styles from "./style.module.scss";


export function Banner() {

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.content}>
        <p>Anuncie ou procure imóveis com a Haile é simples e rápido! aqui vamos facilitar sua busca</p>
        <button>ver planos</button>
      </div> 
    </div>
  );

}