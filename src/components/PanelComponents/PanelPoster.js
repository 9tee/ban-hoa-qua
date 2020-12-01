import React from 'react';
import {Link} from 'react-router-dom';

class PanelPoster extends React.Component{
    render(){
        return(
            <div className="hero__item" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/hero/banner.jpg'})`}}>
                <div className="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2>
                    Vegetable<br/>
                    100% Organic
                    </h2>
                    <p>Free Pickup and Delivery Available</p>
                    <Link href="#" className="primary-btn">SHOP NOW</Link>
                </div>
            </div>
        );
    }
}
export default PanelPoster;