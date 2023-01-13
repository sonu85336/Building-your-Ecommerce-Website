import { Fragment, useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
const CartButton = (props) => {
  const cartctx = useContext(CartContext);
const [quantity,setQuantity] = useState(0)
   useEffect(()=>{
    setQuantity(cartctx.items.length||0)
   },[cartctx.items])
  return (
    <Fragment>
      <Button
        onClick={props.onButtonpass}
        variant="dark"
        style={{ border: "1px solid skyblue" }}
        type="click"
      >
        Cart {quantity}
      </Button>
    </Fragment>
  );
};
export default CartButton;
