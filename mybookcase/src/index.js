import React, {Fragment} from 'react'; 
import ReactDOM from 'react-dom';
import books from './models/books.json'; //BookList

const formatter = new Intl.NumberFormat('en-GB', {
style: 'currency',
currency: 'GBP'
})                                                            

const book = books;            //First object in the book array
const renderList = () => {     
    let list = [];
    for (let i = 0; i < books.length; i++) {          //For loop displaying array of books
      let { id, volumeInfo: { title, authors, description, imageLinks } } = books[i]; // book object deconstructed into several variables
      
      list.push(<li id={books[i].id}>{title} - {authors.map(author => (author))}
        {imageLinks && imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail} />
        }</li>);
    }
    return list;
  }
  

                               //JSX Element 'Fragment'?
const element = <Fragment>                      
<ul>
    {renderList()}
</ul>
</Fragment>;

ReactDOM.render(element,document.getElementById('root'));

