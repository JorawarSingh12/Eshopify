import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

const initialState = {
  firebase: {
    auth: { uid: null, isLoaded: true, isEmpty: true },
    profile: {}
  },
  firestore: {
    ordered: {
      cart: [],
      items: []
    },
    data: {}
  }
};

const mockStore = createStore(() => initialState);

test('renders app component without crashing', () => {
  const { container } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
