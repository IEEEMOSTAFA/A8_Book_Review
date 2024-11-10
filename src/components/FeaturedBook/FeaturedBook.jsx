// import React, { useEffect, useState } from 'react';
// import BookType from '../BookType/BookType';
// // import { BiBookmark } from 'react-icons/bi';

// const FeaturedBook = () => {
    
//     const [books, setBooks] = useState([]);
//     const [dataLength, setDataLength] = useState(6);



//     useEffect(() => {
//         fetch('books.json')
//             .then(res => res.json())
//             .then(data => setBooks(data));
//     })
//     return (
//         <div>
            

//             <div className='grid grid-cols-3 gap-6'>
//                 {
                    

//                     books.slice(0, dataLength).map((book) => (
//                         <BookType key={book.bookId} book={book} />
//                       ))
                      
//                 }
//             </div>


//         </div>
//     );
// };

// export default FeaturedBook;


import React, { useEffect, useState } from 'react';
import BookType from '../BookType/BookType';

const FeaturedBook = () => {
    const [books, setBooks] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Featured Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.slice(0, dataLength).map((book) => (
                    <BookType key={book.bookId} book={book} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedBook;
