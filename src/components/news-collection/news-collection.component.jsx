import React from 'react';

import NewsItem from '../news-item/news-item.component';

import './news-collection.styles.scss';

const NewsPreview = ({ title, items }) => (

        <div className='news-preview'>

            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className=''>
                {items
                    .filter((item, idx) => idx < 1)
                    .map(({ id, ...otherItemProps }) => (
                        <NewsItem key={id} {...otherItemProps} />
                    ))}

            </div>
        </div>
);

export default NewsPreview;
