import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { withRouter } from "react-router-dom";
import axios from 'axios'
import {BASE_URL} from '../../consts';

const data = [
     "./img/product/details/thumb-1.jpg",
     "./img/product/details/thumb-2.jpg",
     "./img/product/details/thumb-3.jpg",
     "./img/product/details/thumb-4.jpg",
     "./img/product/details/thumb-1.jpg",
     "./img/product/details/thumb-2.jpg",
     "./img/product/details/thumb-3.jpg",
     "./img/product/details/thumb-4.jpg",
];

class ShopDetailMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {img:`${window.location.protocol}//${window.location.host}/img/product/details/product-details-1.jpg`, qty:1};
        this.state.item = {};
    }

    componentDidMount(){
        console.log(process.env)
        axios.get(`${BASE_URL}/foods/${this.props.match.params.id}`).then((respone) => {this.setState({item:respone.data}); console.log(respone)}).catch(console.log)
    }


    add(){
        this.setState({qty: this.state.qty +1})
    }

    dec(){
        if(this.state.qty > 1){
        this.setState({qty: this.state.qty -1})
        }
    }

    render() {
        const settings = {
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <Router>
                <div className="product-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__pic">
                                    <div className="product__details__pic__item">
                                        <img className="product__details__pic__item--large"
                                            src={this.state.img} alt="" />
                                    </div>
                                    <Slider {...settings}>
                                        {data.map((item, index) => {
                                            return <img className="detail-slider" src={item} onClick={() => { this.setState({ img: data[index] }) }} alt="" />
                                        })}

                                    </Slider>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__text">
                                    <h3>{this.state.item.tenmon}</h3>
                                    <div className="product__details__rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                        <span>(18 reviews)</span>
                                    </div>
                                    <div className="product__details__price">{this.state.item.gia}đ</div>
                                    <p>{this.state.item.mota}</p>
                                    <div className="product__details__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <span className="qtybtn" onClick={()=>{this.dec()}}>-</span>
                                                <input type="text" value={this.state.qty} />
                                                <span className="qtybtn" onClick={()=>{this.add()}}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="primary-btn">ADD TO CARD</a>
                                    <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                                    <ul>
                                        <li><b>Tình trạng</b> <span>In Stock</span></li>
                                        <li><b>Đơn vị tính</b> <span>{this.state.item.dvt}<samp>Free pickup today</samp></span></li>
                                        <li><b>Weight</b> <span>0.5 kg</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="product__details__tab" >
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item active">
                                                Reviews
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        {review()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router >
        );
    }
}

export default withRouter(ShopDetailMain)

function review() {
    return (
        <div className="product__details__tab__desc">
            <h6>Review</h6>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
    Proin eget tortor risus.</p>
        </div>
    );
}
