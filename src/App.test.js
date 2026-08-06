import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = {
  firebase: {
    auth: {
      isEmpty: true,
      isLoaded: true
    }
  },
  firestore: {
    ordered: {
      cart: []
    }
  }
};

const mockReducer = (state = initialState, action) => state;

test('renders learn react link', () => {
  const store = createStore(mockReducer);
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/Eshopify/i);
  expect(elements.length).toBeGreaterThan(0);
});
