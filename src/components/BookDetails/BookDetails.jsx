


// import { useLoaderData, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { getStoredJobApplication, saveJobApplication } from '../Utility/localstorage';
// import { useEffect, useState } from 'react';

// const BookDetails = () => {
//   const books = useLoaderData();
//   const { bookId } = useParams();
//   const book = books.find((book) => book.bookId === bookId);
//   const [hasRead, setHasRead] = useState(false);
//   const [hasWishListed, setHasWishListed] = useState(false);

//   useEffect(() => {
//     const readBooks = getStoredJobApplication('readBooks') || [];
//     const wishListBooks = getStoredJobApplication('wishListBooks') || [];

//     setHasRead(readBooks.includes(bookId));
//     setHasWishListed(wishListBooks.includes(bookId));
//   }, [bookId]);

//   if (!book) {
//     return <p>Book not found.</p>;
//   }

//   const notifyRead = () => {
//     if (hasWishListed) {
//       toast("You have already added the book to the wishlist.");
//       return;
//     }
//     if (hasRead) {
//       toast("You have already marked this book as Read.");
//     } else {
//       toast("Wow! Welcome To Read Books");
//       saveJobApplication(bookId, 'readBooks');
//       setHasRead(true);
//     }
//   };

//   const notifyWishlist = () => {
//     if (hasRead) {
//       toast("You have already marked this book as Read.");
//       return;
//     }
//     if (hasWishListed) {
//       toast("You have already added this book to the wishlist.");
//     } else {
//       toast("Wow! Welcome To Wishlist");
//       saveJobApplication(bookId, 'wishListBooks');
//       setHasWishListed(true);
//     }
//   };

//   return (
//     <div className="container mx-auto my-8 p-4">
//       <div className="flex flex-col lg:flex-row items-start gap-8">
//         <div className="flex-shrink-0 w-full lg:w-1/3">
//           <img src={book.image} alt={book.bookName} className="rounded-lg w-full h-auto object-cover" />
//         </div>
//         <div className="w-full lg:w-2/3">
//           <h1 className="text-3xl font-bold mb-4">{book.bookName}</h1>
//           <p className="text-slate-600 text-lg mb-2 font-semibold">By: {book.author}</p>
//           <p className="text-slate-600 text-md mb-4 font-semibold">Category: {book.category}</p>
//           <p><span className="font-semibold">Review:</span> {book.review}</p>
//           <div className="flex mt-4">
//             <h3 className="font-bold mr-2">Tags:</h3>
//             <div className="flex space-x-2">
//               {book.tags.slice(0, 2).map((tag, index) => (
//                 <button key={index} className="btn btn-outline btn-success">
//                   {tag}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <p><span className="font-semibold">Total Pages:</span> {book.totalPages}</p>
//             <p><span className="font-semibold">Publisher:</span> {book.publisher}</p>
//             <p><span className="font-semibold">Year of Publishing:</span> {book.yearOfPublishing}</p>
//             <p><span className="font-semibold">Rating:</span> {book.rating}/5</p>
//           </div>
//           <div className="flex space-x-4">
//             <button onClick={notifyRead} className="btn btn-outline btn-warning">Read</button>
//             <button onClick={notifyWishlist} className="btn btn-outline btn-warning">Wishlist</button>
//           </div>
//           <ToastContainer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;


import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredJobApplication, saveJobApplication } from '../Utility/localstorage';
import { useEffect, useState } from 'react';

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find((book) => book.bookId === bookId);
  const [hasRead, setHasRead] = useState(false);
  const [hasWishListed, setHasWishListed] = useState(false);

  useEffect(() => {
    const readBooks = getStoredJobApplication('readBooks') || [];
    const wishListBooks = getStoredJobApplication('wishListBooks') || [];

    setHasRead(readBooks.includes(bookId));
    setHasWishListed(wishListBooks.includes(bookId));
  }, [bookId]);

  if (!book) {
    return <p>Book not found.</p>;
  }

  const notifyRead = () => {
    if (hasWishListed) {
      toast("You have already added the book to the wishlist.");
      return;
    }
    if (hasRead) {
      toast("You have already marked this book as Read.");
    } else {
      toast("Wow! Welcome To Read Books");
      saveJobApplication(bookId, 'readBooks');
      setHasRead(true);
    }
  };

  const notifyWishlist = () => {
    if (hasRead) {
      toast("You have already marked this book as Read.");
      return;
    }
    if (hasWishListed) {
      toast("You have already added this book to the wishlist.");
    } else {
      toast("Wow! Welcome To Wishlist");
      saveJobApplication(bookId, 'wishListBooks');
      setHasWishListed(true);
    }
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
        <div className="w-full md:w-1/3">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{book.bookName}</h1>
          <p className="text-slate-600 text-lg mb-2 font-semibold">By: {book.author}</p>
          <p className="text-slate-600 text-md mb-4 font-semibold">Category: {book.category}</p>
          <p><span className="font-semibold">Review:</span> {book.review}</p>
          
          <div className="flex mt-4">
            <h3 className="font-bold mr-2">Tags:</h3>
            <div className="flex space-x-2">
              {book.tags.slice(0, 2).map((tag, index) => (
                <button key={index} className="btn btn-outline btn-success">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-4">
            <p><span className="font-semibold">Total Pages:</span> {book.totalPages}</p>
            <p><span className="font-semibold">Publisher:</span> {book.publisher}</p>
            <p><span className="font-semibold">Year of Publishing:</span> {book.yearOfPublishing}</p>
            <p><span className="font-semibold">Rating:</span> {book.rating}/5</p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <button onClick={notifyRead} className="btn btn-outline btn-warning w-full sm:w-auto">Read</button>
            <button onClick={notifyWishlist} className="btn btn-outline btn-warning w-full sm:w-auto">Wishlist</button>
          </div>
          
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
