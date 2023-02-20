import {useGetPosts} from '../../lib/api-hooks';
import {FetchState} from '../../types';
import '../../App.css';
import React from 'react';
import HomeStyle from './home.module.css';
import HomeTabs from "../HomeTabs";

function Home() {
    const [posts, fetchState, getPosts] = useGetPosts();
    const btnOnClick = () => getPosts();

    return (
        <div>
            <HomeTabs/>
        </div>

    );
}

export default Home;