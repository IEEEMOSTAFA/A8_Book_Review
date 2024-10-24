import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localstorage";


const ListedBooks = ({ book }) => {

    // const jobs = useLoaderData();
    const books = useLoaderData();



    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);



    // const handleJobsFilter = filter =>{
    //     if(filter === 'all'){
    //         setDisplayJobs(appliedJobs);
    //     }
    //     else if (filter === 'remote'){
    //         const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
    //         setDisplayJobs(remoteJobs);
    //     }
    //     else if(filter === 'onsite'){
    //         const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
    //         setDisplayJobs(onsiteJobs);
            
    //     }
    // }
    
        useEffect(() => {
            const storedJobIds = getStoredJobApplication();
            
            if (books.length > 0) {
                // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
                // console.log(jobs,storedJobIds,jobsApplied) 
                const jobsApplied = [];
                for (const id of storedJobIds) {
                    const job = books.find(job => job.bookId === id);
                    if (job) {
                        jobsApplied.push(job)
                    }
                }
                // console.log(jobs, storedJobIds, jobsApplied)
                setAppliedJobs(jobsApplied);
                setDisplayJobs(jobsApplied);


            }
        }, [books])
    return (
        <div>
            {/* ist */}
            <div className="p-4">
                <div className="collapse bg-base-200">
                    <div className="collapse-title text-lg md:text-xl lg:text-2xl font-bold text-center">
                        Books
                    </div>
                    <div className="collapse-content">
                        <p className="text-sm md:text-base lg:text-lg">hello</p>
                    </div>
                </div>
            </div>

            {/* 2nd */}



            <div className="p-4">
                <div className="text-center">
                    <details className="dropdown">
                        <summary className="btn m-1 bg-green-500 text-sm md:text-base lg:text-lg">
                            Sort By
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow list-none">
                            <li className="p-1">Rating</li>
                            <li className="p-1">Number of pages</li>
                            <li className="p-1">Publisher year</li>

                        </ul>
                    </details>
                </div>
                <hr className="mt-4" />
            </div>

            {/* Third */}
            <div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                    <img className="w-full" src={image} alt={bookName} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{bookName}</div>
                        <p className="text-gray-700 text-base"><strong>Author:</strong> {author}</p>
                        <p className="text-gray-700 text-base"><strong>Category:</strong> {category}</p>
                        <p className="text-gray-700 text-base"><strong>Tags:</strong> {tags}</p>
                        <p className="text-gray-700 text-base"><strong>Total Pages:</strong> {totalPages}</p>
                        <p className="text-gray-700 text-base"><strong>Publisher:</strong> {publisher}</p>
                        <p className="text-gray-700 text-base"><strong>Year:</strong> {yearOfPublication}</p>
                        <p className="text-gray-700 text-base"><strong>Rating:</strong> {rating}/5</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Book Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;