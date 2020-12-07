import React from 'react';
import {IMAGE_URL} from '../../consts';
import {Link} from 'react-router-dom';

class SliderItem extends React.Component {
    render() {
        return (
            <div className="categories__item" style={{ backgroundSize:'cover', backgroundImage: `url(${IMAGE_URL}/${this.props.item.anh})`, width: '270px', margin: "auto"}}>
                <h5><Link to={`/shop-detail/${this.props.item.mamon}`} >{this.props.item.tenmon}</Link></h5>
            </div>
        );
    }
}

export default SliderItem;