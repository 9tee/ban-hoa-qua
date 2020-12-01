import React from 'react';
import {Link} from 'react-router-dom';

class PanelMenuItem extends React.Component{
    render(){
        return(
            <li>
                <Link to={this.props.href}>{this.props.value}</Link>
            </li>
        );
    }
}

export default PanelMenuItem;