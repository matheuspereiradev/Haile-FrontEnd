import { GetStaticProps } from 'next';
import { Banner } from '../components/banner';
import { CardHouse } from '../components/cardHouse'
import { Filters } from '../components/filters';
import { RectangleCard } from '../components/rectangleCard';
import { api } from '../services/axiosbackend';
import styles from '../styles/index.module.scss'

interface propertyInfo{
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

interface CardInfo {
  properties:Array<propertyInfo>
}


export default function Home({properties}:CardInfo) {
  return (
<>
    <Banner/>
    <main className={styles.contentMain}>
      <div className={styles.leftArea}>
        <div className={styles.componentFilters}>
          <Filters/>
        </div>
          
      </div>
      
      <div className={styles.table}>
        {
          properties.map(house=>{
            return(
                <RectangleCard 
                  id={house.id} 
                  state={house.state} 
                  city={house.city} 
                  amountValue={house.amountValue} 
                  imageLink={house.imageLink} 
                  key={house.id} 
                  street={house.street} 
                  number={house.number}
                  district={house.district}
                  details={house.details}
                  adviser={house.adviser}
                  contractType={house.contractType}
                />
              )
          })
        }
      </div>
    </main>
    
 </>     
  )
}

export const getStaticProps:GetStaticProps = async ()=>{
  
  const {data} = await api.get('property');

  const properties:propertyInfo = data.map(property=>{
    return{
        id:property.id,
        city:property.city.name,
        state:property.city.uf,
        amountValue:Number(property.amountValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        imageLink:"https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
        street: property.street,
        number:property.houseNumber,
        district:property.district,
        details:property.note,
        adviser:property.advertiser.name,
        contractType:property.contractType.name
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