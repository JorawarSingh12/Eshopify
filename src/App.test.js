import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockState = {
  firebase: {
    auth: {
      isEmpty: true,
      uid: null,
    },
    profile: {},
  },
  firestore: {
    ordered: {
      cart: [],
    },
  },
  user: {},
};

const mockReducer = (state = mockState, action) => state;
const store = createStore(mockReducer);

test('renders Eshopify link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements.length).toBeGreaterThan(0);
  expect(linkElements[0]).toBeInTheDocument();
});
