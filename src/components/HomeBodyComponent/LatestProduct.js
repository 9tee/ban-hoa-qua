import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

class LatestProduct extends React.Component {
    render() {
        const settings = {
          dots: false,
          arrows: false,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <div className="singleslide">
            <h2> Some Content</h2>
            <Slider {...settings}>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
            </Slider>
          </div>
        );
      }
}

class ProductItem extends React.Component {
  render() {
      return (
          <div className="latest-prdouct__slider__item">
              <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt=""></img>
                  </div>
                  <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                  </div>
              </a>
              <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt=""></img>
                  </div>
                  <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                  </div>
              </a>
              <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt=""></img>
                  </div>
                  <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                  </div>
              </a>
          </div>

      );
  }
}

export default LatestProduct;