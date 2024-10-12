// import React from 'react';
import { MdStarOutline } from "react-icons/md";
const BookType = ({book}) => {
    const { bookId,bookName,job_title,company_name,remote_or_onsite,location,job_type,salary } = book;
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto md:w-96 lg:w-80 xl:w-96">
                <figure className="px-6 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10">
                    <img
                        src="https://i.ibb.co/RQjBsyG/Atomic-book.png"
                        alt="Book"
                        className="rounded-xl w-full"
                    />
                </figure>
                <div className="card-body px-4 py-4 sm:px-6 sm:py-6">
                    <div className="flex flex-wrap gap-4 mb-4 justify-center sm:justify-start">
                        <button className="btn btn-outline btn-success">Young Adult</button>
                        <button className="btn btn-outline btn-success">Identity</button>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg sm:text-xl">Book Name</h3>
                    </div>
                    <div>
                        <p className="text-slate-500 font-semibold">By: Writer Name</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between items-center">
                        <div><p>Fiction</p></div>
                        <div className="flex items-center">
                            <p className="mr-2">Rating:</p>
                            <MdStarOutline className="mt-1" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookType;