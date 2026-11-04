import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

test('renders App without crashing', () => {
  const store = createStore(rootReducer);
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const eshopifyElements = getAllByText(/Eshopify/i);
  expect(eshopifyElements.length).toBeGreaterThan(0);
});
