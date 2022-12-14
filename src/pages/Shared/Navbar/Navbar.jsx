import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const notify = () => toast("Logout Successfully");
  const handleLogout = () => {
    logOut()
      .then(() => {
        notify();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navlinks = (
    <>
      <li>
        <Link className="uppercase hover:text-red-500" to="/">Home</Link>
      </li>
      <li>
        <Link className="uppercase hover:text-red-500" to='/blog'>Blogs</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link className="uppercase hover:text-red-500" to='/myreviews'>My Reviews</Link>
          </li>
          <li>
            <Link className="uppercase hover:text-red-500" to='/addtoservice'>AddToService</Link>
          </li>
          <li>
            <Link className="uppercase hover:text-red-500" onClick={handleLogout}>Logout</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="uppercase" to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar py-5 bg-[#0D0D0D] text-[#CAD5E2]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#0D0D0D] rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <span className="btn btn-ghost md:text-xl uppercase">
          Wedding Family BD
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <small>{user?.displayName}</small>
      </div>
    </div>
  );
};

export default Navbar;
