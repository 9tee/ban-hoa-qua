import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaleOffItem from "./SaleOffItem"

import Slider from "react-slick";

class SlideSaleOff extends React.Component {
    render() {
        var settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows:false,
            swipeToSlide: true,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        };
        return (
            <div className="AppSl">
                <Slider {...settings}>
                    <SaleOffItem></SaleOffItem>
                    <SaleOffItem></SaleOffItem>
                    <SaleOffItem></SaleOffItem>
                    <SaleOffItem></SaleOffItem>
                    <SaleOffItem></SaleOffItem>
                    <SaleOffItem></SaleOffItem>
                    <SaleOffItem></SaleOffItem>
                    <SaleOffItem></SaleOffItem>
                </Slider>
            </div>
        );

    }
}

export default SlideSaleOff;