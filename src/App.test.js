import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const initialState = {
  firebase: {
    auth: { isLoaded: true, isEmpty: true },
    profile: {}
  },
  firestore: {
    ordered: {
      cart: []
    },
    data: {}
  },
  user: {}
};

const store = createStore(rootReducer, initialState);

test('renders App component wrapped in Redux Provider', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
