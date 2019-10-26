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
import Behavior from "../Tips/Behavior/Behavior";
import Tickets from "../Tips/Tickets/Tickets";
import Packing from '../Tips/Packing/Packing';
import Vaccinations from '../Tips/Vaccinations/Vaccinations';
import Transport from '../Tips/Transport/Transport';
import Local from "../Tips/Local/Local";
import FooterMain from '../../components/FooterMain/FooterMain';


class App extends Component {
    render() {
        return (
            <>
                <HashRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/Mapa" component={Map}/>
                        <Route path="/Podroże" component={Travels}/>
                        <Route path="/Porady" component={Tips}/>
                        <Route path="/Na_co_uważać" component={Behavior}/>
                        <Route path="/Tanie_bilety" component={Tickets}/>
                        <Route path="/Co_spakować" component={Packing}/>
                        <Route path="/Szczepienia" component={Vaccinations}/>
                        <Route path="/Transport_na_miejscu" component={Transport}/>
                        <Route path="/Lokalne_zwyczaje" component={Local}/>
                        <Route path="/O_mnie" component={AboutMe}/>
                        <Route path="/Kontakt" component={Contact}/>
                    </Switch>
                    <FooterMain/>
                </HashRouter>
            </>
        )
    }
}

export default App;
