import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';

const mockStore = {
  getState: () => ({
    firebase: {
      auth: {
        isEmpty: true,
        uid: null
      }
    },
    firestore: {
      ordered: {
        cart: []
      }
    },
    user: {}
  }),
  subscribe: () => {},
  dispatch: () => {}
};

test('renders Eshopify header', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
