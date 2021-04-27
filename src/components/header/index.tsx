import styles from "./style.module.scss";

export function Header(){

    return (
        <header className={styles.headerContainer}>
          <img src="/logo.svg" alt="Haile logo"></img>  
          <p>O lugar certo para encontrar seu novo lar!</p>
          <span>Login</span>
        </header>
    );

}