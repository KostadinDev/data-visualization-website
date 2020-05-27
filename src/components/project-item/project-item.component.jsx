import React from 'react';

import './project-item.styles.scss'

const ProjectItem = ({id, name, major, imageUrl,bio}) => (

    <div className='project-item'>

        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>

        </div>

        <div className='content'>
            <span className='title'> {name}</span>/
        </div>

    </div>

);
export default ProjectItem;
