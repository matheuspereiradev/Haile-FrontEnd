
import {createContext, ReactNode, useState} from 'react';

// interface House{
//     id:string
//     state:string
//     city:string
//     amountValue:number
//     imageLink:string
//     street:string
//     houseNumber:number
//     district:string
//     details:string
//     adviser:string
//     slugAdviser:string
//     contractType:string
//     idContractType:number
//     idHouseType:number
// }

interface ContractType{
  id:number
  name:string
}

interface HousesType{
  id:number
  name:string
}

interface FiltersContextData{
    listContractTypes:Array<ContractType>,
    listHousesTypes:Array<HousesType>,
    setFilters:(housesTypes:Array<HousesType>, contractTypes:Array<ContractType>)=>void;
}

export const FiltersContext = createContext({} as FiltersContextData);

interface HomeChildrenProvider{
  children:ReactNode
}

export function FiltersContextProvider({children}:HomeChildrenProvider){
  const [listContractTypes,setListContractTypes] = useState([])
  const [listHousesTypes,setListHousesTypes] = useState([])

  // const [currentEpisodeIndex,setCurrentEpisodeIndex] = useState(0);
  // const [isPlaying,setIsPlaying] = useState(false)

 
  function setFilters(housesTypes:Array<HousesType>, contractTypes:Array<ContractType>){
    setListContractTypes(contractTypes)
    setListHousesTypes(housesTypes)
  }

    return(
        <FiltersContext.Provider value={{listContractTypes,listHousesTypes,setFilters}}>
          {children}
        </FiltersContext.Provider>
    )
   
}

