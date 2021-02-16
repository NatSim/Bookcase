import React from "react";
import Book from "./book";
import "./cart.css";

const Bookcase = (props) => {
  console.log(props.books);
  return (
    <div className="bookcase">
      {props.books.map((book, index) => {
        return <Book key={book.id} book={book} removeBook={props.removeBook} />;
      })}
    </div>
  );
};

export default Bookcase;
