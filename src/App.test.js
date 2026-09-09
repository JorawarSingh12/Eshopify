import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

test('renders App with Redux Provider', () => {
  const store = createStore(rootReducer, {
    firebase: { auth: { isLoaded: true, isEmpty: true } },
    firestore: { ordered: {} },
  });
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
