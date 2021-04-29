import styles from "./style.module.scss";

interface PropsCard {
  name:string,
  imageLink:string,
  amountValue:number,
}

export function CardItem({name,amountValue,imageLink}:PropsCard) {

  return (
    <div className={styles.cardContainer}>
      <div className="card">
        <img src={imageLink} alt={name} />
        <div className="card-body">
          <div className="card-title">
            {name}
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