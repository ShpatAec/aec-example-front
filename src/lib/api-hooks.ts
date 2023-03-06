import axios from "axios";
import { useState } from "react";
import {FetchState, PostData, TableData} from "../types";

export function useGetPosts() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [posts, setPosts] = useState<Array<PostData>>([]);
  const getPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const resData = res.data as Array<PostData>;

      setPosts(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [posts, fetchState, getPosts, setPosts] as const;
}
export function useGeTableData() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [tableData, setTableData] = useState<Array<TableData>>([]);
  const getTableData = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const res = await axios.get("https://fakestoreapi.com/products");
      const resData = res.data as Array<TableData>;
      console.log(res,"res")

      setTableData(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [tableData, fetchState, getTableData, setTableData] as const;
}