import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockState = {
  firebase: {
    auth: {
      uid: 'mock-uid',
      isEmpty: false,
      isLoaded: true,
    }
  },
  firestore: {
    ordered: {
      cart: [],
      wishlist: [],
      orders: [],
      laptops: [],
      mobiles: [],
      accessories: []
    }
  },
  user: {
    isProductError: false,
    isWishlistError: false,
    isProfileError: false,
  }
};

const mockReducer = (state = mockState, action) => {
  return state;
};

const store = createStore(mockReducer);

test('renders learn react link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/Eshopify/i);
  expect(elements.length).toBeGreaterThan(0);
});
