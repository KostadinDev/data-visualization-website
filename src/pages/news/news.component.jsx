import React from 'react';

import NEWS_DATA from './news.data.js';

import NewsPreview from '../../components/news-collection/news-collection.component';

class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: NEWS_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className=''>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <NewsPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default News;
