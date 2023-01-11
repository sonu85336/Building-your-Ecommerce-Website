import React from "react";
import Loginpages from "./Loginpages";
import NavForAll from '../NavForAll'
import Footer from  '../../Component/footer/Footer'
import Header from '../../Component/navbar/Header'
function Login() {
  return (
    <div>
<NavForAll/>
 <Header/>
     <Loginpages/>
     <Footer/>
    </div>
  );
}

export default Login;
