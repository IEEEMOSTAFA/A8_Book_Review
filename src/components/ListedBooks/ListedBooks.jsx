

// import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { getStoredJobApplication } from '../Utility/localstorage';

// const ListedBooks = () => {
//   const books = useLoaderData();
//   const [wishlistBooks, setWishlistBooks] = useState([]);
//   const [readBooks, setReadBooks] = useState([]);
//   const [activeTab, setActiveTab] = useState("read"); // Tracks the active tab
//   const [sortOption, setSortOption] = useState(""); // Sort option for dropdown

//   useEffect(() => {
//     const readBookIds = getStoredJobApplication('readBooks');
//     const wishListBookIds = getStoredJobApplication('wishListBooks');

//     setReadBooks(books.filter((book) => readBookIds.includes(book.bookId)));
//     setWishlistBooks(books.filter((book) => wishListBookIds.includes(book.bookId)));
//   }, [books]);

//   const handleTabChange = (tab) => setActiveTab(tab);

//   const handleSortChange = (event) => {
//     const option = event.target.value;
//     setSortOption(option);

//     const sortBooks = (a, b) => {
//       if (option === "rating") return b.rating - a.rating;
//       if (option === "pages") return b.totalPages - a.totalPages;
//       if (option === "year") return b.yearOfPublishing - a.yearOfPublishing;
//       return 0;
//     };

//     activeTab === "read"
//       ? setReadBooks([...readBooks].sort(sortBooks))
//       : setWishlistBooks([...wishlistBooks].sort(sortBooks));
//   };

//   const displayedBooks = activeTab === "read" ? readBooks : wishlistBooks;

//   return (
//     <div className="container mx-auto my-8 p-4">
//       {/* Header */}
//       <header className="text-center mb-6">
//         <h1 className="text-4xl font-bold">My Book Collection</h1>
//       </header>

//       {/* Dropdown for sorting */}
//       <div className="mb-4 flex justify-end">
//         <label className="mr-2">Sort by:</label>
//         <select onChange={handleSortChange} value={sortOption} className="select select-bordered">
//           <option value="">Select...</option>
//           <option value="rating">Rating</option>
//           <option value="pages">Number of Pages</option>
//           <option value="year">Published Year</option>
//         </select>
//       </div>

//       {/* Tabs for Read and Wishlist Books */}
//       <div className="mb-4">
//         <button
//           onClick={() => handleTabChange("read")}
//           className={`btn ${activeTab === "read" ? "btn-primary" : "btn-outline"} mr-2`}
//         >
//           Read Books
//         </button>
//         <button
//           onClick={() => handleTabChange("wishlist")}
//           className={`btn ${activeTab === "wishlist" ? "btn-primary" : "btn-outline"}`}
//         >
//           Wishlist Books
//         </button>
//       </div>

//       {/* Book List */}
//       <ul>
//         {displayedBooks.map((book) => (
//           <li key={book.bookId} className="p-2">
//             <div className="container mx-auto my-8 p-4 max-w-4xl">
//               <div className="flex flex-col md:flex-row items-start gap-6">
//                 <div className="w-full md:w-1/3">
//                   <img
//                     src={book.image}
//                     alt={book.bookName}
//                     className="rounded-lg w-full h-auto object-cover"
//                   />
//                 </div>
//                 <div className="w-full md:w-2/3">
//                   <h1 className="text-2xl font-bold mb-2">{book.bookName}</h1>
//                   <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
//                   <p className="text-gray-700 mb-2"><strong>Category:</strong> {book.category}</p>
//                   <p className="text-gray-700 mb-2 space-x-2">
//                     <strong>Tags:</strong> {book.tags.slice(0, 2).map((tag, index) => (
//                       <button key={index} className="btn btn-outline btn-success">
//                         {tag}
//                       </button>
//                     ))}
//                   </p>
//                   <p className="text-gray-700 mb-2"><strong>Total Pages:</strong> {book.totalPages}</p>
//                   <p className="text-gray-700 mb-2"><strong>Publisher:</strong> {book.publisher}</p>
//                   <p className="text-gray-700 mb-2"><strong>Year:</strong> {book.yearOfPublishing}</p>
//                   <p className="text-gray-700 mb-4"><strong>Rating:</strong> {book.rating}/5</p>
//                   <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Book Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListedBooks;

import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../Utility/localstorage';

const ListedBooks = () => {
  const books = useLoaderData();
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read"); // Tracks the active tab
  const [sortOption, setSortOption] = useState(""); // Sort option for dropdown

  useEffect(() => {
    const readBookIds = getStoredJobApplication('readBooks');
    const wishListBookIds = getStoredJobApplication('wishListBooks');

    setReadBooks(books.filter((book) => readBookIds.includes(book.bookId)));
    setWishlistBooks(books.filter((book) => wishListBookIds.includes(book.bookId)));
  }, [books]);

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleSortChange = (event) => {
    const option = event.target.value;
    setSortOption(option);

    const sortBooks = (a, b) => {
      if (option === "rating") return b.rating - a.rating;
      if (option === "pages") return b.totalPages - a.totalPages;
      if (option === "year") return b.yearOfPublishing - a.yearOfPublishing;
      return 0;
    };

    activeTab === "read"
      ? setReadBooks([...readBooks].sort(sortBooks))
      : setWishlistBooks([...wishlistBooks].sort(sortBooks));
  };

  const displayedBooks = activeTab === "read" ? readBooks : wishlistBooks;

  return (
    <div className="container mx-auto my-8 p-4">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">My Book Collection</h1>
      </header>

      {/* Dropdown for sorting */}
      <div className="mb-4 flex justify-end">
        <label className="mr-2">Sort by:</label>
        <select onChange={handleSortChange} value={sortOption} className="select select-bordered">
          <option value="">Select...</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>

      {/* Tabs for Read and Wishlist Books */}
      <div className="mb-4 flex justify-center sm:justify-start gap-2">
        <button
          onClick={() => handleTabChange("read")}
          className={`btn ${activeTab === "read" ? "btn-primary" : "btn-outline"} mr-2`}
        >
          Read Books
        </button>
        <button
          onClick={() => handleTabChange("wishlist")}
          className={`btn ${activeTab === "wishlist" ? "btn-primary" : "btn-outline"}`}
        >
          Wishlist Books
        </button>
      </div>

      {/* Book List */}
      <ul>
        {displayedBooks.map((book) => (
          <li key={book.bookId} className="p-2">
            <div className="container mx-auto p-4 max-w-4xl">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-full md:w-1/3">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h1 className="text-xl sm:text-2xl font-bold mb-2">{book.bookName}</h1>
                  <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
                  <p className="text-gray-700 mb-2"><strong>Category:</strong> {book.category}</p>
                  <p className="text-gray-700 mb-2 space-x-2">
                    <strong>Tags:</strong> {book.tags.slice(0, 2).map((tag, index) => (
                      <button key={index} className="btn btn-outline btn-success btn-xs">
                        {tag}
                      </button>
                    ))}
                  </p>
                  <p className="text-gray-700 mb-2"><strong>Total Pages:</strong> {book.totalPages}</p>
                  <p className="text-gray-700 mb-2"><strong>Publisher:</strong> {book.publisher}</p>
                  <p className="text-gray-700 mb-2"><strong>Year:</strong> {book.yearOfPublishing}</p>
                  <p className="text-gray-700 mb-4"><strong>Rating:</strong> {book.rating}/5</p>
                  <button className="mt-4 btn btn-primary">Book Details</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListedBooks;
