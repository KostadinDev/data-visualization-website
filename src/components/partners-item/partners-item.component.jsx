import React from 'react';

import './partners-item.styles.scss'

const PartnerItem = ({id, name, major, imageUrl,bio}) => (

    <div className='partners-item'>

        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}>

        </div>

    </div>

);
export default PartnerItem;
