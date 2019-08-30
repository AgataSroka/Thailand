import React,{Component} from 'react';
import {NavLink} from "react-router-dom";

function Navigation(){

    return (
        <nav>
            <ul>
                <li><NavLink exact to="/Mapa" >ggggggggggg</NavLink></li>
                <li><NavLink to="/Podroze" >hhhhhhhh</NavLink></li>
                <li><NavLink to="/Porady" >iiiiiiiiiiii</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;