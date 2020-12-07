import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { BASE_URL, IMAGE_URL } from '../../consts';



class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [{ value: "Đồ ăn", class: "mixitup-control-active active" }, { value: "Đồ uống" }, { value: "Bánh kem" }],
            data: []
        };
    }

    componentDidMount() {
        this.getData(0);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.numbers === nextState) {
            return false
        }
        else {
            return true
        }
    }
    click(index) {
        var numbers = [{ value: "Đồ ăn" }, { value: "Đồ uống" }, { value: "Bánh kem" }];
        numbers[index]["class"] = "mixitup-control-active active";
        this.setState({ numbers: numbers }, () => this.getData(index));
    }

    getData(index) {
        axios.get(`${BASE_URL}/foods?num=4&idtype=${index + 1}`).then((respone) => this.setData(respone)).catch(console.log)
    }


    setData(respone) {
        switch (respone.status) {
            case 200: {
                this.setState({ data: respone.data }, console.log());
                break;
            }
            default: {
                break;
            }
        }
    }

    render() {
        return (
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>
                                    Món ăn đề cử
                                 </h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    {this.state.numbers.map((number, index) =>
                                        <li key={index} onClick={() => { this.click(index) }} className={number.class}>{number.value}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        {this.state.data.map((item) => {
                            return <FeatureItem item={item}></FeatureItem>
                        })}
                    </div>
                </div>
            </section>
        );
    }
}


class FeatureItem extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="featured__item">
                    <div className="featured__item__pic" style={{backgroundSize:'cover', backgroundImage: `url(${IMAGE_URL}/${this.props.item.anh})` }}>
                    </div>
                    <div className="featured__item__text">
                        <h6>
                            <Link to={`/shop-detail/${this.props.item.mamon}`}>{this.props.item.tenmon}</Link>
                        </h6>
                        <h5>{this.props.item.gia}đ</h5>

                    </div>
                </div>
            </div>
        );
    }
}
export default Feature;