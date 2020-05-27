import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import UHLogo from "./images/web-logos/web/color/hilo-left-c@2.png"
import People from "./pages/people/people.component"
import NavBar from "./components/navbar/navbar.component";
import Projects from "./pages/projects/projects.component";
import News from "./pages/news/news.component";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }


    unsubscribeFromAuth = null;

    componentDidMount() {
        var canvas = document.getElementById("canvas"),
            ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth-24;
        canvas.height = window.innerHeight;

        var stars = [], // Array that contains the stars
            FPS = 60, // Frames per second
            x = 300, // Number of stars
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
            mouse.y = e.clientY;
        });

// Update and draw

        function tick() {
            draw();
            update();
            requestAnimationFrame(tick);
        }

        tick();

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return <div>
            <div className="homepage-header">
                <div className="row">
                    <div className="column">
                        <div className="logo-image">
                            <span className="filler">sss</span>
                        </div>
                    </div>
                    <div className="column">
                        <div className="logo-image">
                            <img alt="logo" src={UHLogo} width="60%"/>
                        </div>
                    </div>
                    <div className="column">
                        <br/>
                        <span className="logo-text">
    Computer Science Data Visualization Lab</span>
                    </div>
                </div>
            </div>
            <div className="navbar">

                <NavBar/>

            </div>
            <div id="container">
                <canvas id="canvas"></canvas>
                <div id="overlay">
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/shop' component={ShopPage}/>
                        <Route exact path='/people' component={People}/>
                        <Route exact path='/projects' component={Projects}/>
                        <Route exact path='/news' component={News}/>
                    </Switch>
                </div>

            </div>
        </div>
    }
}

export default App;
