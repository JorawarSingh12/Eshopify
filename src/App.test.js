import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';

const mockStore = {
  getState: () => ({
    firebase: { auth: { isEmpty: true, isLoaded: true } },
    firestore: { ordered: {} }
  }),
  subscribe: () => {},
  dispatch: () => {}
};

test('renders learn react link', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements[0]).toBeInTheDocument();
});
