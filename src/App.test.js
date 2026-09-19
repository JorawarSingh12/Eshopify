import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, {
  firebase: { auth: { isLoaded: true, isEmpty: true } },
  firestore: { ordered: {} }
});

test('renders learn react link or header components', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).not.toBeNull();
});
