import React, {Component} from 'react';
import '../../Styles/FooterMap.scss';
import {faBug} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class FooterMap extends Component{
    render(){
        return(
            <footer>
                <div className='container'>
                    <div><FontAwesomeIcon icon={faBug} size="2x" className="faCrow" style={{color: '#bada55'}} /></div>
                    <p>sprawdzone przeze mnie</p>
                    <div><FontAwesomeIcon icon={faBug} size="2x" className="faCrow" style={{color: 'purple'}} /></div>
                    <p> warte zobaczenia </p>
                </div>
            </footer>
                  )

    }
}
export default FooterMap