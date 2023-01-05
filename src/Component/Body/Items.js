import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./Items.module.css";
import { Button, Card } from "react-bootstrap";

const Items = (props) => {
  const cartcxt = useContext(CartContext);
 
  return (
    <div>
      <h1 className={classes.h1}>MUSIC</h1>
      {props.Item.map((items) => (
        <div className={classes.item} key={items.title}>
          <Card style={{ width: "18rem", height: "15rem" }}>
            <Card.Title
              style={{ color: "black", textAlign: "center", margin: "20px" }}
            >
              {items.title}
            </Card.Title>

            <Card.Img src={items.imageUrl} alt="colorimg" />

            <Card.Body>
              {items.price}₹
              <span>
                <Button
                  variant="info"
                  style={{ color: "white", textDecorationStyle: "bold" }}
                  as="input"
                  type="submit"
                  value="ADD TO CART"
                  size="sm"
                  onClick={() => cartcxt.addItem({...items,amount:1,id:Math.random().toString(36)})}
                />
              </span>
            </Card.Body>
          </Card>
        </div>
      ))}
      <div style={{ color: "skyblue", textAlign: "center" }}>
        <Button
          variant="secondary"
          style={{ color: "skyblue", textAlign: "center" }}
        >
          See the cart
        </Button>
      </div>
    </div>
  );
};
export default Items;
