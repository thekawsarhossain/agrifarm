import React from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import Allitems from '../AllItems/AllItems';
import Navigation from './Navigation/Navigation'
import './Home.css'
const Home = () => {
    return (
        <div>
            <Navigation/>
          
            <BannerSlider />
            <Allitems/>
        </div>
    );
};

export default Home;