import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

class HeaderCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-lg-3">
                {this.props.login ? <Login /> :
                    <div className="header__cart">
                        <ul>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faHeart} color="black" />
                                    <span>{this.props.heart}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faShoppingBag} color="black" />
                                    <span>{this.props.bag}</span>
                                </a>
                            </li>
                        </ul>
                        <div className="header__cart__price">
                            item:<span>${this.props.price}</span>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

function Login() {
    return (
        <div className="header__cart">
            <div className="header__cart__price">
                <Link className="login" to="/login"> Login</Link>
            </div>
        </div>
    );
}

export default HeaderCart;