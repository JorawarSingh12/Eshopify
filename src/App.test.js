import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const initialState = {
  firebase: {
    auth: {
      uid: 'mock_uid',
      isEmpty: false,
    },
  },
  firestore: {
    ordered: {
      laptops: [],
      mobiles: [],
      accessories: [],
      wishlist: [],
    },
  },
};

const store = createStore((state = initialState) => state);

test('renders eshopify application', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/Eshopify/i);
  expect(elements.length).toBeGreaterThan(0);
  expect(elements[0]).toBeInTheDocument();
});
