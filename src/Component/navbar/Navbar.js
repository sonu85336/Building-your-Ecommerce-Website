import Container from  'react-bootstrap/Container'
import {Navbar} from 'react-bootstrap'
 
import CartButton from './CartButton';


const Navbar1 = (props)=>{

    return (
        <div>
<Navbar bg="dark" expand ="lg" variant="dark"  fixed='top'>
<Container   > 
     
    <Navbar.Brand>HOME</Navbar.Brand>
    <Navbar.Brand>STORE</Navbar.Brand>
    <Navbar.Brand>ABOUT</Navbar.Brand> 
   <CartButton    onButtonpass ={props.onOpenButton} />
</Container>
</Navbar>

 
     
      


        </div>
    )

}
export default  Navbar1;