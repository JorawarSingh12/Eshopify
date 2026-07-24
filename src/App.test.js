import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockReducer = (state = {
  firebase: {
    auth: {
      isEmpty: true,
      uid: null,
    }
  },
  firestore: {
    ordered: {
      cart: []
    }
  }
}, action) => state;

const store = createStore(mockReducer);

test('renders Eshopify heading or brand', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const brandElements = getAllByText(/Eshopify/i);
  expect(brandElements.length).toBeGreaterThan(0);
  expect(brandElements[0]).toBeInTheDocument();
});
