import { useGetPosts } from '../../lib/api-hooks';
import { FetchState } from '../../types';
import '../../App.css';
import React from 'react';


function Home() {
    const [posts, fetchState, getPosts] = useGetPosts();
    const btnOnClick = () => getPosts();

    return (
        <div className="container">
            <h1 className="text-2xl font-bold">Rest Api Project Test</h1>

            {fetchState === FetchState.DEFAULT && (
                <>
                    <p className="text-2xl font-normal mt-4 mb-4">
                        Click the button below to get the list of posts from
                        the API.
                    </p>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={btnOnClick}>Get Data
                    </button>


                </>
            )}
            {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
            {fetchState === FetchState.ERROR && (
                <>
                    <p>Oops! Something went wrong. Please try again.</p>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={btnOnClick}>Get Posts</button>

                </>
            )}
            {fetchState === FetchState.SUCCESS && (
                <>
                    <p className="mb-4 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Posts:</p>
                    <ul className="posts-list">
                        {posts.map((post) => (
                            <li key={post.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4">
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {post.id} - {post.title}
                                </h3>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
                            </li>
                        ))}
                    </ul>

                </>
            )}
        </div>
    );
}

export default Home;
