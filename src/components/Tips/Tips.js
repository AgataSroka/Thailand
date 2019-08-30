import React, {Component} from "react";
import '../../Styles/Tips.scss';

class Tips extends Component {
    render() {
        return(

            <section className='background'>
        <div className="tips">
            <button><a href="#"> TANIE BILETY </a></button>
            <button><a href="#"> CO SPAKOWAĆ </a></button>
            <button><a href="#"> SZCZEPIENIA </a></button>
            <button><a href="#"> TRANSPORT NA MIEJSCU </a></button>
            <button><a href="#"> NA CO UWAŻAĆ </a></button>
            <button><a href="#"> CZEGO NIE ROBIĆ - CZYLI LOKALNE ZWYCZAJE </a></button>
        </div>
            </section>
        )
    }
}

export default Tips;