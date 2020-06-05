import React from 'react';

import PartnerItem from '../partners-item/partners-item.component';

import './partners-collection.styles.scss';

const PartnersCollection = ({ title, items }) => (
    <div className = "collection">
        <div className='partners-preview'>

            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 3)
                    .map(({ id, ...otherItemProps }) => (
                        <PartnerItem key={id} {...otherItemProps} />
                    ))}

            </div>
        </div>
    </div>
);

export default PartnersCollection;
