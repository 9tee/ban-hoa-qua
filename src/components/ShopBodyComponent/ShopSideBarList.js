import React from 'react';
import {Link } from 'react-router-dom';
import Shop from '../../container/Shop/Shop';

class ShopSideBarList extends React.Component {
    render(){
        return(
            <ul>
            {this.props.items.map((item) => {
                return <li><a href={`/shop/${item.maloai}`} >{item.tenloai}</a></li>
            })}
            </ul>
        );
    }
}

export default ShopSideBarList;