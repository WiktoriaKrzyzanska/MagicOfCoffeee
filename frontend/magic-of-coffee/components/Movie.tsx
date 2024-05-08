import React from 'react';
import './Movie.css';

const Movie = () => {
    return (
        <div className='video-container'>
            <div className="overlay"></div>
            <video src="/promo.mp4" controls autoPlay loop muted>
                Your browser does not support the video tag.
            </video>
            <div className="video-content">
                <h1>Welcome</h1>
                <p>Let your magical journey to the world of coffee begin</p>
                <button className="button" id="buy-button">Buy</button>
                <button className="button" id="about-us-button">About Us</button>
            </div>
        </div>
    )
};

export default Movie;
