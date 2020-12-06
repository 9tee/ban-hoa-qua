import React from 'react';
import ShopMenu from '../../components/ShopBodyComponent/ShopMenu';
import ShopBanner from '../../components/ShopBodyComponent/ShopBanner';
import CartMain from '../../components/CartComponents/CartMain';

class Cart extends React.Component {
    render(){
        return(
            <>
                <ShopMenu></ShopMenu>
                <ShopBanner bannertext="Giỏ hàng" links={<>
                <a href="/">Trang chủ</a>
                </>} text="Giỏ hàng"></ShopBanner>
                <CartMain></CartMain>
            </>
        );
    }
}

export default Cart;