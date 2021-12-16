import React from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';
import SearchBar from '../../SearchBar/SearchBar'
import './Navigation.css'
const Navigation = () => {
  return (
    <div>
    <div className="nav-1">
    <div className="container">
        <div className="admin-nav">
        <div class="d-flex justify-content-between align-items-center">
        <div className="left-div d-flex">
   <div class="dropdown">
  <button class="border-0  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    English
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">English</a></li>
    <li><a class="dropdown-item" href="#">French</a></li>
    <li><a class="dropdown-item" href="#">German</a></li>
  </ul>
</div>
<div class="dropdown">
  <button class=" mx-2 border-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    USD
  </button>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#"> $ - Dollar</a></li>
    <li><a class="dropdown-item" href="#"> £ - Pound</a></li>
    <li><a class="dropdown-item" href="#"> € - Euro</a></li>
  </ul>
</div>
        
            <p>Default welcome msg!</p>
         
        </div>

        {/* start right div  */}
        <div className="right-div ">
          <ul className='d-flex'>
            <li><a href="#"> My Account</a></li>
            <li><a href="#"> Checkout</a></li>
            <li><a href="#"> Wishlist</a></li>
            <li><a href="#"> Blog</a></li>
             <li>  <div class="dropdown">
                     <button class="border-0 me-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                           Company
                     </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="/">FAQ</a></li>
                            <li><a class="dropdown-item" href="/"> Contact</a></li>
                            <li><a class="dropdown-item" href="/">About Us</a></li>
                            <li><a class="dropdown-item" href="/">404 Error Page</a></li>
                          </ul>
               </div>
               </li>
                     <li><a href="/"> Login</a></li>
      
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>  
  
    <SearchBar />
    <MainNavigation/>
    </div>
  );
};

export default Navigation;