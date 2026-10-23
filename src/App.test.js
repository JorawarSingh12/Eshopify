import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialStore = createStore(() => ({
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
    <Provider store={initialStore}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/eshopify/i);
  expect(elements.length).toBeGreaterThan(0);
});
