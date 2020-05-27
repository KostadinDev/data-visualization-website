import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
import CarouselSlide from "../../components/carousel/carousel.component";
import Video from '../../components/video/video.component'

import NavBar from '../../components/navbar/navbar.component'
const HomePage = () => (
    <div className='homepage'>

        <div className = "homepage-container">
        <Video/>
        <br/>
        <Directory/>
        </div>
    </div>
);

export default HomePage;
