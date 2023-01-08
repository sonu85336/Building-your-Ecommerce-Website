import React from "react";
import classes from "./FirstDetails.module.css";
import ReactImageMagnify from "react-image-magnify";
import Image1 from "../../../../assets/productimage/product4of1.jpg";
import Image1200 from "../../../../assets/productimage/product4of11200.jpg";
function FourthProduct() {
  return (
    <div>
      <div>
        <div className={classes.img}>
        <div style={{ width: "300px", height: "300px" ,display:'inline-block' }}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: Image1,
                },
                largeImage: {
                  src: Image1200,
                  width: 800,
                  height: 1200,
                },
              }}
            /> </div>

          <ul>
            {" "}
            <h6>Smartees</h6>
            <div>
              <h6>Men Full Sleeve Printed Hooded Sweatshirt</h6>
            </div>
            <p style={{ color: "green" }}>
              {" "}
              <small>Special price</small>
            </p>
            <small>
              <del>₹1,399</del> <sapn style={{ color: "green" }}> 48% off</sapn>
            </small>{" "}
            <h5>₹900 </h5>
            <p>
              {" "}
              <span className={classes.star}>
                3.8 <span className={classes.starin}>*</span>
              </span>{" "}
              133 ratings and 33 reviews
            </p>
          </ul>
        </div>

        <div>
          <p>Available offers</p>
          <span>
            <ul>
              <li>Special Price Get at flat ₹900 T&C</li>
              <li>
                Partner OfferPurchase now & get a surprise cashback coupon for
                January / February 2023 Know More
              </li>

              <li>
                Partner OfferSign up for Flipkart Pay Later and get Flipkart
                Gift Card worth up to ₹500* Know More
              </li>
              <li>
                {" "}
                Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order
                Value ₹1000. Valid once per Paytm account T&C
              </li>
            </ul>
          </span>
        </div>

        <div className={classes.img}>
          <ul>
            <h3>Ratings & Reviews</h3>
            <span>
              <p>
                {" "}
                <span className={classes.star}>
                  5 <span className={classes.starin}>*</span>
                </span>{" "}
                Nice
                <div>Ankal Meghanad

Aug, 2019</div>
                Certified Buyer, Berhampur
              </p>

              <p>
                {" "}
                <span className={classes.star}>
                  4 <span className={classes.starin}>*</span>
                </span>{" "}
                Very beautiful dress . 👌Jesi picture m show hori thi vese hi he
                I m so happy thanku fhilpkart😊
                <div>simi gidwani

Feb, 2020</div>
                Certified Buyer, Khandwa
              </p>

              <p>
                {" "}
                <span className={classes.star}>
                  5 <span className={classes.starin}>*</span>
                </span>{" "}
                Good product it is stiched perfect for XL
                <div>Sonu Kumar Oct, 2020</div>
                Certified Buyer, New Delh
              </p>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FourthProduct;
