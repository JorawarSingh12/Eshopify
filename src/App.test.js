import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/rootReducer';

const initialState = {
  firebase: {
    auth: {
      isLoaded: true,
      isEmpty: true,
    },
    profile: {},
  },
  firestore: {
    ordered: {},
    data: {},
  },
  user: {
    isProductError: false,
  },
};

test('renders app without crashing', () => {
  const store = createStore(rootReducer, initialState);
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
