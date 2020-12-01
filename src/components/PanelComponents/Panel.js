import React from 'react';
import PanelMenu from './PanelMenu';
import PanelMain from './PanelMain';
import PanelMenuItem from './PanelMenuItem'

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

class Panel extends React.Component{
    render(){
        return(
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <PanelMenu items={items}></PanelMenu>
                        <PanelMain></PanelMain>
                    </div>
                </div>
            </section>
        );
    }
}

export default Panel;