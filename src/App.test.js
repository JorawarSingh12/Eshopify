import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

const store = createStore(rootReducer, {
  firebase: { auth: { isEmpty: true, isLoaded: true } },
  firestore: { ordered: {} },
  user: { cart: [], wishlist: [] }
});

test('renders app component cleanly', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
