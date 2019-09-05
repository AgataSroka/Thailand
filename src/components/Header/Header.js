import React, {Component} from "react";
import '../../Styles/Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrow} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <FontAwesomeIcon icon={faCrow} size="3x" className="faCrow" />
                        <h1><NavLink exact to="/" style={{'text-decoration': 'none', 'color': 'white'}}> Misja Tajlandia </NavLink></h1>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><NavLink exact to="/Mapa">Mapa</NavLink></li>
                            <li><NavLink exact to="/Podroze">Podroże</NavLink></li>
                            <li><NavLink exact to="/Porady">Porady</NavLink></li>
                            <li><NavLink exact to="/OMnie">O mnie</NavLink></li>
                            <li><NavLink exact to="/Kontakt">Kontakt</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;