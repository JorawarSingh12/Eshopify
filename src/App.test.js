import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockReducer = () => ({
  firebase: {
    auth: { isEmpty: true, isLoaded: true }
  },
  firestore: {
    ordered: {}
  }
});

test('renders App component within store context', () => {
  const store = createStore(mockReducer);
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const brandElements = getAllByText(/eshopify/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
