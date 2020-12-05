import React from 'react';
import ShopSideBar from "./ShopSideBar"
import axios from 'axios'
import {BASE_URL} from '../../consts';



import ShopItemFilter from "./ShopItemFilter";
import ShopProductItem from "./ShopProductItem";



import {withRouter} from 'react-router-dom';

class ShopProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: []};
    }
    componentDidMount(){
        if (!this.props.match.params.id){
        axios.get(`${BASE_URL}/foods`).then((respone) => this.setData(respone)).catch(console.log)
        }
        else{
            axios.get(`${BASE_URL}/foods?idtype=${this.props.match.params.id}`).then((respone) => this.setData(respone)).catch(console.log)
        }
    }

    setData(respone){
        switch(respone.status){
            case 200:{
                this.setState({data:respone.data},console.log());
                break;
            }
            default:{
                break;
            }
        }
    }

    render() {
        return (
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <ShopSideBar></ShopSideBar>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="section-title product__discount__title">
                                <h2>Cửa hàng</h2>
                            </div>
                            <ShopItemFilter total={this.state.data.length}></ShopItemFilter>
                            <div className="row">
                                {this.state.data.map((item, index)=>{
                                    return (<ShopProductItem item={item} key={index}></ShopProductItem>);
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(ShopProduct);