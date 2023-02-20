import React from 'react';

const Profile = () => {
    return (
        <div className="mt-6 relative flex flex-col justify-center  overflow-hidden">
            <div className="w-full  bg-white rounded-md shadow-xl lg:max-w-xl">
                <h4 className="text-2xl mb-6  text-center text-blue-800  uppercase">
                    PROFILE SETTINGS </h4>
                <div className="flex flex-col items-center pt-5 pb-5">
                    <svg className="w-24 h-24 p-3 mb-3 rounded-full shadow-lg text-gray-400 " fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"></path>
                    </svg>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">JohnAEC</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Mechanic</span></div>
                <form className="mt-6">
                    <div className="mb-2">
                        <label htmlFor="username"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                            Username</label>
                        <input type="text" id="username"
                               className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                               placeholder="JohnAEC" required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="first_name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                            First name</label>
                        <input type="text" id="first_name"
                               className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                               placeholder="John" required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="last_name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last
                            name</label>
                        <input type="text" id="last_name"
                               className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                               placeholder="Doe" required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone
                            number</label>
                        <input type="tel" id="phone"
                               className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                               placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email
                            address</label>
                        <input type="email" id="email"
                               className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                               placeholder="john.doe@company.com" required/>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            className="mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Cancel
                        </button>
                        <button
                            className=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Update profile
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Profile;