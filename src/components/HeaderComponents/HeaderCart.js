import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class HeaderCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-lg-3">
                {this.props.login ?
                    <>
                        <div className="header__cart">
                            <Shopbag />
                        </div>
                    </>
                    :
                    <Login />
                }
            </div>
        );
    }
}

function Shopbag() {
    return(
    <ul>
        <li>
            <Link to='/cart'>
                <FontAwesomeIcon icon={faShoppingBag} color="black" />
            </Link>
        </li>
    </ul>
    );
}

function Login() {
    return (
        <div className="header__cart">
            <Shopbag />
            <div className="header__cart__price">
                <Link className="login" to="/login"> Đăng nhập</Link>
            </div>
        </div>
    );
}

export default HeaderCart;