import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

test('renders App with Redux provider without crashing', () => {
  const store = createStore(rootReducer, {
    firebase: { auth: { isLoaded: true, isEmpty: true }, profile: {} },
    firestore: { data: {}, ordered: {}, status: {}, queries: {}, listeners: {} },
    user: { cart: [], wishlist: [], orders: [] }
  });
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeDefined();
});
