import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/rootReducer';

test('renders learn react link', () => {
  const store = createStore(rootReducer);
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/eShopify/i);
  expect(elements.length).toBeGreaterThan(0);
});
