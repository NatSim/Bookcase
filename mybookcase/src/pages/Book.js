import React from "react";
import PropTypes from "prop-types";


const Book = (props) => {
  const {
     volumeInfo: {
        title,
        authors, 
        description, 
        imageLinks: { thumbnail }
       }
     } = props.book;

  const renderAmount = () => {
    if (props.book.saleInfo && 
      props.book.saleInfo.listPrice && 
      props.book.saleInfo.listPrice.amount
      ) {

      return '£' + props.book.saleInfo.listPrice.amount;
    }
    return "No price available";
  };

  // const renderAuthors = () => {
  //   if (authors.length === 1) {
  //     return authors;
  //   }
  //   return authors.map(author => author + ', ');
  // }

  return (
    <li className="book">
    <img src={thumbnail} alt={title.length>0?title:`Book id=${id}`}/>
    <div>
      <h2 title={title}>
        {title.length>50 ? title.substring(0,50)+"...":title}
      </h2>
      <p className="author">
        by {authors?authors.join(', '):"No Authors Listed"}
      </p>
      <p className="price">{retailPrice?"£"+retailPrice.amount:"No Retail Price"}</p>
      <p className="description">{description?description.substring(0,300)+"...":"No description"}</p>
    </div>
    <button className="addButton" onClick={() => addBook(title)}>Add +</button>
    </li>
    );
};


export default Book;