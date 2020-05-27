import React from 'react';

import './news-item.styles.scss'

const NewsItem = ({id, name, major, imageUrl,bio}) => (

    <div className='news-item'>

        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>

        </div>

        <div className='news-footer'>
            <span className='name'> {name}</span>/
            <span className='major'> {major}</span>/<br/>
            <span className='bio'> {bio}</span>
        </div>

    </div>

);
export default NewsItem;
