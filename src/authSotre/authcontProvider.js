import { useState } from "react";
import AuthCartContext from "./authcontext";

const AuthContProvider = (props) =>{
    const initialToken = localStorage.getItem('token')
   const [ token,setToken] = useState(initialToken)
   
   const userIsLoggedIn = !!token;
   
   const loginHandler =(token)=>{
    setToken(token);
    localStorage.setItem('token',token)
   }
const logoutHandler =()=>{
    setToken(null)
    localStorage.removeItem('token')
}
  
    const  contextValue = {
       TokenTaked:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
          
    }
    // console.log('fromprovider',contextValue.tokentaken )
    
return (
    <AuthCartContext.Provider value={contextValue}>
        {props.children}
    </AuthCartContext.Provider>
)


}
export default   AuthContProvider;