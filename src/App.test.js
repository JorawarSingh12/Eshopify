import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockReducer = (state = {
  firebase: {
    auth: {
      isEmpty: true,
      uid: null
    }
  },
  firestore: {
    ordered: {}
  }
}, action) => {
  return state;
};

const store = createStore(mockReducer);

test('renders Eshopify heading or link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements[0]).toBeInTheDocument();
});
