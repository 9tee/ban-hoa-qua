import React from 'react';
import Contact from './Contact';
class PanelSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { style: { opacity: 0, height: '0px', padding: '0px', overflow: 'hidden' }, categories: 'All Categories' };
    }
    toggle() {
        if (this.state.style.opacity !== 0) {
            this.setState({ style: { opacity: 0, height: '0px', padding: '0px', overflow: 'hidden' } });
        }
        else {
            this.setState({ style: { opacity: 1 } });
        }
    }

    changeCategories(event) {
        this.setState({ style: { opacity: 0, height: '0px', padding: '0px', overflow: 'hidden' }, categories: event.target.innerText });
    }
    render() {
        return (
            <>
                <div className="hero__search">
                    <div className="hero__search__form">
                        <form action="#">
                            <div className="hero__search__categories" onClick={() => { this.toggle() }}>
                                {this.state.categories}
                                <span className="arrow_carrot-down"></span>
                            </div>
                            <input type="text" placeholder="What do you need ?"></input>
                            <button type="submit" className="site-btn">SEARCH</button>
                        </form>
                    </div>
                    <div className="newul">
                        <ul style={{ ...{ transition: 'opacity ease-in-out 1s 0s' , zIndex:1}, ...this.state.style }}>
                            <li><a onClick={(event) => { this.changeCategories(event) }}>All Categories</a></li>
                            <li><a onClick={(event) => { this.changeCategories(event) }}>Fresh Meat</a></li>
                            <li><a onClick={(event) => { this.changeCategories(event) }}>Vegetables</a></li>
                        </ul>
                    </div>
                    <Contact number="0978004683"></Contact>
                </div>
            </>
        );
    }
}

export default PanelSearchBar;