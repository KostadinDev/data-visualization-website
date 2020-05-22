import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
import CarouselSlide from "../../components/carousel/carousel.component";

import NavBar from '../../components/navbar/navbar.component'
const HomePage = () => (
    <div className='homepage'>
        <NavBar className = "navbar"/>
        <br/>
        <CarouselSlide className = "carousel"/>
        <br/>
        <Directory/>
    </div>
);

export default HomePage;
