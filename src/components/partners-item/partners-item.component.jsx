import React from 'react';

import './partners-item.styles.scss'
import logos from './../../images/partners/Logos 2.png'

const PartnersItem = ({id, name, major, imageUrl,bio}) => (

    <div className='partner-item'>

        <img src = {logos}/>


    </div>

);
export default PartnersItem;
