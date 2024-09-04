import { imageURL } from "../constants";
export const CartCard = (props) => {
console.log(props)

  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-pink-50 ">

      <img className=" " alt="burger" src={imageURL + props.card.info.imageId} />
      <h2 className="font-bold text-xl">{props.card.info.name}</h2>
      <h2 className="font-bold text-xl">{props.card.info.defaultPrice/100}rs</h2>


    </div>
  )
}
export default CartCard;