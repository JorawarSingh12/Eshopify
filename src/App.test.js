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
    data: {},
  },
};

const mockReducer = (state = mockState, action) => state;
const store = createStore(mockReducer);

test('renders Eshopify header title', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/Eshopify/i);
  expect(elements.length).toBeGreaterThan(0);
  expect(elements[0]).toBeInTheDocument();
});
