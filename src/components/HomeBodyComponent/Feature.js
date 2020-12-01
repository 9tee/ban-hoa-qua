import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';


class Feature extends React.Component {
    render() {
        return (
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>
                                    Featured Product
                                 </h2>
                            </div>
                            <FeatureControl></FeatureControl>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        <FeatureItem></FeatureItem>
                        <FeatureItem></FeatureItem>
                        <FeatureItem></FeatureItem>
                        <FeatureItem></FeatureItem>
                        <FeatureItem></FeatureItem>
                    </div>
                </div>
            </section>
        );
    }
}

class FeatureControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {numbers:[{value:"Orange",class:"mixitup-control-active active"},{value:"Orange"}, {value:"Orange"}, {value:"Orange"}]};
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.state.numbers === nextState){
            return false
        }
        else{
            return true
        }
    }
    click(index){
        var numbers = [{value:"Orange"},{value:"Orange"}, {value:"Orange"}, {value:"Orange"}]
        numbers[index]["class"] = "mixitup-control-active active"
        this.setState({numbers:numbers})
    }

    render() {
        return (
            <div className="featured__controls">
                <ul>
                    {this.state.numbers.map((number,index) => 
                    <li key={index} onClick={()=>{this.click(index)}} className={number.class}>{number.value}</li>)}
                </ul>
            </div>
        );
    }
}


class FeatureItem extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="featured__item">
                    <div className="featured__item__pic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/featured/feature-1.jpg'})` }}>
                        <ul className="featured__item__pic__hover">
                            <li><a href="#"><FontAwesomeIcon icon={faHeart} color="black"/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faRetweet} color="black"/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faShoppingBag} color="black"/> </a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6>
                            <a href="#">Crab Pool Security</a>
                        </h6>
                        <h5>$30.00</h5>

                    </div>
                </div>
            </div>
        );
    }
}
export default Feature;