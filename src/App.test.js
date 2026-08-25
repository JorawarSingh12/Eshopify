import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

const initialReducerState = {
  firebase: {
    auth: { isLoaded: true, isEmpty: true },
    profile: {}
  },
  firestore: {
    ordered: {},
    data: {}
  }
};

const store = createStore(rootReducer, initialReducerState);

test('renders without crashing', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
