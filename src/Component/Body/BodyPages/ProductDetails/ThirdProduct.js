import React from 'react'
import classes from "./FirstDetails.module.css";
import Image1 from "../../../../assets/productimage/prod3of1.jpg";
import Image2 from "../../../../assets/productimage/prod3of2.jpg";
function ThirdProduct() {
  return (
    <div>
      <div>
        <div>
          <div className={classes.img}>
            <img
              src={Image1}
              alt="img1"
              width="250px"
              height="250px"
              draggable="true"
            ></img>
            <img
              src={Image2}
              alt="img2"
              width="250px"
              height="250px"
              draggable="true"
            ></img>

            <ul>
              {" "}
              <h6>kaviraj</h6>
              <div>
                <h6> Printed Rayon Women Kaftan</h6>
              </div>
              <p style={{ color: "green" }}>
                {" "}
                <small>Special price</small>
              </p>
              <small>
                <del>₹1,299</del>{" "}
                <sapn style={{ color: "green" }}> 47% off</sapn>
              </small>{" "}
              <h5>₹700 </h5>
              <p>
                {" "}
                <span className={classes.star}>
                  4 <span className={classes.starin}>*</span>
                </span>{" "}
                8,0000 ratings and 7033 reviews
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
                    4 <span className={classes.starin}>*</span>
                  </span>{" "}
                  Beautiful and comfortable top
                  <div>Ritu Pragyan Jan, 2022</div>
                  Certified Buyer, Ranchi
                </p>

                <p>
                  {" "}
                  <span className={classes.star}>
                    5 <span className={classes.starin}>*</span>
                  </span>{" "}
                  A friend of mine suggested the cloth and it's really very good looking the flowers looks very pretty and very unique the design and fitting is just awesome
                  <div>Riya Kumari, 2021</div>
                  Certified Buyer, Ranchi
                </p>

                <p>
                  {" "}
                  <span className={classes.star}>
                    5 <span className={classes.starin}>*</span>
                  </span>{" "}
                  Nice top
                  <div>Reshmarani Panda, 2021</div>
                  Certified Buyer, Mumbai
                </p>
              </span>
            </ul>
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default ThirdProduct
