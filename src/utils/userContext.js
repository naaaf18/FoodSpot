import { createContext } from "react";

const UserContext = createContext({user :{
    height:"nawaf",
    age:18

},})
UserContext.displayName ='usercontext'

export default UserContext;

//game:{
    //played:'PUBG',
  //  time:202
  //  }