import React, {Component} from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import Main from "../Main/Main";
import Map from "../Map/Map";
import '../../Styles/App.scss';
import Travels from "../Travels/Travels";
import Tips from "../Tips/Tips";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";


class App extends Component {
    render() {
        return (
            <>
                <HashRouter>
                    <Header/>
                    <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/Mapa" component={Map}/>
                    <Route path="/Podroze" component={Travels}/>
                    <Route path="/Porady" component={Tips}/>
                    <Route path="/O_mnie" component={AboutMe}/>
                    <Route path="/Kontakt" component={Contact}/>
                    </Switch>
                </HashRouter>
            </>
        )
    }
}

export default App;
