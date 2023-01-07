import React from "react";
import classes from './HomeBody.module.css'
import { Button } from "react-bootstrap";

function HomeBody() {
  return (
    <div>
      
 <div className={classes.table}>
      <table>
     
        <tbody>
          <tr>
            <th>JUL16</th>

            <th>DETROIT</th>

            <th> MI DTE ENERGY MUSIC THEATRE</th>

            <th>
              <Button variant="info">BUY TICKETS</Button>
            </th>
          </tr>

          <tr>
            <th>JUL19,</th>

            <th>TORONTO</th>

            <th>ON BUDWEISER STAGE</th>

            <th>
              <Button variant="info">BUY TICKETS</Button>
            </th>
          </tr>

          <tr>
            <th>JUL 22,</th>

            <th>BRISTOW</th>
            <th>JIGGY LUBE LIVE</th>
            <th>
              <Button  variant="info">BUY TICKETS</Button>
            </th>
          </tr>

          <tr>
            <th>JUL 29,</th>

            <th>PHOENIX</th>

            <th> AZ AK-CHIN PAVILION</th>

            <th>
              <Button variant="info">BUY TICKETS</Button>
            </th>
          </tr>

          <tr>
            <th>AUG 2,</th>

            <th>LAS VEGAS</th>

            <th> T-MOBILE ARENA</th>

            <th>
              <Button variant="info">BUY TICKETS</Button>
            </th>
          </tr>

          <tr>
            <th>AUG 7,</th>
            <th>CONCORD</th>
            <th>
CONCORD PAVILION</th>
            <th>
              <Button  variant="info">BUY TICKETS</Button>
            </th>
          </tr>
        </tbody>
        
      </table></div>
    </div>
  );
}

export default HomeBody;
