
import {createContext, ReactNode, useState} from 'react';


interface House{
    id:string
    state:string
    city:string
    amountValue:number
    imageLink:string
    street:string
    houseNumber:number
    district:string
    details:string
    adviser:string
    slugAdviser:string
    contractType:string
    idContractType:number
    idHouseType:number
}

interface ContractType{
  id:number
  name:string
}

interface HousesType{
  id:number
  name:string
}

interface HouseContextData{
    listHouses:Array<House>,
    listContractTypes:Array<ContractType>,
    listHousesTypes:Array<HousesType>,
    setFilters:(housesTypes:Array<HousesType>, contractTypes:Array<ContractType>)=>void;
}

export const HouseContext = createContext({} as HouseContextData);

interface HomeChildrenProvider{
  children:ReactNode
}

export function HouseContextProvider({children}:HomeChildrenProvider){
  const [listContractTypes,setListContractTypes] = useState([])
  const [listHousesTypes,setListHousesTypes] = useState([])
  const [listHouses,setListHouses] = useState([])

  // const [currentEpisodeIndex,setCurrentEpisodeIndex] = useState(0);
  // const [isPlaying,setIsPlaying] = useState(false)

 
  function setFilters(housesTypes:Array<HousesType>, contractTypes:Array<ContractType>){
    setListContractTypes(contractTypes)
    setListHousesTypes(housesTypes)
  }

    return(
        <HouseContext.Provider value={{listHouses,listContractTypes,listHousesTypes,setFilters}}>
          {children}
        </HouseContext.Provider>
    )
   
}

