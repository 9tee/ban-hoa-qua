import React from 'react';
import PanelMenu from '../PanelComponents/PanelMenu';
import PanelMenuItem from '../PanelComponents/PanelMenuItem';
import PanelSearchBar from '../PanelComponents/PanelSearchBar';

class ShopMenu extends React.Component{
    render(){
        return (
            <section className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <PanelMenu visible={false}></PanelMenu>
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