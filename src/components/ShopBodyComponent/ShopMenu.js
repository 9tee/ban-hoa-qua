import React from 'react';
import PanelMenu from '../PanelComponents/PanelMenu';
import PanelMenuItem from '../PanelComponents/PanelMenuItem';
import PanelSearchBar from '../PanelComponents/PanelSearchBar';

var items = <>
    <PanelMenuItem href="#" value="Fresh Meat" />
    <PanelMenuItem href="#" value="Vegetables" />
    <PanelMenuItem href="#" value="Fruit & Nut Gifts" />
    <PanelMenuItem href="#" value="Fresh Berries" />
    <PanelMenuItem href="#" value="Ocean Foods" />
    <PanelMenuItem href="#" value="Butter & Eggs" />
    <PanelMenuItem href="#" value="Fastfood" />
    <PanelMenuItem href="#" value="Fresh Onion" />
    <PanelMenuItem href="#" value="Papayaya & Crisps" />
    <PanelMenuItem href="#" value="Oatmeal" />
    <PanelMenuItem href="#" value="Fresh Bananas" />
</>


class ShopMenu extends React.Component{
    render(){
        return (
            <section className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <PanelMenu visible={false} items={items}></PanelMenu>
                        <div className="col-lg-9">
                            <PanelSearchBar></PanelSearchBar>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopMenu;