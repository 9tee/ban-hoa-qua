import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { connect } from 'react-redux';

const data = [
    process.env.PUBLIC_URL + "img/product/details/thumb-1.jpg",
    process.env.PUBLIC_URL + "img/product/details/thumb-2.jpg",
    process.env.PUBLIC_URL + "img/product/details/thumb-3.jpg",
    process.env.PUBLIC_URL + "img/product/details/thumb-4.jpg",
    process.env.PUBLIC_URL + "img/product/details/thumb-1.jpg",
    process.env.PUBLIC_URL + "img/product/details/thumb-2.jpg",
    process.env.PUBLIC_URL + "img/product/details/thumb-3.jpg",
    process.env.PUBLIC_URL + "img/product/details/thumb-4.jpg",
];

class ShopDetailMain extends React.Component {
    constructor(props) {
        super(props);
        var path = window.location.pathname;
        if (path === "/shop-detail/information") {
            this.state = { activeindex: [{ nav: "nav-link" }, { nav: "nav-link active" }, { nav: "nav-link" }] }
        }
        else if (path === "/shop-detail/reviews") {
            this.state = { activeindex: [{ nav: "nav-link" }, { nav: "nav-link" }, { nav: "nav-link active" }] }
        }
        else {
            this.state = { activeindex: [{ nav: "nav-link active" }, { nav: "nav-link" }, { nav: "nav-link" }] }
        }
        this.state.img = process.env.PUBLIC_URL + 'img/product/details/product-details-1.jpg';
        this.state.qty = 1
    }

    click(i) {
        var constant = [{ nav: "nav-link" }, { nav: "nav-link" }, { nav: "nav-link" }];
        var style = { nav: "nav-link active" };
        constant[i] = style;
        this.setState({ activeindex: constant });
        console.log(this.props.cart);
        return false;
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
                                    <h3>Vetgetable’s Package</h3>
                                    <div className="product__details__rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                        <span>(18 reviews)</span>
                                    </div>
                                    <div className="product__details__price">$50.00</div>
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                                    vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                            quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
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
                                        <li><b>Availability</b> <span>In Stock</span></li>
                                        <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                        <li><b>Weight</b> <span>0.5 kg</span></li>
                                        <li><b>Share on</b>
                                            <div className="share">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-instagram"></i></a>
                                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="product__details__tab" >
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <Link className={this.state.activeindex[0].nav} onClick={() => { this.click(0) }} to={'/shop-detail/'}>
                                                Decription
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={this.state.activeindex[1].nav} onClick={() => { this.click(1) }} to={'/shop-detail/information'}>
                                                Infomation
                                        </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={this.state.activeindex[2].nav} onClick={() => { this.click(2) }} to={'/shop-detail/reviews'}>
                                                Reviews
                                        </Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content">

                                        <Switch>
                                            <Route exact path="/shop-detail" component={decription} />
                                            <Route path="/shop-detail/information" render={infomation} />
                                            <Route path="/shop-detail/reviews" render={review} />
                                        </Switch>
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

export default ShopDetailMain

function decription() {
    return (<div className="product__details__tab__desc">
        <h6>Decription</h6>
        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
        suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
        vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
        Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
        accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
        pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
        elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
        vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
        porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
        sed sit amet dui. Proin eget tortor risus.</p>
    </div>
    );
}

function infomation() {
    return (
        <div className="product__details__tab__desc">
            <h6>Infomation</h6>
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
            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
            porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
        </div>
    );
}

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
