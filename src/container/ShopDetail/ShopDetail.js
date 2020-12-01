import React from 'react';
import ShopMenu from '../../components/ShopBodyComponent/ShopMenu';
import ShopBanner from '../../components/ShopBodyComponent/ShopBanner';
import ShopDetailMain from '../../components/ShopDetailComponents/ShopDetailMain';

class ShopDetail extends React.Component {
    render() {
        return (
            <>
                <ShopMenu></ShopMenu>
                <ShopBanner bannertext="Vegetable’s Package" links={<>
                <a href="/">Home</a>
                <a href="/">Vegetables</a>
                </>} text="Vegetable’s Package"></ShopBanner>
                <ShopDetailMain></ShopDetailMain>
            </>
        );
    }
}

export default ShopDetail;