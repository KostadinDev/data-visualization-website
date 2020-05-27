import React from 'react';

import PEOPLE_DATA from './people.data.js';

import CollectionPreview from '../../components/preview-collection/preview-collection.component';

class People extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: PEOPLE_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className=''>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default People;
