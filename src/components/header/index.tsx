import styles from "./style.module.scss";

export function Header(){

    return (
        <header className={styles.headerContainer}>
          <img src="/vercel.svg" alt="Haile logo"></img>  
          <ul className={styles.navLinks}>
            <li className={styles.onlyText}>
              Entrar
            </li>
            <li className={styles.withBorder}>
              Cadastre-se
            </li>
          </ul> 
        </header>
    );

}