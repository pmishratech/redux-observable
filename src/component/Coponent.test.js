// Component.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Component from './Component';
import { fetchData } from '../actions/actions';

const mockStore = configureMockStore();

describe('Component', () => {
  it('should render loading state', () => {
    const store = mockStore({ dataModule: { data: [], loading: true } });

    render(
      <Provider store={store}>
        <Component />
      </Provider>
    );

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });

  it('should render fetched data', () => {
    const mockData = ['Item 1', 'Item 2'];
    const store = mockStore({ dataModule: { data: mockData, loading: false } });

    render(
      <Provider store={store}>
        <Component />
      </Provider>
    );

    const itemElements = screen.getAllByRole('listitem');
    expect(itemElements).toHaveLength(mockData.length);
  });

  it('should dispatch fetchData action when "Fetch Data" button is clicked', () => {
    const store = mockStore({ dataModule: { data: [], loading: false } });

    render(
      <Provider store={store}>
        <Component />
      </Provider>
    );

    const fetchDataButton = screen.getByText('Fetch Data');
    fireEvent.click(fetchDataButton);

    expect(store.getActions()).toEqual([fetchData([])]);
  });
});
