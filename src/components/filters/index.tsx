import styles from "./style.module.scss";
import {FaFilter, FaLess, FaMinus} from "react-icons/fa"

export function Filters() {

  return (
    <div className={styles.filterContainer}>
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>
            <span><FaFilter/> Filtros</span>
          </div>
          <div className={styles.cardValue}>
            <div className={styles.header}>
              <small>Tipos de contratos</small>
              <i><FaMinus/></i>
            </div>
            <div className={styles.value}>
              <input type="checkbox" value="Aluguel"/>
              <label>Aluguel</label>
            </div>
            <div className={styles.value}>
              <input type="checkbox" value="Compra"/>
              <label>Compra</label>
            </div>
            
            <div className={styles.header}>
              <small>Tipos de contratos</small>
              <i><FaMinus/></i>
            </div>
            <div className={styles.value}>
              <input type="checkbox" value="Aluguel"/>
              <label>Aluguel</label>
            </div>
            <div className={styles.value}>
              <input type="checkbox" value="Compra"/>
              <label>Compra</label>
            </div>
          </div>

        </div>
    </div>
  );

}