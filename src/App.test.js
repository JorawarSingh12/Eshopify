import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/rootReducer';

test('renders app header without crashing', () => {
  const store = createStore(rootReducer, {
    firebase: { auth: { isEmpty: true, isLoaded: true } },
    firestore: { ordered: {} }
  });
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerElements = getAllByText(/Eshopify/i);
  expect(headerElements.length).toBeGreaterThan(0);
});
