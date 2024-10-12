import React from 'react';
import Banner from '../Banner/Banner';
import Book from '../Book/Book';
import FeaturedBook from '../FeaturedBook/FeaturedBook';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Book></Book>
            <FeaturedBook></FeaturedBook>
        </div>
    );
};

export default Home;