import React from 'react';
import DV  from '../../images/DV_Full.mp4'
import './video.styles.scss'
const Video = () => {
    return(
        <div>
            <video autoPlay loop muted width = "720" className = "video">
                <source  src = {DV} type = "video/mp4"/>
            </video>
        </div>
    );
};
export default Video;
