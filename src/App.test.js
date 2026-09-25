import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockStore = createStore(() => ({
  firebase: {
    auth: { isLoaded: true, isEmpty: true },
    profile: {}
  },
  firestore: {
    ordered: {}
  }
}));

test('renders app header without crashing', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/eShopify/i);
  expect(elements.length).toBeGreaterThan(0);
});
