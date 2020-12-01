import React from 'react'
import ShopSideBarList from "./ShopSideBarList"


var items = <> <li><a href="#">Fresh Meat</a></li>
    <li><a href="#">Vegetables</a></li>
    <li><a href="#">Fruit &amp; Nut Gifts</a></li>
    <li><a href="#">Fresh Berries</a></li>
    <li><a href="#">Ocean Foods</a></li>
    <li><a href="#">Butter &amp; Eggs</a></li>
    <li><a href="#">Fastfood</a></li>
    <li><a href="#">Fresh Onion</a></li>
    <li><a href="#">Papayaya &amp; Crisps</a></li>
    <li><a href="#">Oatmeal</a></li></>


class ShopSideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__item">
                    <h4>Department</h4>
                    <ShopSideBarList items={items}></ShopSideBarList>
                </div>
            </div>
        );
    }
}

export default ShopSideBar;