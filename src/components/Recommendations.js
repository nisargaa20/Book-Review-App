import React from 'react';

const Recommendations = () => {
  // Simulated user reading history
  const userHistory = ['Dystopian', 'Classic'];

  // Simulated recommendation logic
  const recommendedBooks = [
    { id: '4', title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian' },
    { id: '5', title: '1984', author: 'George Orwell', genre: 'Dystopian' }
  ];

  return (
    <div>
      <h1>Recommendations</h1>
      <h2>Because you enjoyed...</h2>
      <ul>
        {userHistory.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <h2>We recommend...</h2>
      <ul>
        {recommendedBooks.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;


