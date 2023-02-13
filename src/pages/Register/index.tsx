import React from 'react';

function Register() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-800  uppercase">
                    Sign up
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor={"username"}
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-800  bg-white border rounded-md focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor={"email"}
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-blue-800  bg-white border rounded-md focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor={"password"}
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />

                        <div className="flex items-center mb-2 mt-6">
                            <input id="link-checkbox" type="checkbox" value=""
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="link-checkbox"
                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                                with the <a href="/#" className="text-blue-600 dark:text-blue-500 hover:underline">terms
                                    and conditions</a>.</label>
                        </div>

                    </div>

                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Create an Account
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="/#"
                        className="font-medium text-blue-800  hover:underline"
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;