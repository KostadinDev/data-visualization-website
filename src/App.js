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
import SocialFollow from "./components/social-media/social-media.component"
import Partners from './pages/partners-page/partners-page.component'

class App extends React.Component {
    constructor() {
        super();

        this.state = {}
    }


    render() {
        return <div>
            <div className="header">
        <div className = "header-logo">
            <img alt = "logo" height = "80" src = {UHLogo}/>
        <div className = "text-nav">
            <h2 className = "logo-text"> Computer Science Data Visualization Lab</h2>
        <NavBar/>

        </div>
        </div>
        </div>

            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/people' component={People}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/partners' component={Partners}/>
            </Switch>

        </div>


    }
}

export default App;
