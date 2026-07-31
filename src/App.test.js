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
      isLoaded: true
    }
  },
  firestore: {
    ordered: {
      cart: []
    }
  },
  user: {}
};

test('renders Eshopify', () => {
  const store = createStore((state = mockState) => state);
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
