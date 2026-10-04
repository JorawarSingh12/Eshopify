import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const dummyStore = createStore(() => ({
  firebase: { auth: { uid: null, isLoaded: true, isEmpty: true } },
  firestore: { ordered: {} },
  items: { items: [], cart: [] },
  user: {}
}));

test('renders learn react link or app without crashing', () => {
  const { container } = render(
    <Provider store={dummyStore}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
