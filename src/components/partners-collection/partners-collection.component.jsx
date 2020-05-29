import React from 'react';

import PartnersItem from '../partners-item/partners-item.component';

import './partners-collection.styles.scss';

const PartnersCollection = ({title, items}) => (
    <div className="collection">
        <div className='partners-collection'>

            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 1)
                    .map(({id, ...otherItemProps}) => (
                        <PartnersItem key={id} {...otherItemProps} />
                    ))}

            </div>
        </div>
    </div>
);

export default PartnersCollection;
