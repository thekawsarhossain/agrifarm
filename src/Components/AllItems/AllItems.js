import React from 'react';
import { 
 BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './AllItems.css'
import Dairy from './Dairy/Dairy';
import DriedFruits from './DriedFruits/DriedFruits';
import FreshMeat from './FreshMeat/FreshMeat';
import Fruits from './Fruits/Fruits';
import Juices from './Juices/Juices';
import Salads from './Salads/Salads';
import SeaFood from './SeaFood/SeaFood';
import Vegetables from './Vegetables/Vegetables';



const AllItems = () => {


  return (
    <div>
     <div className="container">
       <Router>
       <div className="all-items">
         <div className="items"><img src="https://themesground.com/agrifarm-demo/V1/images/fruits.jpg" alt="" srcset="" />
         <NavLink to='/fruits'>
         <li>Fruits</li>
         </NavLink>
         </div>

         <div className="items"><img src="https://themesground.com/agrifarm-demo/V1/images/salad.jpg" alt="" srcset="" />
         <NavLink to='/salads'>
         <li>Salads</li>
         </NavLink>
         </div>

         <div className="items"><img src="https://themesground.com/agrifarm-demo/V1/images/vegetable.jpg
         " alt="" srcset="" />
         <NavLink to='/vegetables'>
         <li>Vegetables</li>
         </NavLink>
         </div>
         <div className="items"><img src="https://themesground.com/agrifarm-demo/V1/images/juices.jpg" alt="" srcset="" />
         <NavLink to='/juices'
        >
          <li> Juices</li>
         </NavLink>
         </div>

         <div className="items"><img src="https://themesground.com/agrifarm-demo/V1/images/fish.jpg" alt="" srcset="" />
         <NavLink to='/sea-food'>
         <li>Sea Food</li>
         </NavLink>
         </div>

         <div className="items"><img src="https://themesground.com/agrifarm-demo/V1/images/dried-fruits.jpg" alt="" srcset="" />
         <NavLink to='/dried-fruits'
         
         >
         <li>Dried Fruits</li>
         </NavLink>
         </div>
         <div className="items"><img src="https://themesground.com/agrifarm-demo/V1/images/dairy.jpg" alt="" srcset="" />
         <NavLink to='/dairy'>
         <li>Dairy</li>
         </NavLink>
         </div>
         <div className="items"><img src="https://themesground.com/agrifarm-demo/V1/images/meat.jpg" alt="" srcset="" />
         <NavLink to='/fresh-meat'>
         <li>Fresh Meat</li>
         </NavLink>
         </div>
       </div>

      
       <Switch>
         <Route exact path='/'>
           <Fruits/>
         </Route>
         <Route  path='/fruits'>
           <Fruits/>
         </Route>
         <Route  path='/salads'>
           <Salads/>
         </Route>
         <Route  path='/vegetables'>
           <Vegetables/>
         </Route>
         <Route  path='/juices'>
           <Juices/>
         </Route>
         <Route  path='/sea-food'>
           <SeaFood/>
         </Route>
         <Route  path='/dried-fruits'>
           <DriedFruits/>
         </Route>
         <Route  path='/dairy'>
           <Dairy/>
         </Route>
         <Route  path='/fresh-meat'>
           <FreshMeat/>
         </Route>
       </Switch>
       </Router>
     </div>
    </div>
  );
};

export default AllItems;