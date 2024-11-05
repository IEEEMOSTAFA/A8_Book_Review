
// correction test:


// src/components/ListedBooks.js
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../Utility/localstorage';

const ListedBooks = () => {
    const books = useLoaderData();
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredJobApplication();
        const wishlist = books.filter((book) => storedBookIds.includes(book.bookId));
        setWishlistBooks(wishlist);
    }, [books]);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold text-center">Wishlist Books</h2>
            <ul>
                {wishlistBooks.map((book) => (
          <li key={book.bookId} className="p-2">
            
            
            {/* <span className="font-bold">{book.bookName}</span> by {book.author} - {book.yearOfPublishing} */}
            <div className="container mx-auto my-8 p-4 max-w-4xl">
      {/* Responsive Flex Container */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/3">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Side: Book Details */}
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">{book.bookName}</h1>
          <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
          <p className="text-gray-700 mb-2"><strong>Category:</strong> {book.category}</p>
          <p className="text-gray-700 mb-2 space-x-2"><strong>Tags:</strong> {book.tags.slice(0, 2).map((tag, index) => (
                <button key={index} className="btn btn-outline btn-success">
                  {tag}
                </button>
              ))}</p>
          <p className="text-gray-700 mb-2"><strong>Total Pages:</strong> {book.totalPages}</p>
          <p className="text-gray-700 mb-2"><strong>Publisher:</strong> {book.publisher}</p>
          <p className="text-gray-700 mb-2"><strong>Year:</strong> {book.yearOfPublication}</p>
          <p className="text-gray-700 mb-4"><strong>Rating:</strong> {book.rating}/5</p>

          {/* Book Details Button */}
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Details
          </button>
        </div>
      </div>
    </div>
            

                
          </li>
        ))}
        </ul>
    </div >
  );
};

export default ListedBooks;
