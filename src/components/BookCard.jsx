import React from 'react';
import './BookCard.css';

const BookCard = ({ title, author, image, onClick }) => {
    return (
        <div className="book-card" onClick={onClick}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
    );
};

export default BookCard;