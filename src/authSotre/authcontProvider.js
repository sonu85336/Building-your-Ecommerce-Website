import { useState } from "react";
import AuthCartContext from "./authcontext";

const AuthContProvider = (props) =>{
   const [ token,setToken] = useState(null)
   
   const userIsLoggedIn = !!token;
   
   const loginHandler =(token)=>{
    setToken(token);
   }
const logoutHandler =()=>{
    setToken(null)
}
  
    const  contextValue = {
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
          
    }
    
return (
    <AuthCartContext.Provider value={contextValue}>
        {props.children}
    </AuthCartContext.Provider>
)


}
export default   AuthContProvider;