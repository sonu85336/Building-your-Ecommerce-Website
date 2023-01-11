import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";
import {   useContext } from "react";
import CartContext from "../../store/cart-context";

const Navbar1 = (props) => {
  const authCtx = useContext(CartContext)
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/Home"
          >
            HOME
          </NavLink>

          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/Store"
          >
            STORE
          </NavLink> 

          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/About"
          >
            ABOUT
          </NavLink>
          
          {isLoggedIn&&<button style={{textDecoration: "none", color: "white" ,background:'none',border:'none'}}>Logout</button> } 
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/Contactus"
          >
            Contact us
          </NavLink>
          <CartButton onButtonpass={props.onOpenButton} />
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbar1;
