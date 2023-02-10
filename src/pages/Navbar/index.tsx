import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-blue-800 p-2 flex justify-between items-center">
        <div className="flex items-center">
            <Link to="/home" className="text-white font-medium mr-4">
                Home
            </Link>
            <Link to="/about" className="text-white font-medium mr-4">
                About
            </Link>
            <Link to="/" className="text-white font-medium mr-4">
                Login
            </Link>
            <Link to="/register" className="text-white font-medium mr-4">
                Register
            </Link>
        </div>
    </nav>
);

export default Navbar;