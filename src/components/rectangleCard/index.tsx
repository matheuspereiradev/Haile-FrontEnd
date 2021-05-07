import { FaHome, FaMapMarkedAlt, FaMapMarkerAlt, FaRegHandshake, FaUserTie } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import styles from "./style.module.scss";

interface PropsCard {
    id:string,
    city:string,
    state:string,
    imageLink:string,
    amountValue:number,
    contractType:string,
    adviser:string,
    street:string,
    district:string,
    number:string,
    details:string
  }
  

export function RectangleCard({id,city,state,amountValue,imageLink,contractType,adviser,street,district,number,details}:PropsCard) {

  return (
      
      <div className={styles.itemCard}>
         
        <a className={styles.profileLink}>
          <div className={styles.cardHeader}>
            <h3 className={styles.city}>{`${city}-${state}`}</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardImage}>
              <img src={imageLink} alt={`imovel em ${city}-${state} ${street}, ${district}, Nº ${number}`}/>   
            </div>
            <div className={styles.cardInfo}>
                <ul>
                  <li>
                    <p><GiTwoCoins size={18}/> {amountValue}</p>
                  </li>
                  <li>
                    <p><FaMapMarkedAlt size={16}/> {`${street}, ${district}, Nº ${number}`}</p>
                  </li>

                  <li>
                    <p><FaRegHandshake size={16}/> {contractType}</p>
                  </li>
                  <li>
                    <p><FaUserTie size={16}/> {adviser}</p>
                  </li>
                </ul>
                <hr/>
                <p><FaHome size={16}/> {details} </p>
              </div>
            </div>
        </a>
          <div className={styles.footer}>
            <div>Ver detalhes</div>
          </div>
    </div>
  );

}