
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

interface HouseContextData{
    listHouses:House[]
}

export const HouseContext = createContext({} as HouseContextData);

interface HomeChildrenProvider{
  children:ReactNode
}

export function PlayerContextProvider({children}:HomeChildrenProvider){
  const [listPoadcast,setListPoadcast] = useState([])
  const [currentEpisodeIndex,setCurrentEpisodeIndex] = useState(0);
  const [isPlaying,setIsPlaying] = useState(false)

 
  function playPrevious(){
    const index = currentEpisodeIndex-1;
    if(index > -1){
      setCurrentEpisodeIndex(index)
    }
  }

    return(
        <HouseContext.Provider value={null}>
          {children}
        </HouseContext.Provider>
    )
   
}

