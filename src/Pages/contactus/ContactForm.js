import React, { useState } from "react";
import classes from "./ContactForm.module.css";
function ContactForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
   const [inputdata,setinputData] =useState([])
  const nameHandler = (event) => {
    setEnteredName(event.target.value)
  };
  const emailHandler = (event) => { 
    setEnteredEmail(event.target.value)
  };
  const numberHandler = (event) => {
    setEnteredNumber(event.target.value)
  };
  const formHandler = (event) => {
    event.preventDefault();
    const enterdata = {
      name:enteredName,
      email:enteredEmail,
      number:enteredNumber,
    }
    console.log(enterdata)
    props.onpostdata(enterdata)
    setEnteredName('')
    setEnteredEmail('')
    setEnteredNumber('')
  };
  return (
    <form onSubmit={formHandler}>
      <div className={classes.contact}>
        <div>
          <div>
            <label htmlFor="Name">Name</label>
          </div>
          <div>
            {" "}
            <input type="text" value={enteredName} onChange={nameHandler}></input>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="Email">Email</label>
          </div>
          <div>
            <input type="email" value={enteredEmail} onChange={emailHandler}></input>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="Phone Number">Phone Number</label>
          </div>
          <div>
            {" "}
            <input type="number" value={enteredNumber} onChange={numberHandler}></input>
          </div>
        </div>
        <div>
          <button type="submit"   >Submit</button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
