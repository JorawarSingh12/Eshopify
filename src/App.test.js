import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const mockState = {
  firebase: {
    auth: {
      uid: 'test-uid',
      isEmpty: false,
      isLoaded: true
    },
    profile: {
      isEmpty: true,
      isLoaded: true
    }
  },
  firestore: {
    ordered: {
      cart: []
    },
    data: {}
  }
};

const mockReducer = (state = mockState) => state;
const store = createStore(mockReducer);

test('renders Eshopify brand link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const brandElements = getAllByText(/Eshopify/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
