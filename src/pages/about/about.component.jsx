import React from 'react';
import NavBar from "../../components/navbar/navbar.component";
import CarouselSlide from "../../components/carousel/carousel.component";
import Directory from "../../components/directory/directory.component";
import './about.styles.scss'

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='homepage'>
                <NavBar className = "navbar"/>
                <br/>
                <div className="text">
                    <div className="inner-body">
                        <div className="bg-img">
                        </div>
                    <p className = "text">
                The acronym CyberCANOE stands for “Cyber Enabled Collaboration Analysis Navigation and Observation Environment,” a display technology that enables users from varied disciplines at different campuses in the UH System to collaborate on projects. It is the brainchild of UH Mānoa Professor of Computer Science Dr. Jason Leigh of the Laboratory for Advanced Visualization and Applications or LAVA.

                The CyberCANOEs are funded by the Academy for Creative Media System, based at UH Mānoa under founder and director Chris Lee, as part of ACM’s support for the 10-campus UH System. The ACM System is dedicated to fostering collaboration between campuses and disciplines, and the new CyberCANOE at ‘Imiloa now unites UH Mānoa and UH West O‘ahu with UH Hilo, bringing together science with art, design and storytelling.

                The CyberCANOEs being built in Hawai‘i all have varying capabilities. For example, some of them have stereoscopic 3D or tracking. This type of technology can scan historical sites as part of preservation measures, so that centuries from now people can still visit those places even though the site might be long gone.

                This team-taught course provides an interdisciplinary framework for learning cutting-edge data visualization techniques. The class enables students from varied disciplines to work together and develop collaborative projects. Students are taught hands-on skills for creating effective data visualization products and tools that can be applied to a broad range of scientific disciplines. Final projects will utilize data from the natural sciences to create interactive and immersive data visualization projects to promote public awareness of environmental issues facing Hawaiian ecosystems.
                    </p>
                    </div>
                    </div>
            </div>
        );
    }
}

export default About;
