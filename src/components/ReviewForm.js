import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ bookId, onReviewSubmitted }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) {
      alert('Rating must be between 1 and 5.');
      return;
    }
    if (!comment) {
      alert('Comment cannot be empty.');
      return;
    }
    axios.post('http://localhost:5000/reviews', { rating, comment, bookId })
      .then(response => {
        onReviewSubmitted(response.data);
        setRating(0);
        setComment('');
      })
      .catch(error => console.error('Error submitting review:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Comment:
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
