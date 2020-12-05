import React from 'react';
import HeaderMenuDropDown from './HeaderMenuDropDown';
import {Link} from 'react-router-dom';



class NaviBar extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <nav className="header__menu">
                    <ul>
                        <NaviItem value="Trang chủ" href="/" />
                        <NaviItem value="Cửa hàng" href="/shop" />
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