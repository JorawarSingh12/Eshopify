import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

const initialState = {
  firebase: {
    auth: {
      uid: 'test-user-id',
      isEmpty: false,
      isLoaded: true
    },
    profile: {}
  },
  firestore: {
    ordered: {
      cart: [],
      laptops: [],
      mobiles: [],
      accessories: [],
      wishlist: []
    },
    data: {}
  }
};

const store = createStore(
  rootReducer,
  initialState
);

test('renders Eshopify brand name', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const brandElements = getAllByText(/Eshopify/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
