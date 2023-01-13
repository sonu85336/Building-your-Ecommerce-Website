import React, { useRef, useState, useContext } from "react";
import classes from "./LoginPage.module.css";
import CartContext from "../../store/cart-context";
import { useHistory } from "react-router-dom";
function Loginpages() {
  const history = useHistory();
  const authCtx = useContext(CartContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const SwitchAuthModelHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    localStorage.setItem('email',enteredEmail)
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDohcQdgl3-uiia8iK3LiGBuiVUcCoDsdo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDohcQdgl3-uiia8iK3LiGBuiVUcCoDsdo";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let erroMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              erroMessage = data.error.message;
            }
            throw new Error(erroMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        
        history.replace("/Store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={classes.login}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input type="email" ref={emailInputRef}></input>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input type="password" ref={passwordInputRef}></input>
          </div>
        </div>
        <div>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button type="button" onClick={SwitchAuthModelHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Loginpages;
