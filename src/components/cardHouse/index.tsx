import styles from "./style.module.scss";

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
      <div className="card">
        <img src={imageLink} alt={"House in "+city} />
        <div className="card-body">
          <div className="card-title">
            {city +'-'+state}
          </div>
          <div className="card-value">
            <small>R$</small>{amountValue}
          </div>
          <button className="btn-buy">Adicionar ao carrinho</button>
        </div>

      </div>
    </div>
  );

}