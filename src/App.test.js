import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

test('renders app header without crashing', () => {
  const store = createStore(rootReducer);
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const titleElements = getAllByText(/Eshopify/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
