import React from 'react';
import HeaderMenuDropDown from './HeaderMenuDropDown';
import {Link} from 'react-router-dom';



class NaviBar extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <nav className="header__menu">
                    <ul>
                        <NaviItem value="Home" href="/" />
                        <NaviItem value="Shop" href="/shop" />
                        <NaviItem value="Pages" href="#" dropdown={<HeaderMenuDropDown/>}/>
                        <NaviItem value="Blog" href="#" />
                        <NaviItem value="Contact" href="#" />
                    </ul>
                </nav>
            </div>
        );
    }
}


class NaviItem extends React.Component{
    render(){
        return(
            <li>
                <Link to={this.props.href}> {this.props.value}</Link>
                {this.props.dropdown}
            </li>
        );
    }
}

export default NaviBar;