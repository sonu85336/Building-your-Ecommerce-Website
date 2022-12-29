import { Card } from "react-bootstrap";
import classes from "./Footer.module.css";
import Youtube from "../../assets/download.png";
import Spotify from '../../assets/spotify.png'
import Facebook from '../../assets/facebook.png'
const Footer = () => {
  return (
    <Card>
      <Card.Body className={classes.footer1}>
        <footer>
          <h1>The Genrics</h1>
          <span   className={classes.img} >
          <a  href="https://www.youtube.com/"><img  
          src={Youtube} 
          alt="youtube" 
          width="25" 
          height="25" 
            
         /></a>
          <a href="https://open.spotify.com/"> <img 
          src={Spotify} 
          alt="youtube" 
          width="25" 
          height="25" /></a>
         <a href="https://www.facebook.com/" ><img 
          src={Facebook} 
          alt="youtube" 
          width="25" 
          height="25" /></a> </span>
        </footer>
      </Card.Body>
    </Card>
  );
};
export default Footer;
