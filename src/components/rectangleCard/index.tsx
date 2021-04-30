import { FaHome, FaMapMarkedAlt, FaMapMarkerAlt, FaRegHandshake, FaUserTie } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import styles from "./style.module.scss";


export function RectangleCard() {

  return (
      <div className={styles.itemCard}>
        <a className={styles.profileLink}>
          <div className={styles.cardHeader}>
            <h3 className={styles.city}>Juazeiro do Norte-CE</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardImage}>
              <img src="https://cdn.pixabay.com/photo/2017/08/03/14/38/ice-cream-2576622_1280.jpg" alt="CASA"/>   
            </div>
            <div className={styles.cardInfo}>
                <ul className="list-info">
                  <li>
                    <span><GiTwoCoins size={18}/> R$ 600</span>
                  </li>
                  <li>
                    <span><FaMapMarkedAlt size={16}/> Rua manoel, Bairro Ze, n100</span>
                  </li>

                  <li>
                    <span><FaRegHandshake size={16}/> Aluguel</span>
                  </li>
                  <li>
                    <span><FaUserTie size={16}/> Anunciante</span>
                  </li>
                </ul>
                <hr/>
                <p><FaHome size={16}/> Casa bastante aconchegante boa vizinhança </p>
              </div>
            </div>
        </a>
          <div className={styles.footer}>
            <div>Ver detalhes</div>
          </div>
    </div>
  );

}