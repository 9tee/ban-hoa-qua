import React from 'react'
import ShopSideBarList from "./ShopSideBarList"
import axios from 'axios'
import {BASE_URL} from '../../consts';


class ShopSideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: []}
    }

    componentDidMount(){
        axios.get(BASE_URL + '/types').then((respone) => this.setData(respone)).catch(console.log)
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
            <div className="sidebar">
                <div className="sidebar__item">
                    <h4>Danh Mục</h4>
                    <ShopSideBarList items={this.state.data}></ShopSideBarList>
                </div>
            </div>
        );
    }
}

export default ShopSideBar;