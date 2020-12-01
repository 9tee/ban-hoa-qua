import React from 'react';
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';


import Slider from "react-slick";


function CustomArrow(props) {
    const { className, onClick } = props;
    return (       
        props.nextArrow ?
        <FontAwesomeIcon className={className} onClick={onClick} icon={faChevronRight}  style={{width:'20px' , height:'20px', color:'black'}}/> 
        :
        <FontAwesomeIcon className={className} onClick={onClick} icon={faChevronLeft}  style={{width:'20px' , height:'20px', color:'black'}}/> 
      
    );
}

class Categories extends React.Component {
    render() {
        var settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll: 2,
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
            ],
            nextArrow: <CustomArrow nextArrow={true}/>,
            prevArrow: <CustomArrow nextArrow={false}/>
        };
        return (
            <div className="container">
                <div className="AppSl">
                    <Slider {...settings}>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                        <SliderItem></SliderItem>
                    </Slider>
                </div>
            </div>
        );
    }
}


export default Categories;