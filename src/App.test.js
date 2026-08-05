import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockState = {
  firebase: {
    auth: { uid: '123', isEmpty: false, isLoaded: true },
    profile: { isEmpty: true, isLoaded: true }
  },
  firestore: {
    ordered: {
      cart: []
    }
  },
  user: {}
};

const mockReducer = (state = mockState, action) => state;
const store = createStore(mockReducer);

test('renders Eshopify logo link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const logoElements = getAllByText(/Eshopify/i);
  expect(logoElements.length).toBeGreaterThan(0);
  expect(logoElements[0]).toBeInTheDocument();
});
