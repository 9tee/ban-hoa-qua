import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';


class CartMain extends React.Component {
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
                                            <th className="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
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
                                <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your coupon code" />
                                        <button type="submit" className="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>${this.props.cart.reduce((sum,item) => {return sum + item.soluong*item.dongia},0)}</span></li>
                                    <li>Total <span>${this.props.cart.reduce((sum,item) => {return sum + item.soluong*item.dongia},0)}</span></li>
                                </ul>
                                <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
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
