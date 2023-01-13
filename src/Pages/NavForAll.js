import { Fragment, useContext } from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import CartContext from "../store/cart-context";
const NavForAll = () => {
  const authCtx = useContext(CartContext);
  const history = useHistory()
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler =()=>{
    authCtx.logout()
    history.replace('/Login')
  }
  return (
    <Fragment>
      <div
        style={{
          margin: "0",
          padding: "0",
          border: "0",
          verticalAlign: "baseline",
        }}
      >
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
          <Container>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/Home"
            >
              HOME
            </NavLink>

           {isLoggedIn && <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/Store"
            >
              STORE
            </NavLink>} 

            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/About"
            >
              ABOUT
            </NavLink>

            {!isLoggedIn&& <NavLink
              to="/Login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </NavLink>}
             {isLoggedIn&&<button style={{textDecoration: "none", color: "white" ,background:'none',border:'none'}}  onClick={logoutHandler}>Logout</button> } 
             <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/Contactus"
            >
              Contact us
            </NavLink>
          </Container>
        </Navbar>
      </div>
    </Fragment>
  );
};
export default NavForAll;
