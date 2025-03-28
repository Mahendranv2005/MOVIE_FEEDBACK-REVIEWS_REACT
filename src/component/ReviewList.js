import React, { useState, useEffect } from 'react';

function ReviewList() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("reviews")) || [];
        setReviews(stored);
    }, []); // [] --> This is called a dependency array

    return (
        <div className='Review-List'>
            <h2>All Movie Reviews</h2>
            {
                reviews.length === 0 ? (
                    <p>No Reviews submitted yet</p>
                ) : (
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index} className="Review-Card">
                                <strong>{review.name}</strong> reviewed <em>{review.movie}</em>
                                <br />
                                Rating: {review.rating}/5
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}

export default ReviewList;
