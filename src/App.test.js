import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

test('renders App component without crashing', () => {
  const store = createStore(rootReducer, {
    firebase: { auth: { isLoaded: true, isEmpty: true } },
    firestore: { ordered: {} }
  });
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
