import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockReducer = (state = {
  firebase: {
    auth: {
      isEmpty: true,
      uid: null
    }
  },
  firestore: {
    ordered: {
      cart: []
    }
  }
}, action) => {
  return state;
};

const store = createStore(mockReducer);

test('renders Eshopify link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/Eshopify/i);
  expect(elements.length).toBeGreaterThan(0);
  expect(elements[0]).toBeInTheDocument();
});
