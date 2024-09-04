import React, { lazy ,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
//import Instamart from "./components/Instamart";
const Instamart = lazy(()=>import ("./components/Instamart"));
import UserContext from "./utils/userContext";
import Store from "./utils/store";
import {Provider} from 'react-redux'
import Cart from "./components/Cart";


const AppLayout = () => {
  const [user , setUser]= useState ({
    name :"The user name have changed",
    email:"username@gamil.com"
  })

  return (
    <Provider store={Store}>
    <UserContext.Provider value={{user : user,
      setUser : setUser,
    }}>
      <HeaderComponent />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </Provider>

  )
}

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/About",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />

          }
        ]
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/Instamart",
        element: <Suspense fallback={<Shimmer/>}><Instamart /></Suspense>
      },

      {
        path: "/Cart",
        element: < Cart/>
      },
    ]
  },

])
//const heading2 = React.createElement('h2',{id:'titles',key:"2"},'Heading 2');
//const container = React.createElement('div',{id:'container',},[heading,heading2 ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter} />);