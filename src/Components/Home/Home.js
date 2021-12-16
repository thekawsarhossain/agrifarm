import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BannerSlider from './BannerSlider/BannerSlider';
import Allitems from '../AllItems/AllItems';

const Home = () => {
    return (
        <div>
            <SearchBar />
            <BannerSlider />
            <Allitems/>
        </div>
    );
};

export default Home;