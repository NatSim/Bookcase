import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.items);
    return (
        <div className="cart">
            <h2 className="shopping-cart">Shopping Cart</h2>
            {props.items.map((item) => <div key={item} >{item}</div>)}
        </div>
    )
}


export default Cart;