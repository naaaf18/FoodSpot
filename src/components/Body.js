import { useState, useEffect, useContext } from "react";
import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { handleSearch } from "../utils/utils";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import axios from "axios";
const Body = () => {
  const [inputText, setInputText] = useState("");
  const [originalRestroList, setOriginalRestroList] = useState([]);
  //const [originalRestroList2, setOriginalRestroList2] = useState([]);

  const [filteredRestroList, setFilteredRestroList] = useState([]);
  //const [filteredRestroList2, setFilteredRestroList2] = useState([]);

  const {user,setUser}=useContext(UserContext);
 
  useEffect(() => {
    fetchResData();
}, []);


const fetchResData = async () => {
    try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2920667&lng=75.8257955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        setOriginalRestroList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRestroList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    } catch (error) {
        console.log(error);
    }
};

  
  const online = useOnline();

  if(!online){
    return(<h1>The site is offline</h1>)
  }
   //if(filteredRestroList.length===0) return <h1>There are no restaurant that match your filter</h1>;
  return (originalRestroList?.length===0)?( <Shimmer/> ): (
    <div>
      <div className="searchcontainer p-5 bg-pink-50 my-2">
        <input
          data-testid="input"
          type="text"
          className="focus:bg-slate-200"
          placeholder="Search for restaurant"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button data-testid="searchbtn" className="p-2 m-2 text-white rounded-lg  bg-slate-400 hover:bg-black" onClick={()=>{
         const data= handleSearch(originalRestroList,inputText)
         setFilteredRestroList(data)
        }}>
          Search
        </button>
        <input value={user.name} onChange={ e=>
         setUser({ ...user,name:e.target.value})
       } ></input>
       <input value={user.email} onChange={ e=>
         setUser({ ...user,email:e.target.value})
       } ></input>
      </div>
      <div className="flex flex-wrap" data-testid='reslist'>
        {filteredRestroList.map((res) => (
         <Link to={"restaurant/"+res.info.id}  key={res.info.id} ><RestaurantCard {...res } /></Link> 
        ))}
        
      </div>
    </div>
  )
}
export default Body;






/**
 * 
 * Testing 
 * Different types of Testing
 * -manual Testing 
 * -Automated Testing
 *  -Selenium Testing 
 * 
 * 
 * 
 * steps
 * 1.npm install --save-dev @testing-library/react
 * 2. Install  npm install -D jest
 * 3.Configure jest
 * 4.npx jest --init
 * Test environment -js dom
 * provider for coverage =babel
 * 5. Install jest environment jsdom
 * 6.create test file __tests__
 * 7. write test.js on the file of 
 * 8.import the file for test 
 * 9.jest babel config npm install --save-dev babel-jest @babel/core @babel/preset-env
 * 10.babel.config.js
 *  module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
babelrc need json
 * 11. Import {render} from react testing library
     test("the condition to nderstand what we are testing",()=>{
      const header = render(<Component/>)
     }
 * the render is given by the react library
 * now there will be error as the file cannot understand what is jsx
 * so we want to configure babel in the preset that we made in the babelrc
 *  ["babel/preset-react",{"runtime":"automatic"}]
 * 12.install npm i -D @babel/preset-react
 * 13.add provider
 * 14.add react router dom or {static router}
 * import { StaticRouter } from 'react-router-dom/server'
 * 15.when we test on body the fetch will not work so we need to create
 *   global.fetch = jest.fn()
 * 16.    "watch-test":"jest --watchAll" in json lock
 * 17. npm i @testing-library/jest-dom

 * 
 *
 * 
*/
