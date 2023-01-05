import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavForAll = () => {
  return (
    <Fragment >
      <div  style={{margin:'0',padding:'0',border:'0',verticalAlign:'baseline'}}>
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
        </Container>
      </Navbar>
      </div>
    </Fragment>
  );
};
export default NavForAll;
