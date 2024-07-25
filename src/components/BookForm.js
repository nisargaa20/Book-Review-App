import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [book, setBook] = useState({ title: '', author: '', genre: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.genre) {
      alert('All fields are required');
      return;
    }
    addBook(book);
    setBook({ title: '', author: '', genre: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" />
      <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" />
      <input type="text" name="genre" value={book.genre} onChange={handleChange} placeholder="Genre" />
      <input type="text" name="image" value={book.image} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
