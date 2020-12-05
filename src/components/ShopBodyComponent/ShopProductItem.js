import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

class ShopProductItem extends React.Component {

    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/'+ this.props.item.anh})`, backgroundSize: 'cover'}}>
                        <ul className="product__item__pic__hover">
                            <li><Link to="#"><FontAwesomeIcon icon={faHeart} color="black" /></Link></li>
                            <li><Link to="#"><FontAwesomeIcon icon={faRetweet} color="black" /></Link></li>
                            <li><Link to="#"><FontAwesomeIcon icon={faShoppingBag} color="black" /> </Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><Link to={`/shop-detail/${this.props.item.mamon}`}>{this.props.item.tenmon}</Link></h6>
                        <h5>{this.props.item.gia}đ</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopProductItem;