import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";
// import './book.css'

const Book = (props) => {
  const {
    volumeInfo: {
      authors,
      title,
      description,
      imageLinks: { thumbnail },
    },
  } = props.book;
  const price = () => {
    if (props.book.saleInfo.saleability === "FOR_SALE") {
      return "£" + props.book.saleInfo.listPrice.amount;
    } else {
      return "No price";
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <h2>{title}</h2>
          <h6>by</h6>

          <h4>
            {authors && (authors.length === 1 ? authors[0] : authors.join(","))}
          </h4>

          <p className="description">{description}</p>
        </Col>
        <Col className="ml-5 mt-5">
          <img
            className="d-flex align-items-start flex-column mt-5 ml-5"
            src={thumbnail}
            alt={title}
          />
          <h2 className="mt-5 ml-5">{price()}</h2>
          {props.bookList && (
            <Button
              variant="success"
              className="mt-5 ml-5"
              onClick={() => props.addBook(props.book)}
            >
              Add
            </Button>
          )}
          {!props.bookList && (
            <Button
              variant="danger"
              className="mt-5 ml-5"
              onClick={() => props.removeBook(props.book)}
            >
              Remove
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

// function addBook(book) {
//     console.log(`The Book ${book} was clicked`);
// }

// function removeBook(book) {
//     const titleExample2 = book.volumeInfo.title + ' / 1' + 'add'
//     // console.log(`The Book ${props.title} was clicked`);
//   }

Book.propTypes = {
  volumeInfo: PropTypes.shape({ title: PropTypes.string.isRequired }),
  authors: PropTypes.string.isRequired,
  description: PropTypes.string,
  listPrice: PropTypes.shape({ amount: PropTypes.number.isRequired }),
  imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired }),
};

Book.defaultProps = {
  title: "No title…",
  authors: "No authors",
  description: "No description",
  amount: "No amount",
  thumbnail: "No image",
};

export default Book;
