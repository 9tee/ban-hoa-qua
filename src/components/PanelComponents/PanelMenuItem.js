import React from 'react';
import {Link} from 'react-router-dom';

class PanelMenuItem extends React.Component{
    render(){
        return(
            <li>
                <a href={this.props.href}>{this.props.value}</a>
            </li>
        );
    }
}

export default PanelMenuItem;