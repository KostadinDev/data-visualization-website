import React from 'react';

import PARTNERS_DATA from './partners.data.js';
import ACM from '../../images/partners/acm.png'
import Lava from '../../images/partners/lava.png'
import IkeWai from '../../images/partners/IkeWai-Logo_color.png'
import Imiloa from '../../images/partners/Imiloa-Logo-800px-Crop.png'
import Sage2 from '../../images/partners/SAGE2-removebg-preview.png'
import SDAV from '../../images/partners/SDAV-removebg-preview.png'
import NSF from '../../images/partners/NSF.png'
import Mega from '../../images/partners/MEGA.png'
import UHArt from '../../images/partners/UHArt.png'

import './partners.styles.scss'

class Partners extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: PARTNERS_DATA,
        };
    }

    componentDidMount() {
        var canvas = document.getElementById("canvas"),
            ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth - 2;
        canvas.height = window.innerHeight + 400;

        var stars = [], // Array that contains the stars
            FPS = 60, // Frames per second
            x = 150, // Number of stars
            mouse = {
                x: 0,
                y: 0
            };  // mouse location

// Push stars to array

        for (var i = 0; i < x; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1 + 1,
                vx: Math.floor(Math.random() * 50) - 25,
                vy: Math.floor(Math.random() * 50) - 25
            });
        }

// Draw the scene

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = "lighter";

            for (var i = 0, x = stars.length; i < x; i++) {
                var s = stars[i];

                ctx.fillStyle = "#fff";
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = 'black';
                ctx.stroke();
            }

            ctx.beginPath();
            for (var i = 0, x = stars.length; i < x; i++) {
                var starI = stars[i];
                ctx.moveTo(starI.x, starI.y);
                if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
                for (var j = 0, x = stars.length; j < x; j++) {
                    var starII = stars[j];
                    if (distance(starI, starII) < 150) {
                        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
                        ctx.lineTo(starII.x, starII.y);
                    }
                }
            }
            ctx.lineWidth = 0.05;
            ctx.strokeStyle = 'white';
            ctx.stroke();
        }

        function distance(point1, point2) {
            var xs = 0;
            var ys = 0;

            xs = point2.x - point1.x;
            xs = xs * xs;

            ys = point2.y - point1.y;
            ys = ys * ys;

            return Math.sqrt(xs + ys);
        }

// Update star locations

        function update() {
            for (var i = 0, x = stars.length; i < x; i++) {
                var s = stars[i];

                s.x += s.vx / FPS;
                s.y += s.vy / FPS;

                if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
                if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
            }
        }

        canvas.addEventListener('mousemove', function (e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY - 157;
        });

// Update and draw

        function tick() {
            draw();
            update();
            requestAnimationFrame(tick);
        }

        tick();

    }

    render() {
        const {collections} = this.state;
        return (
            <div className=''>
                <div id="container">
                    <canvas id="canvas"></canvas>

                    <div id="overlay">
                        <div className="partners-body">
                            <div className="image-collection">
                                <p className="title">PARTNERS</p>

                                <a href="http://acm.hawaii.edu/" rel="noopener noreferrer" target="_blank"><img
                                    className="partners-image" alt="logo" width="250px" src={ACM}/></a>
                                <a href="https://www.lavaflow.info//" rel="noopener noreferrer" target="_blank"><img
                                    className="partners-image" alt="logo" width="250px" src={Lava}/></a>
                                <a href="https://www.hawaii.edu/epscor/ike-wai-project/" rel="noopener noreferrer" target="_blank"><img
                                    className="partners-image" alt="logo" width="250px" src={IkeWai}/></a>
                                <a href="https://imiloahawaii.org/" rel="noopener noreferrer" target="_blank"><img
                                    className="partners-image" alt="logo" width="250px" src={Imiloa}/></a>
                                <a href="http://spatial.uhh.hawaii.edu/home.htm" rel="noopener noreferrer" target="_blank"><img
                                    className="partners-image" alt="logo" width="250px" src={SDAV}/></a>
                                <a href="https://hilo.hawaii.edu/depts/art/ " rel="noopener noreferrer" target="_blank"><img
                                    className="partners-image" alt="logo" width="250px" src={UHArt}/></a>
                                <a href="https://www.nsf.gov/" rel="noopener noreferrer" target="_blank"> <img
                                    className="partners-image" alt="logo" width="250px" src={NSF}/></a>
                                <a href="http://sage2.sagecommons.org/" rel="noopener noreferrer" target="_blank"> <img
                                    className="partners-image" alt="logo" width="250px" src={Sage2}/></a>
                                <a href="https://www.themegalab.org/ " rel="noopener noreferrer" target="_blank"><img
                                    className="partners-image" alt="logo" width="250px" src={Mega}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;
