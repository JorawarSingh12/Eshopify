import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';

const mockStore = {
  getState: () => ({
    firebase: {
      auth: { uid: 'test-uid', isEmpty: false, isLoaded: true },
      profile: {}
    },
    firestore: {
      ordered: { cart: [] },
      data: {}
    }
  }),
  subscribe: () => () => {},
  dispatch: () => {}
};

test('renders App component header title', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const titleElements = getAllByText(/Eshopify/i);
  expect(titleElements.length).toBeGreaterThan(0);
  expect(titleElements[0]).toBeInTheDocument();
});
