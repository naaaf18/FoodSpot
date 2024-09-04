import { useState } from "react";
import useRestaurant from "../utils/useRestaurant";

import FoodCategory from "./FoodCategory";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenus = () => {
    const { resId } = useParams();
    const res = useRestaurant(resId); //custom hook

    const [showIndex, setShowIndex] = useState(0);

    if (res === undefined) {
        return <Shimmer />;
    }
    console.log(res)

    const restaurantInfo = res?.cards[2]?.card?.card?.info?.name;
    const itemCards = res?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const categories = res?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("categories:", categories);

    if (!restaurantInfo || !itemCards) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwo } = restaurantInfo;

    return (
        <div className="menu  mt-12 text-center">
            <h1 className="font-bold text-blue-900 text-3xl">{name}</h1>
            <h2 className="font-semibold text-slate-900 pt-6 pb-12">
                {cuisines.join(",")}- Rs:{costForTwo / 100} for Two
            </h2>
            <ul>
                <h3 className="text-2xl font-semibold text-slate-800">Menu</h3>
                {/* {itemCards.map((item) => {
                    return (
                        <li className="font-medium" key={item.card.info.id}>
                            {item.card.info.name} - <span className="font-semibold" >Rs:{item.card.info.price / 100}</span>
                        </li>
                    );  
                })} */}

                {categories.map((category, index) => (
                    <FoodCategory key={category.card.card.title} data={category?.card?.card} showItems={index === showIndex && true} setShowIndex={() => setShowIndex(showIndex===index?null:index)} />
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenus;
