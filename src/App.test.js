import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const dummyReducer = (state = { firebase: { auth: { isLoaded: true, isEmpty: true } }, firestore: { ordered: {} }, cart: [] }) => state;
const store = createStore(dummyReducer);

test('renders App without crashing and contains header title', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const titleElements = getAllByText(/eShopify/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
