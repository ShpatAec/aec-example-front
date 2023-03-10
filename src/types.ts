export enum FetchState {
  DEFAULT = "DEFAULT",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TableData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;

};

export interface routerType {
  title: string;
  path: string;
  element: JSX.Element;
}