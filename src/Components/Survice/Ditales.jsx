
import { useEffect, useState } from "react";
import Showdtls from "./Showdtls";
import { useLoaderData, useParams } from "react-router-dom";



const Ditales = () => {

  const [card,setCard]=useState();
  const {id} = useParams();
  
  const cards = useLoaderData()
  // console.log(cards)
  useEffect(()=>{
  
      const findCard = cards?.find( card => card.id == id);
      console.log(findCard);
      setCard(findCard)
  },[cards,id])

    return (
   <div className="px-32 mt-10">
   <Showdtls cards={card}></Showdtls>

   </div>
    );
};

export default Ditales;