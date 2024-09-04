import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { imageURL } from "../constants";



const ItemList = ({ items }) => {

    const dispatch=useDispatch();  

    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="pt-2 pb-2">
                            <span className="font-bold">
                                {item.card.info.name} - Rs:{item.card.info.price / 100}{" "}
                            </span>
                        </div>
                        <p>{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId ? (
                        <div className="w-3/12 flex justify-end">
                            <div className="absolute">
                                <button onClick={()=> handleAddItem(item)} className="mx-10 p-2  rounded-md shadow-md bg-black text-white hover:bg-opacity-50  ">
                                    add +
                                </button>
                            </div>
                            <img src={imageURL + item.card.info.imageId} className=" w-36 h-auto rounded-md" alt="img" />
                        </div>
                    ) : (
                        <p className="text-sm flex justify-end">Next available at 7 am, tomorrow</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ItemList;
