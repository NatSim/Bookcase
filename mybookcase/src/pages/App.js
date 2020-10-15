import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./../Components/Header";
import Search from "./../Components/Search";
import data from "./../Models/books.json";
import BookList from "./../Components/BookList";

//Functional Component JS
const App = (props) => {                  
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");

  async function findBooks(value) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <Header />
            <Search
              findBooks={findBooks}
              keyword={keyword}
              setKeyword={setKeyword}
            />
            <BookList books={books} addBook={addBook} />
          </React.Fragment>
        )}
      />
      <Route path="/bookcase" />
    </BrowserRouter>
  );

  function addBook(title) {
    
    const newBooks = books.filter((book) => {
      if (title === book.volumeInfo.title) {
        return false;
      }
      return true;
    });
    setBooks(newBooks);
  }
  return <BookList addBook={addBook} books={books} />;
};

export default App;