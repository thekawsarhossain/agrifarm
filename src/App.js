import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router ,Switch } from "react-router-dom";
import "./App.css";
import Dairy from "./Components/AllItems/Dairy/Dairy";
import DriedFruits from "./Components/AllItems/DriedFruits/DriedFruits";
import FreshMeat from "./Components/AllItems/FreshMeat/FreshMeat";
import Fruits from "./Components/AllItems/Fruits/Fruits";
import Juices from "./Components/AllItems/Juices/Juices";
import Salads from "./Components/AllItems/Salads/Salads";
import SeaFood from "./Components/AllItems/SeaFood/SeaFood";
import Vegetables from "./Components/AllItems/Vegetables/Vegetables";
import Home from "./Components/Home/Home";

function App() {
  return <div className="App">
    <Home />
    {/* <Router>
      <Switch>
       
        <Route path='/fruits'>
          <Fruits></Fruits>
        </Route>
        <Route path='/salads'>
          <Salads></Salads>
        </Route>
        
        <Route path='/vegetables'>
          <Vegetables></Vegetables>
        </Route>
        <Route path='/juices'>
          <Juices></Juices>
        </Route>
        <Route path='/sea-food'>
          <SeaFood></SeaFood>
        </Route>
        <Route path='/dried-fruits'>
          <DriedFruits></DriedFruits>
        </Route>
        <Route path='/dairy'>
          <Dairy></Dairy>
        </Route>
        <Route path='/fresh-meat'>
          <FreshMeat></FreshMeat>
        </Route>

      </Switch>
     </Router> */}
  </div>;
}

export default App;
