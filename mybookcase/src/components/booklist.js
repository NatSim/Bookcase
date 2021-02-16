import React from "react";
import Book from "./book";
// import {Row} from 'react-bootstrap'

/**
 * const props = {
 *  books: [{ title, author, price }, { title, author, price }, { title, author, price }],
 *  addBook: function () { // add book to bookcase code }
 * }
 **/

const BookList = (props) => {
  //   const { books, addBook } = props; // not required!!!
  return (
    <div>
      {props.books.map((book) => (
        <Book key={book.id} book={book} addBook={props.addBook} bookList />
      ))}
    </div>
  );
};

export default BookList;
