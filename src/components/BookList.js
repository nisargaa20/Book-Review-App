import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <div className="books">
        {books.map(book => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} className="book-image" />
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">{book.author}</p>
            <Link to={`/book/${book.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
