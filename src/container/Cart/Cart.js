import React from 'react';
import ShopMenu from '../../components/ShopBodyComponent/ShopMenu';
import ShopBanner from '../../components/ShopBodyComponent/ShopBanner';
import CartMain from '../../components/CartComponents/CartMain';

class Cart extends React.Component {
    render(){
        return(
            <>
                <ShopMenu></ShopMenu>
                <ShopBanner bannertext="Shopping Cart" links={<>
                <a href="/">Home</a>
                </>} text="Shopping Cart"></ShopBanner>
                <CartMain></CartMain>
            </>
        );
    }
}

export default Cart;