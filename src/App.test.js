import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockReducer = (state = {
  firebase: {
    auth: {
      isEmpty: true,
      isLoaded: true
    }
  },
  firestore: {
    ordered: {}
  }
}, action) => state;

const mockStore = createStore(mockReducer);

test('renders Eshopify link in header', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/Eshopify/i);
  expect(elements[0]).toBeInTheDocument();
});
