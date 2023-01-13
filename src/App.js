import React, { useContext,Suspense} from "react";

import { Route, Switch, Redirect } from "react-router-dom";

// import Product1 from "./Component/Body/BodyPages/Product1";
// import Product2 from "./Component/Body/BodyPages/Product2";
// import Product3 from "./Component/Body/BodyPages/Product3";
// import Product4 from "./Component/Body/BodyPages/Product4";
// import About from "./Pages/About";
// import ContactUs from "./Pages/contactus/ContactUs";
// import Home from "./Pages/Home";
// import Store from "./Store";
// import Login from "./Pages/loginpages/Login";
import CartContext from "./store/cart-context";

const Home  = React.lazy(()=>import("./Pages/Home"))
 const Store  = React.lazy(()=>import("./Store"))
const ContactUs = React.lazy(()=>import("./Pages/contactus/ContactUs"))
const About = React.lazy(()=>import("./Pages/About"))
const Login = React.lazy(()=>import("./Pages/loginpages/Login"))
const Product1 = React.lazy(()=>import("./Component/Body/BodyPages/Product1"))
const Product2 = React.lazy(()=>import("./Component/Body/BodyPages/Product2"))
const  Product3 = React.lazy(()=>import("./Component/Body/BodyPages/Product3"))
const  Product4= React.lazy(()=>import("./Component/Body/BodyPages/Product4"))
function App() {
  const authCtx = useContext(CartContext);
   
  return (
    <div>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
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
        </Suspense>
      </main>
    </div>
  );
}

export default App;
