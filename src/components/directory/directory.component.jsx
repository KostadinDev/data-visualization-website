import React from 'react';
import MenuItem from './../../components/menu-item/menu-item.component'
import './directory.styles.scss'
import DesignART from './../../images/3DDesignART-edited.jpg'
import ExploringHK from './../../images/ExploringHK1.jpg'
import DataScienceResearch from './../../images/DataScienceResearch.png'
import people from './../../images/people.jpg'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Holographic Fan',
                    imageUrl: DesignART,
                    id: 1,
                    linkUrl: ''
                },
                {
                    title: 'Cyber CANOE',
                    imageUrl: people,
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'COVID Response',
                    imageUrl: DataScienceResearch,
                    id: 3,
                    linkUrl: ''
                },

            ],
        }
    }

    render() {
        return (

            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    ))
                }


            </div>

        )
    }
}

export default Directory;
