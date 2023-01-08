import { useParams, Route, Switch,Link } from "react-router-dom";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
function ColorsPage() {
  const params = useParams();
  
  return (
    <div>
      <p>this is color page </p>
      
        {/* <Route path = "/params.StoreId/color"   >
          <Product1 />
        </Route>
        <Route  path="/params.StoreId/balckAndWhite"   >
          <Product2 />
        </Route>
        <Route  path="/params.StoreId/yellowandblack"  >
          <Product3 />
        </Route>
        <Route  path="/params.StoreId/blueColor"  >
          <Product4 />
        </Route> */}
      
        <Product2/>
      
        <Product3/>
      
        <Product4/>
      
      <p>{params.StoreId}</p>
    </div>
  );
}

export default ColorsPage;
