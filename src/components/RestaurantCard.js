import { useEffect } from "react";
import { imageURL } from "../constants";
export const RestaurantCard = (props) => {
  const resData=props;
  const {cloudinaryImageId,
    name,
    cuisines,
    avgRating,

  }=resData?.info


  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-pink-50 ">

      <img className=" " alt="burger" src={imageURL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{avgRating}</h4>

    </div>
  )
}