import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-primary p-2 flex justify-between space-x-8 uppercase shadow-xl title-primary">
        <div className="flex float-left items-center">
            <Link to="/home" className="px-3 py-2 text-white">
                <img alt="AEC-logo" src="AEC_Logo.png" className="logo brightness-95 inline"/>
            </Link>
            <Link to="/home"
                  className="rounded-lg px-3 py-2 text-white hover:text-gray-800 font-medium mr-4 transition duration-500 ease-in-out">
                Home
            </Link>
            <Link to="/about"
                  className="rounded-lg px-3 py-2 text-white hover:text-gray-800 font-medium mr-4 transition duration-500 ease-in-out">
                About
            </Link>
        </div>
        <div className="flex float-right items-center">
            <Link to="/"
                  className="rounded-lg px-3 py-2 text-white hover:text-gray-800 font-medium mr-4 transition duration-500 ease-in-out">
                Login
            </Link>
            <Link to="/register"
                  className="rounded-lg px-3 py-2 text-white hover:text-gray-800 font-medium mr-4 transition duration-500 ease-in-out">
                Register
            </Link>
        </div>
    </nav>
);

export default Navbar;