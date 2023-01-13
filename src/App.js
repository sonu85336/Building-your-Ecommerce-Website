import React, { useContext} from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Product1 from "./Component/Body/BodyPages/Product1";
import Product2 from "./Component/Body/BodyPages/Product2";
import Product3 from "./Component/Body/BodyPages/Product3";
import Product4 from "./Component/Body/BodyPages/Product4";
import About from "./Pages/About";
import ContactUs from "./Pages/contactus/ContactUs";
import Home from "./Pages/Home";
import Store from "./Store";
import Login from "./Pages/loginpages/Login";
import CartContext from "./store/cart-context";
import axios from "axios";
function App() {
  const authCtx = useContext(CartContext);
   
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/Store" exact>
              <Store />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/Store/:StoreId">
              <Product1 />
            </Route>
          )}{" "}
          {authCtx.isLoggedIn && (
            <Route path="/Product2/:Product2">
              <Product2 />
            </Route>
          )}{" "}
          {authCtx.isLoggedIn && (
            <Route path="/Product3/:Product3">
              <Product3 />
            </Route>
          )}{" "}
          {authCtx.isLoggedIn && (
            <Route path="/Product4/:Product4">
              <Product4 />
            </Route>
          )}
          <Route path="/Contactus">
            <ContactUs />
          </Route>{" "}
          {!authCtx.isLoggedIn && (
            <Route path="/Login">
              <Login />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/Login" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
