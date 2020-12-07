import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    increase() {
            window.dispatch({ type: 'CHANGE', data: { index: parseInt(this.props.index), quantity: this.props.quantity +1 } });
    }
    decrease() {
        if (this.props.quantity > 0) {
                window.dispatch({ type: 'CHANGE', data: { index: parseInt(this.props.index), quantity: this.props.quantity -1 } });
        }
    }

    remove(){
        window.dispatch({type:'REMOVE',data:this.props.index});
    }

    render() {
        return (
            <tr>
                <td className="shoping__cart__item">
                    <img style={{width:'148px', height:'148px'}} src={this.props.img} alt="" />
                    <h5>{this.props.name}</h5>
                </td>
                <td className="shoping__cart__price">
                    ${this.props.price}
                </td>
                <td className="shoping__cart__quantity">
                    <div className="quantity">
                        <div className="pro-qty">
                            <span className="dec qtybtn" onClick={() => { this.decrease(); }}>-</span>
                            <input type="text" value={this.props.quantity} onChange={() => { }} />
                            <span className="inc qtybtn" onClick={() => { this.increase(); }}>+</span></div>
                    </div>
                </td>
                <td className="shoping__cart__total">
                    ${this.props.quantity * this.props.price}
                </td>
                <td className="shoping__cart__item__close">
                    <span className="icon_close" onClick={()=>{this.remove()}}></span>
                </td>
            </tr>
        );
    }
}

export default CartItem;