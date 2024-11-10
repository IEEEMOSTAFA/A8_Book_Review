// import React from 'react';

// import { Link } from 'react-router-dom';

// const Errorpage = () => {
//     return (
//         <div>
        
//             <Link  className="bg-red-500 rounded-lg" to="/">Go Back Home</Link>
//         </div>


//     );
// };

// export default Errorpage;

import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="text-center space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
                    Oops! Page Not Found
                </h1>
                <p className="text-md sm:text-lg md:text-xl text-gray-600">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 hover:bg-red-600 text-sm sm:text-base md:text-lg"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Errorpage;
