import React from 'react';

class ShopSideBarList extends React.Component {
    render(){
        return(
            <ul>
            {this.props.items}
            </ul>
        );
    }
}

export default ShopSideBarList;