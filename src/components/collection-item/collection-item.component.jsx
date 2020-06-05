import React from 'react';

import './collection-item.styles.scss'

const CollectionItem = ({id, name, major, imageUrl,bio}) => (

    <div className='collection-item'>

        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>

        </div>

        <div className='collection-footer'>
            <span className='name'> {name}</span><br/>
            <span className='bio'> {bio}</span>
        </div>

    </div>

);
export default CollectionItem;
