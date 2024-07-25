// src/components/BookDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then(response => {
        setBook(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });

    axios.get(`http://localhost:5000/reviews?bookId=${id}`)
      .then(response => setReviews(response.data))
      .catch(error => setError(error));
  }, [id]);

  const handleReviewSubmitted = (newReview) => {
    setReviews(prevReviews => [...prevReviews, newReview]);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading book: {error.message}</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <h3>Genre: {book.genre}</h3>
      <img src={book.image} alt={book.title} style={{ maxWidth: '200px' }} />
      <h4>Reviews:</h4>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.comment} - {review.rating} stars</li>
        ))}
      </ul>
      <ReviewForm bookId={id} onReviewSubmitted={handleReviewSubmitted} />
    </div>
  );
};

export default BookDetails;
