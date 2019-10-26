import React, {Component} from "react";
import '../../Styles/Tips/Tips.scss';
import {NavLink} from "react-router-dom";

class Tips extends Component {
    render() {
        return (

            <section className='background'>
                <div className="tips">
                    <NavLink exact to="/Tanie_bilety">
                        <button> TANIE BILETY</button>
                    </NavLink>
                    <NavLink exact to="/Co_spakować">
                        <button> CO SPAKOWAĆ</button>
                    </NavLink>
                    <NavLink exact to="/Szczepienia">
                        <button> SZCZEPIENIA</button>
                    </NavLink>
                    <NavLink exact to="/Transport_na_miejscu">
                        <button> TRANSPORT NA MIEJSCU</button>
                    </NavLink>
                    <NavLink exact to="/Na_co_uważać">
                        <button> NA CO UWAŻAĆ</button>
                    </NavLink>
                    <NavLink exact to="/Lokalne_zwyczaje">
                        <button> LOKALNE ZYWCZAJE - CZYLI CZEGO NIE ROBIĆ</button>
                    </NavLink>
                </div>
            </section>
        )
    }
}

export default Tips;