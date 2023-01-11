import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AuthCartContext from "../../authSotre/authcontext";
const MainNavigation = (props) => {
  const authCtx = useContext(AuthCartContext);
 const history = useHistory()
  const isLoggedIn = authCtx.isLoggedIn;
  const LogoutHandler =()=>{
     authCtx.logout()
     history.replace('/auth')
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn&&<li>
            <Link to="/auth">Login</Link>
          </li> }
          {isLoggedIn&& <li>
            <Link to="/profile">Profile</Link>
          </li>}
         {isLoggedIn&& <li>
            <button onClick={LogoutHandler}>Logout</button>
          </li>}
         
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
