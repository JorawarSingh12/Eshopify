import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockInitialState = {
  firebase: {
    auth: {
      isEmpty: true,
      uid: null,
    }
  },
  firestore: {
    ordered: {
      cart: [],
    }
  }
};

const mockStore = createStore((state = mockInitialState) => state);

test('renders Eshopify link/header', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/Eshopify/i);
  expect(elements.length).toBeGreaterThan(0);
});
