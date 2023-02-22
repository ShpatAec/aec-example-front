import {useGetPosts} from '../../lib/api-hooks';
import {FetchState} from '../../types';
import '../../App.css';
import React from 'react';
import HomeStyle from '../Home/home.module.css'
import axios from "axios";

function HomePageCards() {
    const [posts, fetchState, getPosts, setPosts] = useGetPosts();
    const btnOnClick = () => getPosts();

    const deleteHandler = (id: any) => {
        const headers = {foo: "bar"}
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {headers})
            .then(response => {
                const newPostsList = posts.filter((post) => post.id !== id);
                setPosts(newPostsList);
            })
            .catch(error => {
                console.log("error deleting post", error)
            })
    }
    return (
        <div className={HomeStyle.container}>
            <h1 className="text-2xl font-bold dark:text-gray-500 uppercase mb-2">Rest Api Project
                Test</h1>

            {fetchState === FetchState.DEFAULT && (
                <>
                    <p className="text-2xl font-normal mt-4 mb-4">
                        Click the button below to get the list of posts from
                        the API.
                    </p>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={btnOnClick}>Get Data
                    </button>
                </>
            )}
            {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
            {fetchState === FetchState.ERROR && (
                <>
                    <p>Oops! Something went wrong. Please try again.</p>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={btnOnClick}>Get Posts
                    </button>
                </>
            )}
            {fetchState === FetchState.SUCCESS && (
                <>
                    <div
                        className="grid grid-flow-row gap-4  text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
                        {posts.map((post) => (
                            <div key={post.id}
                                 className=" rounded-lg shadow-lg bg-white p-5 mb-2 bg-white border border-r border-b border-l border-gray-200  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 ">
                                <a href="/#">
                                    <h5 className="mb-2 truncate text-2xl font-bold tracking-tight text-gray-900 ">  {post.title}</h5>
                                </a>
                                <p className={HomeStyle.truncateText}>{post.body}</p>
                                <div className="d flex">
                                    <a href="/#"
                                       className="w-30 inline-flex items-center px-3 py-2 font-medium text-xs text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                    <button
                                        onClick={() => deleteHandler(post.id)}
                                        className="ml-3 items-center flex text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>

    );
}

export default HomePageCards;