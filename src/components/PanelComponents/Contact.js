import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class Contact extends React.Component{
    render(){
        return(
            <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                    <FontAwesomeIcon icon={faPhone} color="green"/>  
                </div>
                <div className="hero__search__phone__text">
                    <h5>{this.props.number}</h5>
                    <span>Hỗ trợ 24/7</span>
                </div>
            </div>
        );
    }
}

export default Contact;