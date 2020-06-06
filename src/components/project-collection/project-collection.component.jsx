import React from 'react';

import ProjectItem from '../project-item/project-item.component';

import './project-collection.styles.scss';

const ProjectCollection = ({title, items}) => (


        <div className='project-preview'>

            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 2)
                    .map(({id, ...otherItemProps}) => (
                        <ProjectItem key={id}{...otherItemProps} />
                    ))}

            </div>
        </div>
);

export default ProjectCollection;
