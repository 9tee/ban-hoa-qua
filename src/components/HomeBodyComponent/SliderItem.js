import React from 'react';

class SliderItem extends React.Component {
    render() {
        return (
            <div className="categories__item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'img/categories/cat-1.jpg'})`, width: '270px', margin: "auto"}}>
                <h5><a href="#">Fresh Fruit</a></h5>
            </div>
        );
    }
}

export default SliderItem;