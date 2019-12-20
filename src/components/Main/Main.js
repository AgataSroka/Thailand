import React, {Component} from "react";
import '../../Styles/Main.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeAsia} from "@fortawesome/free-solid-svg-icons";

class Main extends Component {
    render() {
        return (
            <section className='kenburns-top-right'>
                <div className='font_position'>
                {/*<FontAwesomeIcon icon={faGlobeAsia} size="10x" className="faGlobe" color='white'/>*/}
                </div>
            </section>
        )
    }
}

export default Main;