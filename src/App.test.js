import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockState = {
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

const mockReducer = (state = mockState) => state;
const store = createStore(mockReducer);

test('renders eshopify links', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
