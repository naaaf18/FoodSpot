import { useState , useContext} from "react"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/userContext"
import {useSelector} from 'react-redux'

const Heading =()=>{
  
    return (
        <a href="/">
        <img className="h-24"  data-testid="logo"        alt='image here 'src="https://fpimages.withfloats.com/tile/632972807f42460001be357d.png">

        </img>
        </a>
    )
}

const HeaderComponent=()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)
    const [isLogged,setIsLogged] = useState(false)
    const online = useOnline()
    const {user,game} = useContext(UserContext)
    return(
        <div className="flex justify-between bg-pink-50 sm:bg-blue-50 md:bg-yellow-100">
            <Heading/>
        <div className="py-10">
            <ul className="flex">
                <li className="px-2"><Link to='/'>Home</Link></li>
               <li className="px-2"> <Link to='/About'>About us</Link></li> 
               <li className="px-2"> <Link to='/Contact'>Conatact us</Link></li> 
               <li className="px-2"><Link to='/Instamart'>Instamart</Link></li>

                <li className="px-2" ><Link data-testid='cart' to='/Cart'>Cart-{cartItems.length}</Link></li>

            </ul>
        </div>
        <h1 data-testid='onlinestatus'>{online? "💚":"❤️"}</h1>
        {user.name +user.email }
        { (isLogged)? <button onClick={()=>setIsLogged(false)}>logout</button>:<button onClick={()=>setIsLogged(true)} >login</button>}

        </div>
    )
}
export default HeaderComponent;