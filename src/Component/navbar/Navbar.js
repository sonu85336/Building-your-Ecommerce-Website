import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";
 
const Navbar1 = (props) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top"  >
        <Container>
           
               
                <NavLink   style={{textDecoration:'none', color:'white'}} to='/Home'>HOME</NavLink>
              
              
                <NavLink  style={{textDecoration:'none', color:'white'}} to='/Store'>STORE</NavLink>
   
                <NavLink style={{textDecoration:'none', color:'white'}} to="/About">ABOUT</NavLink>
                
          <CartButton onButtonpass={props.onOpenButton} />
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbar1;
