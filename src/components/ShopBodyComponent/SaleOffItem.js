import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

class SaleOffItem extends React.Component {
    render() {
        return (
            <div class="product__discount">
                <div class="product__discount__item">
                    <div class="product__discount__item__pic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "img/product/discount/pd-1.jpg"})`,width: '270px', margin: "auto" }}>
                        <div class="product__discount__percent">-20%</div>
                        <ul class="product__item__pic__hover">
                            <li><a href="#"><FontAwesomeIcon icon={faHeart} color="black" /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faRetweet} color="black" /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faShoppingBag} color="black" /> </a></li>
                        </ul>
                    </div>
                    <div class="product__discount__item__text">
                        <span>Dried Fruit</span>
                        <h5><a href="#">Raisin’n’nuts</a></h5>
                        <div class="product__item__price">$30.00 <span>$36.00</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SaleOffItem;