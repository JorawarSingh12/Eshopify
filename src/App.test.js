import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockReducer = (state = {
  firebase: { auth: { isEmpty: true, isLoaded: true } },
  firestore: { ordered: {} }
}) => state;

test('renders eshopify header brand', () => {
  const store = createStore(mockReducer);
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const brandElements = getAllByText(/Eshopify/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
