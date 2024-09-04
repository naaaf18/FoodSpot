import { useState,useEffect } from "react";
import { Fetchmenu } from "../constants";
const useRestaurant=(id)=>{
    const [res,setres]=useState([]);
    useEffect(()=>{
        RestaurantDetails();

    },[])

 const RestaurantDetails=async()=>{

     const data = await fetch(Fetchmenu+id);
      const json= await data.json();
      setres(json?.data)//.cards[2]?.card?.card?.info
      console.log(json)
    }
    return res;
    

}
export default useRestaurant;