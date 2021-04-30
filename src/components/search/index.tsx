import styles from "./style.module.scss";

export function SearchCity() {

  return (
    <div className={styles.searchContainer}>
        <input type="text" placeholder="Qual cidade deseja procurar?"/>
        <button>
            Buscar
        </button>
    </div>
  );

}

