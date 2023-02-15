import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    const [navbar, setNavbar] = useState(false);
    return (
        <nav
            className="bg-white sticky top-0 p-2 flex justify-between space-x-8 uppercase shadow-xl title-primary w-full">
            <div className="flex float-left items-center">
                <Link to="/home" className="px-3 py-3 text-white ml-4">
                    <img alt="AEC-logo" src="/assets/images/AEC_Logo.png"
                         className="sm:w-14 xs:w-14 lg:w-24 xl:w-24 2xl:w-28 inline"/>
                </Link>
            </div>
            <div>
                <div
                    className="lg:hidden xl:hidden 2xl:hidden xs:flex xs:items-center sm:flex sm:items-center xs:justify-between sm:justify-between">
                    <button
                        className="p-3 xs:ml-36 sm:ml-80 md:ml-80 text-gray-800 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 lg:hidden xl:hidden 2xl:hidden justify-self-center pb-3 mt-4 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center space-y-8 space-x-0" style={{ marginLeft: '-50%' }}>
                        <li className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                            <a href="/home">Home</a>
                        </li>
                        <li className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                            <a href="/about">About</a>
                        </li>
                        <li className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                            <a href="/">Login</a>
                        </li>
                        <li className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                            <a href="/register">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="lg:flex xl:flex 2xl:flex lg:float-right xl:float-right 2xl:float-right lg:items-center xl:items-center 2xl:items-center md:hidden sm:hidden xs:hidden">
                <Link to="/home"
                      className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                    Home
                </Link>
                <Link to="/about"
                      className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                    About
                </Link>
                <Link to="/"
                      className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                    Login
                </Link>
                <Link to="/register"
                      className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                    Register
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;