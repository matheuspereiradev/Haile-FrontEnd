import styles from "./style.module.scss";
import {FaFilter} from "react-icons/fa"

export function Filters() {

  return (
    <div className={styles.filterContainer}>
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>
            <span><FaFilter/> Filtros</span>
          </div>
          <div className={styles.cardValue}>
              aaaa
          </div>
        </div>
    </div>
  );

}