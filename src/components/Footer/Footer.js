import React, {Component} from 'react';
import '../../Styles/Footer.scss';
import {faBug} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className='container'>
                    <h3> legenda: </h3>
                    <div><FontAwesomeIcon icon={faBug} size="2x" className="faCrow" style={{color: '#bada55'}} /></div>
                    <p>sprawdzone przeze mnie</p>
                    <div><FontAwesomeIcon icon={faBug} size="2x" className="faCrow" style={{color: 'purple'}} /></div>
                    <p> na mojej liście "do zbadania" ;)</p>
                </div>
            </footer>
                  )

    }
}
export default Footer