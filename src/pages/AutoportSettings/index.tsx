import "../../App.css";
import React from "react";
function AutoportSettings() {

    return (
        <div className="relative flex flex-col justify-center  overflow-hidden">
            <div className="w-full card bg-white rounded-md shadow-xl lg:max-w-xl">
                <h4 className="text-2xl mb-6  text-center text-blue-800  uppercase">
                    Autoport Settings
                </h4>
                <h3 className="mb-4  text-blue-800">Please select one of these options  </h3>
                <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="vue-checkbox" type="checkbox" value=""
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="vue-checkbox"
                                   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Re open last closed tab.</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="react-checkbox" type="checkbox" value=""
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="react-checkbox"
                                   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Multiple stock number filter.</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center pl-3">
                            <input id="angular-checkbox" type="checkbox" value=""
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="angular-checkbox"
                                   className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Internal notification system</label>
                        </div>
                    </li>
                </ul>
                <button
                    className="mt-6 flex float-right px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Save changes
                </button>
            </div>
        </div>
    );
}

export default AutoportSettings;
