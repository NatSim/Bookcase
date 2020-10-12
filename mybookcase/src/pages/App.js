import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Book from './'
import data from "./model/books.json";
import BookList from "./components/BookList";
//import Header
import Search from "./components/Search.js";

const App = (props) => {
  const [books] = useState(data);

  const [selectedBook, setSelectBook] = useState("");

  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
  }
if (books.length ===0) {
            return 'No books found';
        }
        // return (
        //     <div>
        //         <BookList books={books} addBook={addBook} />
        //     </div>
        // );
        return (
            <BrowserRouter>
            <Route path='/' render=[() => (
                </>
            )
            </BrowserRouter>
        )
  }

  export default App; 
