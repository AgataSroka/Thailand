import React, {Component} from 'react';
import '../../../src/Styles/FooterMain.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

class FooterMain extends Component {
    render() {
        return (
            <>
                <footer className='footer_main'>
                    <div className='footer_main_icons'>
                        <a href={'https://github.com/AgataSroka'} target='_blank'> <FontAwesomeIcon icon={faGithub}
                                                                                                    className="faGithub"/></a>
                        <a href={'https://linkedin.com/in/agata-połetek'} target='_blank'> <FontAwesomeIcon
                            icon={faLinkedin} className="faLinkedin"/></a>
                    </div>
                </footer>
            </>
        )
    }
}

export default FooterMain