import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';

import axios from 'axios';
import {BASE_URL} from '../../consts'


class CartMain extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get(`${BASE_URL}/order`)
    }



    render() {
        return (
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.cart.map((item,index) =>{
                                                return  <CartItem name={item.tenmon} index={index} price={item.dongia} quantity={item.soluong}
                                                img={process.env.PUBLIC_URL + '/img/cart/cart-1.jpg'}></CartItem>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <a href="/shop" className="primary-btn cart-btn">TIẾP TỤC MUA HÀNG</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Tổng giỏ hàng</h5>
                                <ul>
                                    <li>Tổng tiền <span>${this.props.cart.reduce((sum,item) => {return sum + item.soluong*item.dongia},0)}</span></li>
                                    <li>Thành tiền <span>${this.props.cart.reduce((sum,item) => {return sum + item.soluong*item.dongia},0)}</span></li>
                                </ul>
                                <a href="#" className="primary-btn">THANH TIỀN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    }
}
export default connect(mapStateToProps)(CartMain)
