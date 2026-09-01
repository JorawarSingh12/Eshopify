import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockStore = createStore(() => ({
  firebase: { auth: { isLoaded: true, isEmpty: true } },
  firestore: { ordered: {} },
}));

test('renders eshopify title', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const titleElements = getAllByText(/eshopify/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
