import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-blue-800 p-2 flex justify-between items-center">
        <div className="flex items-center">
            <Link to="/" className="text-white font-medium mr-4">
                Home
            </Link>
            <Link to="/about" className="text-white font-medium mr-4">
                About
            </Link>
            <Link to="/login" className="text-white font-medium">
                Login
            </Link>
        </div>
    </nav>
);

export default Navbar;