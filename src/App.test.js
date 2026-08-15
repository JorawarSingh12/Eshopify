import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

const mockInitialState = {
  firebase: {
    auth: { isLoaded: true, isEmpty: true },
    profile: {}
  },
  firestore: {
    ordered: { products: [] },
    data: {}
  }
};

const store = createStore(rootReducer, mockInitialState);

test('renders app without crashing', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
