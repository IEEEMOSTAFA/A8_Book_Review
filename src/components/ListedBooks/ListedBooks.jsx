

const ListedBooks = () => {
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
                            {/* Uncomment and use these if needed
        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
        <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
        */}
                        </ul>
                    </details>
                </div>
                <hr className="mt-4" />
            </div>

            {/* Third */}
            <div></div>
        </div>
    );
};

export default ListedBooks;