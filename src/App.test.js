import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockStore = createStore(() => ({
  firebase: { auth: { uid: null } },
  firestore: { ordered: {} }
}));

test('renders learn react link', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const linkElement = getAllByText(/eshopify/i)[0];
  expect(linkElement).toBeInTheDocument();
});
