import React, { useEffect, useState } from 'react';
import BookType from '../BookType/BookType';
// import { BiBookmark } from 'react-icons/bi';

const FeaturedBook = () => {
    // const [jobs, setJobs] = useState([]);
    // // This is not best way to show all data
    // const [dataLength,setDataLength] = useState(4);
    const [books, setBooks] = useState([]);
    const [dataLength, setDataLength] = useState(6);



    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    })
    return (
        <div>
            {/* <h2 className='font-bold'>Featured Books : {books.length}</h2> */}

            <div className='grid grid-cols-3 gap-6'>
                {
                    // books.slice(0, dataLength).map((book, index) => (
                    //     <BookType key={index} book={book} />
                    // ))

                    books.slice(0, dataLength).map((book) => (
                        <BookType key={book.bookId} book={book} />
                      ))
                      
                }
            </div>


        </div>
    );
};

export default FeaturedBook;