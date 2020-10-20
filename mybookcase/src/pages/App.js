import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./../Components/Header";
import Search from "./../Components/Search";
import data from "./../Models/books.json";
import BookList from "./../Components/BookList";
import Cart from "./../Components/Cart";

//Functional Component JS
const App = (props) => {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");
  const [cart, setCart] = useState([]);


  async function findBooks(value) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  function addBook(title) {
    console.log("addBook");
    setCart((previousState)=>{
      return previousState.concat(title)
    })

  //  const newBooks = books.filter((book) => {
  //     if (title === book.volumeInfo.title) {
  //       return false;
  //     }
  //     return true;
  //   });
  //   setBooks(newBooks);
  }

  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <Cart
              items={cart}
            />
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
 };

export default App;