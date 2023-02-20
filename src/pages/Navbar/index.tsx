import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    const [navbar, setNavbar] = useState(false);
    return (
        <nav
            className="bg-white sticky top-0 p-2 flex justify-between uppercase shadow-xl title-primary w-full grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2">
            <div className="sm:hidden xs:hidden lg:flex xl:flex 2xl:flex float-left items-center lg:col-start-1 lg:col-end-2 xl:col-start-1 xl:col-end-2">
                <Link to="/home" className="px-3 py-3 text-white ml-4">
                    <img alt="AEC-logo" src="/assets/images/AEC_Logo.png"
                         className="sm:hidden xs:hidden lg:w-20 xl:w-24 2xl:w-24 lg:inline xl:inline 2xl:inline"/>
                </Link>
            </div>
            <div
                className="lg:col-start-2 lg:col-end-3 xl:col-start-3 xl:col-end-4 2xl:col-start-3 2xl:col-end-4 lg:flex xl:flex 2xl:flex float-right items-center md:hidden sm:hidden xs:hidden">
                <Link to="/home"
                      className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                    Home
                </Link>
                <Link to="/accountSettings"
                      className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                    Settings
                </Link>
                <Link to={"/"}
                      className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                    Login
                </Link>
                <Link to={"/register"}
                      className="rounded-lg px-3 py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                    Register
                </Link>
            </div>
            {!navbar && (
                <div
                    className="lg:hidden xl:hidden 2xl:hidden sm:inline xs:inline sm:flex xs:flex md:flex items-center sm:col-start-1 sm:col-end-2 xs:col-start-1 xs:col-end-2 md:col-start-1 md:col-end-2">
                    <Link to="/home" className="px-3 py-3 text-white ml-6">
                        <img alt="AEC-logo" src="/assets/images/AEC_Logo.png"
                             className="sm:inline xs:inline sm:w-18 xs:w-16 lg:hidden xl:hidden 2xl:hidden"/>
                    </Link>
                </div>
            )
            }
            <div
                className={`flex-1 lg:hidden xl:hidden 2xl:hidden justify-center sm:col-start-1 sm:col-end-2 xs:col-start-1 xs:col-end-2 md:col-start-1 md:col-end-2 ml-6 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-4 my-2">
                    <li className="rounded-lg py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                        <a href="/home">Home</a>
                    </li>
                    <li className="rounded-lg py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                        <a href="/accountSettings">Settings</a>
                    </li>
                    <li className="rounded-lg py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                        <a href="/">Login</a>
                    </li>
                    <li className="rounded-lg py-2 text-black hover:text-red-500 font-medium mr-4 transition duration-500 ease-in-out">
                        <a href="/register">Register</a>
                    </li>
                </ul>
            </div>
            <div
                className="lg:hidden xl:hidden 2xl:hidden items-center sm:ml-16 xs:ml-16 md:ml-48 sm:col-start-2 sm:col-end-3 xs:col-start-2 xs:col-end-3 md:col-start-2 md:col-end-3">
                <button
                    className="p-3 text-gray-800 rounded-md outline-none focus:border-gray-400 focus:border"
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
        </nav>
    );
}

export default Navbar;