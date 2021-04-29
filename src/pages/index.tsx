import { GetStaticProps } from 'next';
import { CardHouse } from '../components/cardHouse'
import { api } from '../services/axiosbackend';
import styles from '../styles/index.module.scss'

interface propertyInfo{
  id:string,
  city:string,
  state:string,
  imageLink:string,
  amountValue:number,
}

interface CardInfo {
  properties:Array<propertyInfo>
}


export default function Home({properties}:CardInfo) {
  return (
<>

    <h1>aaaaaa</h1>
    <div className={styles.table}>
      {
        properties.map(house=>{
          return(
            <CardHouse id={house.id} state={house.state} city={house.city} amountValue={house.amountValue} imageLink={house.imageLink} key={house.id}/>
          )
        })
      }
    </div>
    
 </>     
  )
}

export const getStaticProps:GetStaticProps = async ()=>{
  
  const {data} = await api.get('property');

  const properties = data.map(property=>{
    return{
        id:property.id,
        city:property.city.name,
        state:property.city.uf,
        amountValue:Number(property.amountValue),
        imageLink:"https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
        
    }
    
  })

  return{
    props:{
      properties
    },

    revalidate:60  //aqui define quanto tempo deve ser feita a requisição em getStaticProps
  }
}

/*property.map(house=>{
      return(
        <CardHouse id={house.id} state={house.state} city={house.city} amountValue={house.amountValue} imageLink={house.imageLink} key={house.id}/>
      )
    })*/