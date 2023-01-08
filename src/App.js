import React from 'react'

import { Route ,Switch} from "react-router-dom";
 import ColorsPage from './Component/Body/BodyPages/ColorsPage';
import Product1 from './Component/Body/BodyPages/Product1';
import Product2 from './Component/Body/BodyPages/Product2';
import Product3 from './Component/Body/BodyPages/Product3';
import Product4 from './Component/Body/BodyPages/Product4';
import About from "./Pages/About";
import ContactUs from  './Pages/contactus/ContactUs'
import Home from './Pages/Home';
import Store from './Store'
function App () {
  return (
    <div> 
        
       <main>
        <Switch>
        <Route path="/About">
          <About/>
        </Route>
        <Route path='/Home'>
            <Home/> 
        </Route>
        <Route path='/Store' exact>
            <Store/>
        </Route>
        <Route  path='/Store/:StoreId'>
      <Product1/>
        </Route>
        <Route path="/Product2/:Product2">
          <Product2/>
        </Route>
        <Route path = "/Product3/:Product3">
          <Product3/>
        </Route>
        <Route path="/Product4/:Product4">
          <Product4/>
        </Route>
        <Route path='/Contactus'>
          <ContactUs/>
        </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App ;
