import React from 'react';
import Contact from './Contact';

import {withRouter} from 'react-router-dom';

const data = ['Tất cả'];

class PanelSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            style: { opacity: 0, height: '0px', padding: '0px', overflow: 'hidden' }, 
            categories: 'Tất cả',
            inputValue: ''
        };
    }
    toggle() {
        if (this.state.style.opacity !== 0) {
            this.setState({ style: { opacity: 0, height: '0px', padding: '0px', overflow: 'hidden' } });
        }
        else {
            this.setState({ style: { opacity: 1 } });
        }
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
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
                            <input type="text" placeholder="Tìm kiếm sản phẩm ?" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} ></input>
                            <button className="site-btn" onClick={() => {this.props.history.push(`/search/${this.state.inputValue}`)}}>Tìm kiếm</button>
                        </form>
                    </div>
                    <div className="newul">
                        <ul style={{ ...{ transition: 'opacity ease-in-out 1s 0s' , zIndex:1}, ...this.state.style }}>
                            {data.map((item) => { return (<li><a onClick={(event) => { this.changeCategories(event) }}>{item}</a></li>)})}
                        </ul>
                    </div>
                    <Contact number="0978004683"></Contact>
                </div>
            </>
        );
    }
}

export default withRouter(PanelSearchBar);