import React from "react";
import "../Pages/App.css";

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
  };

  // const FixButton = () => {
  //   if (Search === true) {
  //     "search-button".classList.add("fix-button");
  //   }
  // };

  return (
    <div>
      <div className="store-title">
        <h1>Online Bookcase</h1>
      </div>
      <div className="search-bar">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>{props.keyword && "Searching for keyword: " + props.keyword}</h1>
          <input
            className="input-text"
            type="text"
            placeholder="Title,author,keyword or ISBN"
            value={props.keyword}
            onChange={(e) => props.setKeyword(e.target.value)}
          />
          <input className="search-button" type="submit" value="Find" />
        </form>
      </div>
    </div>
  );
};

export default Search;
