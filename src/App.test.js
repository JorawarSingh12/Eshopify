import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockStore = createStore(() => ({
  firebase: {
    auth: {
      isEmpty: true,
      uid: null,
    },
  },
  firestore: {
    ordered: {
      cart: [],
    },
  },
}));

test('renders Eshopify link', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
