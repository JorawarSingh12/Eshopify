import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import createStore from 'redux';
import App from './App';
import rootReducer from './reducers/rootReducer';

const dummyStore = {
  getState: () => ({
    firebase: { auth: { uid: null, isLoaded: true, isEmpty: true } },
    firestore: { ordered: {} }
  }),
  subscribe: () => {},
  dispatch: () => {}
};

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={dummyStore}>
      <App />
    </Provider>
  );
  expect(document.body).toBeInTheDocument();
});
