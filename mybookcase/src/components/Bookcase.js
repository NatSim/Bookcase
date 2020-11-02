import React from 'react';
import Book from './Book';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Bookcase = (props) => {
    console.log(props.books);
    return (
        <div className="bookcase">
            {props.books.map((book, index) => {
                return <Book key={book.id} book={book} removeBook={props.removeBook} />
            })}
        </div>
    )
}


export default Bookcase;