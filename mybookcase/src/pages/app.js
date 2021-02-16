import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import data from "../Models/books.json";
import BookList from "../components/BookList";
import About from "./about";
import Bookcase from "../components/Bookcase";
import "./app.css";
import Banner from "../components/Banner";

//Functional BookList Component JS
const App = (props) => {
  const [bookListBooks, setBookListBooks] = useState(data); // data = [{ title, price, author }]
  const [keyword, setKeyword] = useState("");
  const [bookcaseBooks, setBookcaseBooks] = useState([]);

  async function findBooks(value) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((res) => res.json());
    if (!results.error) {
      setBookListBooks(results.items);
    }
  }

  useEffect(() => {
    document.title = bookcaseBooks.length + " Books";
  }, [bookcaseBooks]);

  function addBook(book) {
    // title =  "Queenie"
    // const titleExample = book.volumeInfo.title + " x 1" + " remove";
    console.log(`The Book ${props.title} was clicked`);

    setBookListBooks((previousState) => {
      const newBooks = previousState.filter(
        (bookObj) => bookObj.volumeInfo.title !== book.volumeInfo.title
      );
      return newBooks;
    });

    console.log("addBook");
    setBookcaseBooks((previousState) => {
      return previousState.concat(book);
    });
  }

  function removeBook(ClickOnbookObject) {
    const titleExample2 = ClickOnbookObject.volumeInfo.title + " -1" + "add";
    console.log(`The Book ${titleExample2} was clicked`);
    const newBookCaseBooks = bookcaseBooks.filter(
      (bookcaseBook) => bookcaseBook.id !== ClickOnbookObject.id
    );

    setBookcaseBooks(() => newBookCaseBooks);
  }

  return (
    <BrowserRouter>
      <Header />
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <Search
              findBooks={findBooks}
              keyword={keyword}
              setKeyword={setKeyword}
            />
            <Banner />
            <BookList books={bookListBooks} addBook={addBook} />
          </React.Fragment>
        )}
      />
      <Route
        path="/bookcase"
        render={() => (
          <Bookcase books={bookcaseBooks} removeBook={removeBook} />
        )}
      />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
};

export default App;
