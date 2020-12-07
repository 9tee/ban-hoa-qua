import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { IMAGE_URL } from '../../consts';

class ShopProductItem extends React.Component {

    addCart(){
        window.dispatch({type:'ADD_CART',data:{mamon:this.props.item.mamon,tenmon:this.props.item.tenmon, dongia: this.props.item.gia,anh:this.props.item.anh, soluong:1}})
    }

    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic" style={{ backgroundImage: `url(${IMAGE_URL + '/'+ this.props.item.anh})`, backgroundSize: 'cover'}}>
                        <ul className="product__item__pic__hover">
                            <li><a onClick={() => {this.addCart()}}><FontAwesomeIcon icon={faShoppingBag} color="black" /></a></li>
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