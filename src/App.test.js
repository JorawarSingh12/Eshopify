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
}) => state;

const store = createStore(mockReducer);

test('renders learn react link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/eshopify/i);
  expect(linkElements[0]).toBeInTheDocument();
});
