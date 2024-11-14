import React from 'react';
import Banner from '../Banner/Banner';
import Book from '../Book/Book';
import FeaturedBook from '../FeaturedBook/FeaturedBook';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Book Review Customer</title>
            </Helmet>
            <Banner></Banner>
            <Book></Book>
            <FeaturedBook></FeaturedBook>
        </div>
    );
};

export default Home;