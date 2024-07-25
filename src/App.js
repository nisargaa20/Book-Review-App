import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Recommendations from './components/Recommendations';
import BookForm from './components/BookForm';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      setBooks(storedBooks);
    } else {
      const initialBooks = [
        { id: '1', title: '1984', author: 'George Orwell', genre: 'Dystopian', image: 'https://source.unsplash.com/random/200x300' },
        { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', image: 'https://source.unsplash.com/random/200x301' },
        { id: '3', title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', image: 'https://source.unsplash.com/random/200x302' }
      ];
      setBooks(initialBooks);
      localStorage.setItem('books', JSON.stringify(initialBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks(prevBooks => {
      const updatedBooks = [...prevBooks, { ...book, id: String(prevBooks.length + 1) }];
      localStorage.setItem('books', JSON.stringify(updatedBooks));  // Save to local storage
      return updatedBooks;
    });
  };

  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <ThemeSwitcher />
        <BookForm addBook={addBook} />
        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/recommendations" element={<Recommendations books={books} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
