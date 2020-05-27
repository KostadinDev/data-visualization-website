import React from 'react';

import PROJECTS_DATA from './projects.data';

import ProjectCollection from '../../components/project-collection/project-collection.component';
class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: PROJECTS_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className=''>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <ProjectCollection key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default Projects;
