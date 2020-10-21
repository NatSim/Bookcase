import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
    console.log(props.items);
    return (
        <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <h3 className="shopping-cart">Basket</h3>
            {props.items.map((item) => <div key={item} >{item}</div>)}
        </div>
    )
}


export default Cart;