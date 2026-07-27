import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';

const mockStore = {
  getState: () => ({
    firebase: {
      auth: {
        isEmpty: true,
        isLoaded: true,
        uid: null
      }
    },
    firestore: {
      ordered: {
        cart: [],
        products: []
      },
      data: {}
    }
  }),
  subscribe: () => {},
  dispatch: () => {}
};

test('renders Eshopify title', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const titleElements = getAllByText(/Eshopify/i);
  expect(titleElements[0]).toBeInTheDocument();
});
