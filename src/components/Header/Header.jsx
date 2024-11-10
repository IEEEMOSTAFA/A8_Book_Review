



// .......................................................................


// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {

//   const links = <>

//     <li><NavLink to="/">Home</NavLink></li>

//     {/* <li><NavLink to="/jobs">Jobs</NavLink></li> */}
//     <li><NavLink to="/applied">Listed Books</NavLink></li>
//     {/* <li><NavLink to="/statics">Statics</NavLink></li> */}
//     <li><NavLink to="/pagestoread">Pages to Read</NavLink></li>

//   </>


//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//             {links}

//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">Book Review</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           {links}
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <a href=""><button className="btn btn-success mr-3">Sign In</button></a>
//         <a href=""><button className="btn btn-warning bg-blue-400">Sign Up</button></a>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = (
    <>
      <li><NavLink to="/" className="text-lg">Home</NavLink></li>
      <li><NavLink to="/applied" className="text-lg">Listed Books</NavLink></li>
      <li><NavLink to="/pagestoread" className="text-lg">Pages to Read</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 lg:px-8 shadow-md">
      <div className="navbar-start">
        {/* Mobile Menu Toggle */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="Open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 bg-base-100 rounded-box shadow-lg p-2 z-[1]">
            {links}
          </ul>
        </div>
        {/* Brand Name */}
        <a className="btn btn-ghost normal-case text-2xl font-bold">Book Review</a>
      </div>
      {/* Center Navigation for Large Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          {links}
        </ul>
      </div>
      {/* Sign In/Sign Up Buttons */}
      <div className="navbar-end space-x-2">
        <a href="">
          <button className="btn btn-success">Sign In</button>
        </a>
        <a href="">
          <button className="btn btn-warning bg-blue-400">Sign Up</button>
        </a>
      </div>
    </div>
  );
};

export default Header;

