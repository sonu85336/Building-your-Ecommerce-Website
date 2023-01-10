import React, {createContext} from 'react';

const AuthCartContext = createContext({
  Tokenid:'',
  isLoggedIn:false,
  login:(token)=>{},
  logout:()=>{}
})
export default AuthCartContext;