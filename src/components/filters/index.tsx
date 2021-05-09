import styles from "./style.module.scss";
import { FaFilter, FaLess, FaMinus, FaPlus } from "react-icons/fa"
import { useState } from "react";

export function Filters() {

  const [visibleContractType, setVisibleContractType] = useState(true)
  const [visiblePropertType, setvisiblePropertType] = useState(true)

  return (
    <div className={styles.filterContainer}>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <span><FaFilter /> Filtros</span>
        </div>
        <div className={styles.cardContent}>
          <div>
            <div className={styles.header} onClick={() => { setVisibleContractType(!visibleContractType) }}>
              <small>Tipos de contratos</small>
              {visibleContractType ? (
                <i><FaMinus /></i>
              ) : (
                <i><FaPlus /></i>
              )}

            </div>
            {visibleContractType && (
              <div>
                <div className={styles.value}>
                  <input type="checkbox" value="Aluguel" />
                  <label>Aluguel</label>
                </div>
                <div className={styles.value}>
                  <input type="checkbox" value="Compra" />
                  <label>Compra</label>
                </div>
              </div>
            )}

          </div>
          <div>
            <div className={styles.header} onClick={() => { setvisiblePropertType(!visiblePropertType) }}>
              <small>Tipos de casa</small>
              {visiblePropertType ? (
                <i><FaMinus /></i>
              ) : (
                <i><FaPlus /></i>
              )}
            </div>

            {visiblePropertType && (
              <div>
                <div className={styles.value}>
                  <input type="checkbox" value="casa" />
                  <label>Casa</label>
                </div>
                <div className={styles.value}>
                  <input type="checkbox" value="apartamento" />
                  <label>Apartamento</label>
                </div>
                <div className={styles.value}>
                  <input type="checkbox" value="sobrado" />
                  <label>Sobrado</label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

}