import { FetchState } from "../../types";
import "../../App.css";
import React, {useEffect} from "react";
import HomeStyle from "../Home/home.module.css";
import {useGeTableData} from "../../lib/api-hooks";

function HomePageCards() {
  const [tableData, fetchState, getTableData] = useGeTableData();
    useEffect(() => {
        getTableData();
    }, [getTableData]);

  return (
      <div >

        {fetchState === FetchState.DEFAULT && (
            <>
              <p className="text-2xl font-normal mt-4 mb-4">
                Click the button below to get the list of posts from the API.
              </p>

            </>
        )}
        {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
        {fetchState === FetchState.ERROR && (
            <>
              <p>Oops! Something went wrong. Please try again.</p>
            </>
        )}
        {fetchState === FetchState.SUCCESS && (
            <>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {tableData.map((post:any) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="truncate mt-2 text-gray-700 max-h-full px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {post.title}
                        </th>
                        <td className={HomeStyle.truncateDescription}>
                          {post.description}
                        </td>
                        <td className="px-6 py-4">
                          {post.category}
                        </td>
                        <td className="px-6 py-4">
                          ${post.price}
                        </td>
                        <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                ))}
                  </tbody>
                </table>
              </div>
            </>
        )}
      </div>
  );
}

export default HomePageCards;
