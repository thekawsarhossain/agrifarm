import React from 'react';
import FreshFruits from '../../../images/fruits-icon.png'
import Salads from '../../../images/salad-icon.png'
import Vegetables from '../../../images/vegetable-icon.png'
import Juices from '../../../images/juices-icon.png'
import SeaFood from '../../../images/fish-icon.png'
import DriedFruit from '../../../images/driyfruits-icon.png'
import FreshMeatss from '../../../images/meat-icon.png'
import DairyProducts from '../../../images/dairy-icon.png'



import { Link } from 'react-router-dom';
import './MainNavigation.css'
const MainNavigation = () => {
  return (
    <div className='menubar'>
      <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
  
   <div class="dropdown all-categories me-4">
  <button class="dropbtn"><Link to='/' class="navbar-brand"><i class="fas fa-bars me-3"></i> ALL CATEGORIES</Link></button>
  <div class="dropdown-content ">

  <a href="/"><img src={FreshFruits} alt="" srcset="" /> Fresh Fruits <i class="fas fa-chevron-right  "></i></a>
  <a href="/"><img src={Salads} alt="" srcset="" /> Fresh Salads <i class="fas fa-chevron-right icon-2 "></i></a>
  <a href="/"><img src={Vegetables} alt="" srcset="" /> Vegetables <i class="fas fa-chevron-right icon-4 "></i></a>
  <a href="/"><img src={Juices} alt="" srcset="" /> Juices</a>
  <a href="/"><img src={SeaFood} alt="" srcset="" /> Sea Food</a>
  <a href="/"><img src={DriedFruit} alt="" srcset="" /> Dried Fruit</a>
  <a href="/"><img src={FreshMeatss} alt="" srcset="" /> Fresh Meats <i class="fas fa-chevron-right "></i></a>
  <a href="/"><img src={DairyProducts} alt="" srcset="" /> Dairy Products <i class="fas fa-chevron-right icon-3"></i></a>
  <a href="/"><i class="far fa-star me-2 text-warning"></i> Deal of the day</a>
  </div>
</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          
        <a href="/">Pages <i class="fas fa-chevron-down"></i></a>
        <a class="nav-link " href="/">New Arrivals</a>
        <a class="nav-link" href="/">Special</a>
        <a class="nav-link" href="/">Gift Cards</a>
        <a class="nav-link nav-link-last " href="/">Agrifarm Wallet</a>
         </div>
    </div>
    <button className='btn call-btn'><i class="fas fa-phone-alt bg-light p-2 rounded-circle"></i> (+800) 123 456 7890</button>
  </div>
</nav>
      </div>
    </div>
  );
};

export default MainNavigation;