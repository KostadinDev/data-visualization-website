import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import About from './pages/about/about.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            createUserProfileDocument(user);
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render() {
        return <div>
            <Header currentUser = {this.state.currentUser}/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/signin' component={SignInAndSignUp}/>
            </Switch>

        </div>
    }
}

export default App;
