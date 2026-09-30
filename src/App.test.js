import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockStore = createStore(() => ({
  firebase: { auth: { uid: null, isLoaded: true, isEmpty: true }, profile: {} },
  firestore: { ordered: {}, data: {} }
}));

test('renders Eshopify brand text', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const brandElements = getAllByText(/Eshopify/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
