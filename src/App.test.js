import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockReducer = (
  state = {
    firebase: {
      auth: { isLoaded: true, isEmpty: true, uid: null },
      profile: {},
    },
    firestore: {
      ordered: {
        cart: [],
        wishlist: [],
      },
    },
  }
) => state;

const mockStore = createStore(mockReducer);

test('renders App without crashing', () => {
  const { container } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
