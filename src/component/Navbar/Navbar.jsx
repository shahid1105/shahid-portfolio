import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="text-black  font-bold bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/home">Home</Link>
      </li>
      <li className="text-black  font-bold bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/about">About Me</Link>
      </li>
      <li className="text-black  font-bold bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/services">Services</Link>
      </li>
      <li className="text-black  font-bold bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/skills">Skills</Link>
      </li>
      <li className="text-black  font-bold bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="text-black  font-bold bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
        <Link to="/contact">Contact Me</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10  bg-opacity-60 max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost bg-white lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <Link
          to="/home"
          className="btn btn-ghost normal-case text-3xl md:text-4xl lg:text-4xl text-white font-bold ">
          <span className="bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text font-serif">
            {" "}
            Shahid Hasan
          </span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
