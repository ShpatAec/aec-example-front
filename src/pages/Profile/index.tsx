import React from "react";
import { getCurrentUser } from "../../services/auth.service";

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full card bg-white dark:bg-gray-800 text-blue-800 dark:text-white rounded-md shadow-xl lg:max-w-xl">
        <h4 className="text-2xl mb-6 text-center text-blue-800 dark:text-white uppercase">
          PROFILE SETTINGS
        </h4>
        <div className="flex flex-col items-center pt-5 pb-5">
          <svg
            className="w-24 h-24 p-3 mb-3 rounded-full shadow-lg text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <form className="w-full text-gray-500 dark:text-white ">
            <div className="flex">
              <div className="w-1/4 flex flex-col justify-between ml-8">
                <label
                  htmlFor={"email"}
                  className="block text-base mt-3 font-semibold"
                >
                  Email:
                </label>
                <label
                  htmlFor={"role"}
                  className="block text-base mt-3 font-semibold"
                >
                  Role:
                </label>
                <label
                  htmlFor={"token"}
                  className="block text-base font-semibold mt-3"
                >
                  Token:
                </label>
                <label
                  htmlFor={"id"}
                  className="block text-base font-semibold mt-3"
                >
                  ID:
                </label>
              </div>
              <div className="w-3/4 self-end text-blue-800 dark:text-gray-400 flex flex-col justify-between">
                <p className="mt-3">{currentUser.email}</p>
                <p className="mt-3">
                  <ul>
                    {currentUser.roles &&
                      currentUser.roles.map((role: string, index: number) => (
                        <li key={index} className="list-disc">
                          {role}
                        </li>
                      ))}
                  </ul>
                </p>
                <p className="mt-3">
                  {" "}
                  {currentUser.token.substring(0, 20)} ...{" "}
                  {currentUser.token.substr(currentUser.token.length - 20)}
                </p>
                <p className="mt-3"> {currentUser.id}</p>
              </div>
            </div>
            <div className="mt-10 flex justify-end">
              <button className="mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white dark:bg-gray-300 dark:text-black dark:hover:text-white dark:hover:bg-black py-2 px-4 border border-blue-500 dark:border-black hover:border-transparent rounded">
                Cancel
              </button>
              <button className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-600 dark:bg-black dark:text-white dark:hover:text-black dark:hover:bg-white focus:outline-none focus:bg-blue-600">
                Update profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
