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
        }
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
                            <img alt="logo" src={UHLogo} width="40%"/>
                        </div>
                    </div>
                    <div className="column">
                        <br/>
                        <span className="">
    Computer Science Data Visualization Lab</span>
                    </div>
                </div>
            </div>
            <div className="navbar">

                <NavBar/>

            </div>

                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/shop' component={ShopPage}/>
                        <Route exact path='/people' component={People}/>
                        <Route exact path='/projects' component={Projects}/>
                        <Route exact path='/news' component={News}/>
                    </Switch>
                </div>


    }
}

export default App;
