import React, { useEffect, useState } from 'react';
import BookType from '../BookType/BookType';

const FeaturedBook = () => {
    // const [jobs, setJobs] = useState([]);
    // // This is not best way to show all data
    // const [dataLength,setDataLength] = useState(4);
    const [books, setBooks] = useState([]);
    const [dataLength, setDataLength] = useState(4);



    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    })
    return (
        <div>
            <h2 className='font-bold'>Featured Books : {books.length}</h2>
            <BookType></BookType>
        </div>
    );
};

export default FeaturedBook;