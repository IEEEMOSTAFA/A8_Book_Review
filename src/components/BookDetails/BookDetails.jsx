

import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../Utility/localstorage';
const BookDetails = () => {
  const notify = () =>{
    toast("Wow! Welcome To Read Books");
    saveJobApplication(idInt);
    
  } 
  const snotify = () =>{
    toast("Wow! Welcome To Wishlist");
    
  } 
  const books = useLoaderData();  // This should contain the list of books from the loader
  const { bookId } = useParams();  // Get the bookId from the URL params[]
  const idInt = parseInt(bookId);

  const book = books.find(book => book.bookId === bookId);  // Find the book by comparing the ID directly

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img src={book?.image} alt={book?.bookName} className="rounded-lg w-full h-auto object-cover" />
        </div>

        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{book?.bookName}</h1>
          <p className="text-slate-600 text-lg mb-2 font-semibold">By: {book?.author}</p>
          <p className="text-slate-600 text-md mb-4 font-semibold">Category: {book?.category}</p>
          <p><span className="font-semibold font-semibold">Review: </span>{book?.review}</p>
          <div className="flex mt-4">
          <h3 className="font-bold mr-2">Tags:</h3>
          <div className="flex space-x-2">
            {book?.tags.slice(0, 2).map((tag, index) => (
              <button key={index} className="btn btn-outline btn-success">
                {tag}
              </button>
            ))}
          </div>
        </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <p><span className="font-semibold">Total Pages:</span> {book?.totalPages}</p>
            <p><span className="font-semibold">Publisher:</span> {book?.publisher}</p>
            <p><span className="font-semibold">Year of Publishing:</span> {book?.yearOfPublishing}</p>
            <p><span className="font-semibold">Rating:</span> {book?.rating}/5</p>
          </div>

          {/* last two button */}
        <div className='flex mr-5 space-x-4'>
        <button onClick={notify} className="btn btn-outline btn-warning">Read</button>
        <ToastContainer />
        <button  onClick={snotify} className="btn btn-outline btn-warning">Wishlist</button>
        <ToastContainer />

        </div>
        </div>
       
      </div>
    </div>
  );
};


export default BookDetails;
