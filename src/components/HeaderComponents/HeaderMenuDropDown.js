import React from 'react'


var item = [{name: 'Shop Details', href: '#' }, { name: 'Shopping Cart', href: '#' }, { name: 'Check Out', href: '#' }, { name: 'Blog Details', href: '#' }]

class HeaderMenuDropDown extends React.Component {
    render() {
        return (
            <ul className="header__menu__dropdown">
                {item.map((item,index) => {
                    return(
                    <li key={index}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                    );
                })
                }
            </ul>
        )
    }
}

export default HeaderMenuDropDown;