import { useSelector } from "react-redux"
import CartCard from "./cartCard";
import { useDispatch } from "react-redux";
import { clearCart} from "../utils/cartSlice";

const Cart=()=>{
const cartItems= useSelector((store)=>store.cart.items)
console.log(cartItems)
const dispatch = useDispatch()
const handleClearCart=()=>{
    dispatch(clearCart())
}
    return (

     <div className="">
    <h1>  this is a cart containing {cartItems.length}items </h1>
    <button className="bg-red-300 p-2 m-12" onClick={()=>handleClearCart()}>Clear CART</button>
    <div className="flex">
        {cartItems.map((item)=><CartCard   key = {item.card.info.id}{...item}  />   
)}
    </div>

     </div>

    )
}
export default Cart;