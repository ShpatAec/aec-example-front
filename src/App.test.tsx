import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import faker from 'faker';
import { FetchState } from './types';
import * as apiHooks from './lib/api-hooks';
import App from './App';


describe('<App />', () => {
  const renderComponent = () => render(<App />);
  const defaultText =
      'Hello there, click the button below to get the list of posts from the API.';
  const loadingText = 'Fetching posts...';
  const errorText = 'Oops! Something went wrong. Please try again.';
  const successText = "Here's the list of posts:";

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render default state', () => {
    renderComponent();

    const stateEl = screen.queryByText(defaultText);

    waitFor(() =>   expect(stateEl).toBeInTheDocument());
  });

  it('should render loading state on loading', () => {
    const fetchState = FetchState.LOADING;

    jest
        .spyOn(apiHooks, 'useGetPosts')
        .mockReturnValue([[], fetchState, jest.fn()]);

    renderComponent();

    const stateEl = screen.queryByText(loadingText);

    waitFor(() => expect(stateEl).toBeInTheDocument());
  });

  it('should render error state on error', () => {
    const fetchState = FetchState.ERROR;

    jest
        .spyOn(apiHooks, 'useGetPosts')
        .mockReturnValue([[], fetchState, jest.fn()]);

    renderComponent();

    const stateEl = screen.queryByText(errorText);

    waitFor(() => expect(stateEl).toBeInTheDocument());
  });

  it('should render success state on success', () => {
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
        .spyOn(apiHooks, 'useGetPosts')
        .mockReturnValue([posts, fetchState, jest.fn()]);

    renderComponent();

    const stateEl = screen.queryByText(successText);
    const post = posts[0];
    const postTitle = `${post.id} - ${post.title}`;
    const postEl = screen.queryByText(postTitle);

    waitFor(() => expect(stateEl).toBeInTheDocument());
    waitFor(() => expect(postEl).toBeInTheDocument());
  });

  it('should call API on button click', () => {
    const getPostsMock = jest.fn();

    jest
        .spyOn(apiHooks, 'useGetPosts')
        .mockReturnValue([[], FetchState.DEFAULT, getPostsMock]);

    renderComponent();

    const btnEl = screen.queryByText('Get Data') as HTMLButtonElement;

    fireEvent.click(btnEl);

    waitFor(() => expect(getPostsMock).toBeCalledTimes(1));
  });
});

