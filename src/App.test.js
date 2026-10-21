import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockStore = createStore(() => ({
  firebase: { auth: { uid: 'test-uid', isEmpty: false, isLoaded: true }, profile: {} },
  firestore: { ordered: {} },
  user: { isProfileError: false, isWishlistError: false, isProductError: false }
}));

test('renders Eshopify app component', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/Eshopify/i);
  expect(elements.length).toBeGreaterThan(0);
});
