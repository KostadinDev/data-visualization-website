import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className = "collection">
    <div className='collection-preview'>

        <h1 className='people-title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 2)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}

        </div>
    </div>
    </div>
);

export default CollectionPreview;
