import React from 'react';
import {Link} from 'react-router-dom';

class PanelPoster extends React.Component{
    render(){
        return(
            <div className="hero__item" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/hero/banner.jpg'})`}}>
                <div className="hero__text">
                    <span>Đồ ăn nhanh</span>
                    <h2>
                    Đồ ăn<br/>
                    100% sạch
                    </h2>
                    <p>Giao hàng khắp cả nước</p>
                    <Link to="/shop" className="primary-btn">MUA NGAY</Link>
                </div>
            </div>
        );
    }
}
export default PanelPoster;