import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import faker from "faker";
import { FetchState } from "./types";
import * as apiHooks from "./lib/api-hooks";
import Home from "../src/pages/Home";
describe("<Home />", () => {
  const renderComponent = () => render(<Home />);
  const defaultText =
    "Hello there, click the button below to get the list of posts from the API.";
  const loadingText = "Fetching posts...";
  const errorText = "Oops! Something went wrong. Please try again.";
  const successText = "Here's the list of posts:";
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should render default state", () => {
    renderComponent();
    const stateEl = screen.queryByText(defaultText);
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(stateEl).toBeInTheDocument());
  });
  it("should render loading state on loading", () => {
    const fetchState = FetchState.LOADING;
    jest
      .spyOn(apiHooks, "useGetPosts")
      .mockReturnValue([[], fetchState, jest.fn(), jest.fn()]);
    renderComponent();
    const stateEl = screen.queryAllByText(loadingText);
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(stateEl).toBeInTheDocument());
  });
  it("should render error state on error", () => {
    const fetchState = FetchState.ERROR;
    jest
      .spyOn(apiHooks, "useGetPosts")
      .mockReturnValue([[], fetchState, jest.fn(), jest.fn()]);
    renderComponent();
    const stateEl = screen.queryByText(errorText);
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(stateEl).toBeInTheDocument());
  });
  it("should render success state on success", () => {
    const fetchState = FetchState.SUCCESS;
    const posts = [
      {
        userId: faker.datatype.number(),
        id: faker.datatype.number(),
        title: faker.lorem.sentence(),
        body: faker.lorem.sentences(),
      },
    ];
    jest
      .spyOn(apiHooks, "useGetPosts")
      .mockReturnValue([posts, fetchState, jest.fn(), jest.fn()]);
    renderComponent();
    const stateEl = screen.queryByText(successText);
    const post = posts[0];
    const postTitle = "${post.id} - ${post.title}";
    const postEl = screen.queryByText(postTitle);
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(stateEl).toBeInTheDocument());
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(postEl).toBeInTheDocument());
  });
  it("should call API on button click", () => {
    const getPostsMock = jest.fn();
    const setPostsMock = jest.fn();
    jest
      .spyOn(apiHooks, "useGetPosts")
      .mockReturnValue([[], FetchState.DEFAULT, getPostsMock, setPostsMock]);
    renderComponent();
    const btnEl = screen
      .getAllByText("Get Data")
      .find((el) => el.tagName === "BUTTON") as HTMLButtonElement;
    fireEvent.click(btnEl);
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(getPostsMock).toBeCalledTimes(1));
  });
});
