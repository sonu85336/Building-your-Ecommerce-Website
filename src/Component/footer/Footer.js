import { Card } from "react-bootstrap";
import classes from "./Footer.module.css";
import Youtube from "../../assets/download.png";
import Spotify from '../../assets/spotify.png'
import Facebook from '../../assets/facebook.png'
const Footer = () => {
  return (
    
      <div  className={classes.footer1}>
        <footer>
          <h1 className={classes.h1}>The Genrics</h1>
          <span   className={classes.img} >
          <a  href="https://www.youtube.com/"><img  
          src={Youtube} 
          alt="youtube" 
          width="60px" 
          height="60px" 
            
         /></a>
          <a href="https://open.spotify.com/"> <img 
          src={Spotify} 
          alt="youtube" 
          width="60px" 
          height="60px"  /></a>
         <a href="https://www.facebook.com/" ><img 
          src={Facebook} 
          alt="youtube" 
          width="60px" 
          height="60px"  /></a> </span>
        </footer>
      </div>
   
  );
};
export default Footer;
