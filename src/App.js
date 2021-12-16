import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect,useState} from "react";
import {BrowserRouter as Router, Route ,Switch } from "react-router-dom";
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
import { XlviLoader } from "react-awesome-loaders"
function App() {
  const [loading,setLoading]= useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
  },[])
  return (
    <div className="App">
      {
        loading ? <div className='loading' >
         <XlviLoader
        boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
  </div> :
   <Router>
   <Switch>
     <Route exact path ='/'>
       <Home></Home>
     </Route>
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
  </Router>
      }
   
  </div>
  )
 ;
}

export default App;
