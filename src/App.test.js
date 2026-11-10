import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

test('renders App with header brand name', () => {
  const store = createStore(rootReducer);
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const brandElements = getAllByText(/eshopify/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
