import React from 'react';
import '../../Styles/Contact.scss';
import Dashboard from '../Dashboard/Dashboard';
import Store from '../Store/Store';


function Contact() {
    return (
        <div className='contact'>
            <Store>
                <Dashboard/>
            </Store>
        </div>
    )

}

export default Contact