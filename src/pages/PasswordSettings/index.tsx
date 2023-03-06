import React from "react";

const PasswordSettings = () => {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full card bg-white dark:bg-gray-800 text-blue-800 dark:text-white rounded-md shadow-xl lg:max-w-xl">
        <h4 className="text-2xl mb-6 text-center text-blue-800 dark:text-white uppercase">
          Password{" "}
        </h4>
        <h6>Please enter your current password to change your password.</h6>
        <form className="mt-6 text-gray-800 dark:text-white">
          <div className="mb-2">
            <label htmlFor={"password"} className="block text-sm font-semibold">
              Current Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor={"password"} className="block text-sm font-semibold">
              New Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor={"password"} className="block text-sm font-semibold">
              Confirm new password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button className="mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white dark:bg-gray-300 dark:text-black dark:hover:text-white dark:hover:bg-black dark:border-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Cancel
            </button>
            <button className=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-600 dark:bg-black dark:text-white dark:hover:text-black dark:hover:bg-white focus:outline-none focus:bg-blue-600">
              Update password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordSettings;
