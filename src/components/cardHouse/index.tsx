import styles from "./style.module.scss";
import {FaMapMarkerAlt} from "react-icons/fa"
import {GiTwoCoins} from "react-icons/gi"

interface PropsCard {
  id:string,
  city:string,
  state:string,
  imageLink:string,
  amountValue:number,
}

export function CardHouse({id,city,state,amountValue,imageLink}:PropsCard) {

  return (
    <div className={styles.cardContainer}>
        <img src={imageLink} alt={"House in "+city} />
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>
            <FaMapMarkerAlt size={12}/>{city +'-'+state}
          </div>
          <div className={styles.cardValue}>
            <GiTwoCoins size={14}/>{amountValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
          <button className={styles.btnBuy}>ver datalhes</button>
        </div>
    </div>
  );

}