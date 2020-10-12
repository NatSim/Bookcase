import React, { useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  return (
    <form>
      <h1>{keyword && "Searching for keyword: " + keyword}</h1>
      <label>
        Name:
        <input
          type="text"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </label>
      Submit:
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;
