import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Form, Button, Input } from 'antd';

import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import axios from 'axios'
import { BASE_URL, IMAGE_URL } from '../../consts';

const { TextArea } = Input;

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
        this.state = { img: 'https://via.placeholder.com/150', qty: 1 };
        this.state.item = {};
        this.state.comments = []
        this.formRef = React.createRef();
    }



    componentDidMount() {
        axios.get(`${BASE_URL}/foods/${this.props.match.params.id}`).then((respone) => { this.setState({ item: respone.data, img: `${IMAGE_URL}/${respone.data.anh}`}) }).catch(console.log)
        axios.get(`${BASE_URL}/comments?mamon=${this.props.match.params.id}`).then((respone) => { this.setState({ comments: respone.data }); console.log(respone) }).catch(console.log)
    }

    onFinish = values => {
        values.mamon = this.props.match.params.id
        if(this.props.logged){
            let header = { headers : { 'Authorization': window.localStorage.getItem('token')}}
            console.log(header);
            axios.post(`${BASE_URL}/comments`,values,header).then(
                () => {
                    axios.get(`${BASE_URL}/comments?mamon=${this.props.match.params.id}`)
                    .then((respone) => { this.setState({ comments: respone.data }); console.log(respone) })
                    .catch(console.log)
                    this.formRef.current.resetFields()
                }
            ).catch(
                () => {alert("Bình luận thất bại");}
            );
            }else{
                this.props.history.push('/login');
            }

    };

    add() {
        this.setState({ qty: this.state.qty + 1 })
    }

    dec() {
        if (this.state.qty > 1) {
            this.setState({ qty: this.state.qty - 1 })
        }
    }

    addCart(){
        window.dispatch({type:'ADD_CART',data:{mamon:this.props.match.params.id,tenmon:this.state.item.tenmon, dongia: this.state.item.gia,anh:this.state.img, soluong:this.state.qty}})
    }

    render() {
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
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__text">
                                    <h3>{this.state.item.tenmon}</h3>
                                    <div className="product__details__rating">
                                        <span>({this.state.comments.length} nhận xét)</span>
                                    </div>
                                    <div className="product__details__price">{this.state.item.gia}đ</div>
                                    <p>{this.state.item.mota}</p>
                                    <div className="product__details__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <span className="qtybtn" onClick={() => { this.dec() }}>-</span>
                                                <input type="text" value={this.state.qty} />
                                                <span className="qtybtn" onClick={() => { this.add() }}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="primary-btn" style={{border: 'none'}} onClick={()=>{this.addCart()}}>Thêm vào giỏ hàng</button>
                                    <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                                    <ul>
                                        <li><b>Tình trạng</b> <span>{this.state.item.trangthai}</span></li>
                                        <li><b>Đơn vị tính</b> <span>{this.state.item.dvt}</span></li>
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
                                    <Form
                                        name="basic"
                                        onFinish={this.onFinish}
                                        ref={this.formRef}
                                    >
                                        <Form.Item
                                            name="noidung"
                                        >
                                            <TextArea
                                                placeholder="Nhận xét tại đây"
                                                autoSize={{ minRows: 3, maxRows: 5 }}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            style={{ float: 'right' }}
                                        >
                                            <Button htmlType="submit">Nhận xét</Button>
                                        </Form.Item>
                                    </Form>
                                    <div className="tab-content">
                                        <div className="product__details__tab__desc">
                                            <div className="container">
                                                {
                                                    this.state.comments.map((item) => {
                                                        return (
                                                            <div class="row" style={{margin:'10px auto 0px auto', borderBottom: '1px solid #dee2e6', width:'100%' }}>
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img src="/user.png" class="media-object" style={{ width: '40px' }} />
                                                                    </div>
                                                                    <div className="media-body" style={{ marginLeft: '20px' }}>
                                                                        <h4 className="media-heading title">{item.ten}</h4>
                                                                        <p className="komen">
                                                                            {item.noidung}<br />
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }

                                            </div>
                                        </div>
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

const mapStateToProps = (state) => {
    return {
        logged: state.login.login,
    }
}

export default connect(mapStateToProps)(withRouter(ShopDetailMain))
