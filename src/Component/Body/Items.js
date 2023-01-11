import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";

import classes from "./Items.module.css";
import { Button, Card } from "react-bootstrap";

const Items = (props) => {
  const cartcxt = useContext(CartContext);

  return (
    <div>
      <div>
        {" "}
        <h1 className={classes.h1}>Shopping Bazar</h1>
        {/* {props.Item.map((items) => (
        <div className={classes.item} key={items.title}>
          <Card style={{ width: "18rem", height: "15rem" }}>
            <Card.Title
              style={{ color: "black", textAlign: "center", margin: "20px" }}
            >
              {items.title}
            </Card.Title>

            <Link to='/Store/details'> <Card.Img src={items.imageUrl} alt="colorimg" /></Link>

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
                  onClick={() =>
                    cartcxt.addItem({
                      ...items,
                      amount: 1,
                      id: Math.random().toString(36),
                    })
                  }
                />
              </span>
            </Card.Body>
          </Card>
        </div>
      ))} */}
      </div>

      <div className={classes.item} key={props.Item[0].title}>
        <Card style={{ width: "18rem", height: "15rem" }}>
          <Card.Title
            style={{ color: "black", textAlign: "center", margin: "20px" }}
          >
            {props.Item[0].title}
          </Card.Title>

          <Link to="/Store/color">
            {" "}
            <Card.Img src={props.Item[0].imageUrl} alt="colorimg" />
          </Link>

          <Card.Body>
            {props.Item[0].price}₹
            <span>
              <Button
                variant="info"
                style={{ color: "white", textDecorationStyle: "bold" }}
                as="input"
                type="submit"
                value="ADD TO CART"
                size="sm"
                onClick={() =>
                  cartcxt.addItem({
                    ...props.Item[0],
                    amount: 1,
                    id: Math.random().toString(36),
                  })
                }
              />
            </span>
          </Card.Body>
        </Card>
      </div>
      {/* ****************** ********************/}
      <div className={classes.item} key={props.Item[1].title}>
        <Card style={{ width: "18rem", height: "15rem" }}>
          <Card.Title
            style={{ color: "black", textAlign: "center", margin: "20px" }}
          >
            {props.Item[1].title}
          </Card.Title>

          <Link to="/Product2/balckAndWhite">
            {" "}
            <Card.Img src={props.Item[1].imageUrl} alt="colorimg" />
          </Link>

          <Card.Body>
            {props.Item[1].price}₹
            <span>
              <Button
                variant="info"
                style={{ color: "white", textDecorationStyle: "bold" }}
                as="input"
                type="submit"
                value="ADD TO CART"
                size="sm"
                onClick={() =>
                  cartcxt.addItem({
                    ...props.Item[1],
                    amount:1,
                    id: Math.random().toString(),
                  })
                }
              />
            </span>
          </Card.Body>
        </Card>
      </div>
      {/* ***************************** */}
      <div className={classes.item} key={props.Item[2].title}>
        <Card style={{ width: "18rem", height: "15rem" }}>
          <Card.Title
            style={{ color: "black", textAlign: "center", margin: "20px" }}
          >
            {props.Item[2].title}
          </Card.Title>

          <Link to="/Product3/yellowandblack">
            {" "}
            <Card.Img src={props.Item[2].imageUrl} style={{height:'18rem'}} alt="colorimg" />
          </Link>

          <Card.Body>
            {props.Item[2].price}₹
            <span>
              <Button
                variant="info"
                style={{ color: "white", textDecorationStyle: "bold" }}
                as="input"
                type="submit"
                value="ADD TO CART"
                size="sm"
                onClick={() =>
                  cartcxt.addItem({
                    ...props.Item[2],
                    amount: 1,
                    id: Math.random().toString(36),
                  })
                }
              />
            </span>
          </Card.Body>
        </Card>
      </div>
      {/* ***************************** */}
      <div className={classes.item} key={props.Item[3].title}>
        <Card style={{ width: "18rem", height: "15rem" }}>
          <Card.Title
            style={{ color: "black", textAlign: "center", margin: "20px" }}
          >
            {props.Item[3].title}
          </Card.Title>

          <Link to="/Product4/blueColor">
            {" "}
            <Card.Img src={props.Item[3].imageUrl} alt="colorimg" />
          </Link>

          <Card.Body>
            {props.Item[3].price}₹
            <span>
              <Button
                variant="info"
                style={{ color: "white", textDecorationStyle: "bold" }}
                as="input"
                type="submit"
                value="ADD TO CART"
                size="sm"
                onClick={() =>
                  cartcxt.addItem({
                    ...props.Item[3],
                    amount: 1,
                    id: Math.random().toString(),
                  })
                }
              />
            </span>
          </Card.Body>
        </Card>
      </div>
      {/* ********************** */}
      <div
        style={{
          color: "skyblue",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
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
