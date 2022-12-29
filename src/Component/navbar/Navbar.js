import Container from  'react-bootstrap/Container'
import {Navbar,Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import Header from './Header';
const Navbar1 = ()=>{

    return (
        <div>
<Navbar bg="dark" expand ="lg" variant="dark"  fixed='top'>
<Container   > 
     
    <Navbar.Brand>HOME</Navbar.Brand>
    <Navbar.Brand>STORE</Navbar.Brand>
    <Navbar.Brand>ABOUT</Navbar.Brand> 
    <Button  variant ="dark" style={{border:"1px solid skyblue"}} type="click">Cart</Button>
</Container>
</Navbar>

 
     
      


        </div>
    )

}
export default  Navbar1;