

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a><button className="btn btn-outline btn-primary">Home</button></a></li>
              <li>
                <a className="font-bold text-slate-500">Listed Books</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a className="font-bold text-slate-500">Pages to Read</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">Book Review</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li><a><button className="btn btn-outline btn-primary">Home</button></a></li> */}
            <li><a><button className="btn btn-outline btn-secondary">Home</button></a></li>
            <li>
              <details>
                <summary className="font-bold text-slate-500">Listed Books</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a className="font-bold text-slate-500">Pages to Read</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a>
    <a className="btn">Button</a> */}
          <a href=""><button className="btn btn-success mr-3">Sign In</button></a>
          <a href=""><button className="btn btn-warning bg-blue-400">Sign Up</button></a>


        </div>
      </div>

    </div>
  );
};

export default Header;