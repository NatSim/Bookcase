import React, { useState } from "react";

const Search = (props) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>{props.keyword && "Searching for keyword: " + props.keyword}</h1>
        <input
          type="text"
          value={props.keyword}
          onChange={(e) => props.setKeyword(e.target.value)}
        />
        <input type="submit" value="Find" />
      </form>
    </div>
  );
};

export default Search;
