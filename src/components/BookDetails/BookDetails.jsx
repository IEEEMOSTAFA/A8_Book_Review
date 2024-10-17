// import { useLoaderData, useParams } from 'react-router-dom';

// const BookDetails = () => {
//   const books = useLoaderData();
//   const { bookId } = useParams();
//   const idInt = parseInt(bookId);
//   const book = books.find(book => book.bookId === idInt);
//   console.log(book);
//   // const book = useLoaderData(); // The loader now returns the specific bo

//   if (!book) {
//     return <p>Book not found.</p>;
//   }

//   // const { bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing } = book;

//   return (
//     <div className="container mx-auto my-8 p-4">
//       <div className="flex flex-col lg:flex-row items-start gap-8">
//         <div className="flex-shrink-0 w-full lg:w-1/3">
//           <img src={book?.image} alt={book?.bookName} className="rounded-lg w-full h-auto object-cover" />
//         </div>

//         <div className="w-full lg:w-2/3">
//           <h1 className="text-3xl font-bold mb-4">Poet::{book?.job_title}</h1>
//           <p className="text-slate-600 text-lg mb-2">By: {book?.author}</p>
//           <p className="text-slate-600 text-md mb-4">Category: {book?.category}</p>
//           <p><span className="font-semibold">Review: </span>{book?.review}</p>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <p><span className="font-semibold">Total Pages:</span> {book?.totalPages}</p>
//             <p><span className="font-semibold">Publisher:</span> {book?.publisher}</p>
//             <p><span className="font-semibold">Year of Publishing:</span> {book?.yearOfPublishing}</p>
//             <p><span className="font-semibold">Rating:</span> {book?.rating}/5</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;









import { useLoaderData, useParams } from 'react-router-dom';
const BookDetails = () => {
  const books = useLoaderData();  // This should contain the list of books from the loader
  const { bookId } = useParams();  // Get the bookId from the URL params

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
          <p className="text-slate-600 text-lg mb-2">By: {book?.author}</p>
          <p className="text-slate-600 text-md mb-4">Category: {book?.category}</p>
          <p><span className="font-semibold">Review: </span>{book?.review}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <p><span className="font-semibold">Total Pages:</span> {book?.totalPages}</p>
            <p><span className="font-semibold">Publisher:</span> {book?.publisher}</p>
            <p><span className="font-semibold">Year of Publishing:</span> {book?.yearOfPublishing}</p>
            <p><span className="font-semibold">Rating:</span> {book?.rating}/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BookDetails;
