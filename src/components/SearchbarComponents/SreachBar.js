import React from 'react';
import PanelSearchBar from './PanelSearchBar';
import PanelMenu from '../PanelComponents/PanelMenu';
import PanelMenuItem from './PanelMenuItem';

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

class SreachBar extends React.Component {
    render() {
        return (
            <>
                <PanelMenu items={items}></PanelMenu>
                <PanelSearchBar></PanelSearchBar>
            </>
        );
    }
}

export default SreachBar;