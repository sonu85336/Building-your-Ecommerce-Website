import React from "react";
import classes from "./FirstDetails.module.css";
import ReactImageMagnify from "react-image-magnify";
import Image1 from "../../../../assets/productimage/product2of1.jpg";
import Image1200 from "../../../../assets/productimage/product2of11200.jpg";
function SecondDetails() {
  return (
    <div>
     
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
              <h6>LEWEL</h6>
              <div>
                <h6>Men Slim Fit Checkered Casual Shirt</h6>
              </div>
              <p style={{ color: "green" }}>
                {" "}
                <small>Special price</small>
              </p>
              <small>
                <del>₹1,999</del>{" "}
                <sapn style={{ color: "green" }}> 75% off</sapn>
              </small>{" "}
              <h5>₹500 </h5>
              <p>
                {" "}
                <span className={classes.star}>
                  4 <span className={classes.starin}>*</span>
                </span>{" "}
                11,644 ratings and 733 reviews
              </p>
            </ul>
          </div>

          <div>
            <p>Available offers</p>
            <span>
              <ul>
                <li>Special Price Get at flat ₹339 T&C</li>
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
                  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min
                  Order Value ₹1000. Valid once per Paytm account T&C
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
                  so super t-shirt 👌👌
                  <div>Ritu Pragyan Jan, 2022</div>
                  Certified Buyer, Bhubaneswar
                </p>

                <p>
                  {" "}
                  <span className={classes.star}>
                    5 <span className={classes.starin}>*</span>
                  </span>{" "}
                  Nice product 👍
                  <div>Chaitali Saha Jan, 2021</div>
                  Certified Buyer, Maldah District
                </p>

                <p>
                  {" "}
                  <span className={classes.star}>
                    3 <span className={classes.starin}>*</span>
                  </span>{" "}
                  Nice product I love
                  <div>Sarfarz Ashraf Jan, 2021</div>
                  Certified Buyer, Bengaluru
                </p>
              </span>
            </ul>
          </div>
        </div>
      </div>
       
    </div>
  );
}

export default SecondDetails;
