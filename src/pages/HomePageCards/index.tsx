import { useGetPosts } from "../../lib/api-hooks";
import { FetchState } from "../../types";
import "../../App.css";
import React, {useEffect, useState} from "react";
import HomeStyle from "../Home/home.module.css";
import axios from "axios";

function HomePageCards() {
  const [posts, fetchState, getPosts, setPosts] = useGetPosts();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(0);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  const deletePost = () => {
    const headers = { foo: "bar" };
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
        headers,
      })
      .then(() => {
        const newPostsList = posts.filter((post) => post.id !== postIdToDelete);
        setPosts(newPostsList);
      })
      .catch((error) => {
        console.log("error deleting post", error);
      });
    setShowDeleteModal(false);
  };
  const handleDeleteButtonClick = (id: number) => {
    setPostIdToDelete(id);
    setShowDeleteModal(true);
  };
  return (
    <div className={HomeStyle.container}>
      <h1 className="text-2xl font-bold dark:text-gray-500 uppercase mb-2">
        Rest Api Project Test
      </h1>
      {fetchState === FetchState.DEFAULT && (
        <>
          <p className="text-2xl font-normal mt-4 mb-4">
            Click the button below to get the list of posts from the API.
          </p>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Data
          </button>
        </>
      )}
      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && (
        <>
          <p>Oops! Something went wrong. Please try again.</p>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Posts
          </button>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <div className="grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="rounded-lg shadow-lg bg-white p-5 mb-2 bg-white border border-r border-b border-l border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4"
              >
                <a href="/#">
                  <h5 className="mb-2 truncate text-2xl font-bold tracking-tight text-gray-900 ">
                    {post.title}
                  </h5>
                </a>
                <p className={HomeStyle.truncateText}>{post.body}</p>
                <div className="d flex">
                  <a
                    href="/#"
                    className="w-30 inline-flex items-center px-3 py-2 font-medium text-xs text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <button
                    onClick={() => handleDeleteButtonClick(post.id)}
                    className="ml-3 items-center flex text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          {showDeleteModal && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-10">
              <div className="bg-white p-5 rounded-lg shadow-xl">
                <h2 className="text-lg font-medium mb-4">
                  Are you sure you want to delete this post?
                </h2>
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={deletePost}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default HomePageCards;
