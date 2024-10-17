import PropTypes from 'prop-types';
import { MdStarOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const BookType = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags } = book;

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto md:w-96 lg:w-80 xl:w-96">
                


                <Link to={`/book/${bookId}`}>
                    <figure className="px-6 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10 cursor-pointer">
                        <img
                            src={image}
                            alt={bookName}
                            className="rounded-xl w-full h-64 object-cover"
                        />
                    </figure>
                    </Link>
              

                <div className="card-body px-4 py-4 sm:px-6 sm:py-6">
                    
                        <div className="flex flex-wrap gap-4 mb-4 justify-center sm:justify-start">
                            {tags?.map(tag => <button key={tag} className="btn btn-outline btn-success">{tag}</button>)}
                        </div>
                   
                    <h3 className="font-bold text-lg sm:text-xl">{bookName}</h3>
                    <p className="text-slate-500 font-semibold">By: {author}</p>
                    <hr className="my-4" />
                    <div className="flex justify-between items-center">
                        <p>{category}</p>
                        <div className="flex items-center">
                            <p className="mr-2">Rating: {rating}</p>
                            <MdStarOutline className="mt-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Prop validation using PropTypes
BookType.propTypes = {
    book: PropTypes.shape({
        bookId: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        review: PropTypes.string,
        totalPages: PropTypes.number,
        rating: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired
};

export default BookType;
