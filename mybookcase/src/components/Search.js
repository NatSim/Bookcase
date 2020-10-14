import React, { useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>{keyword && "Searching for keyword: " + keyword}</h1>
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
