import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';

test('renders learn react link', () => {
  const mockReducer = combineReducers({
    firebase: (state = { auth: { isLoaded: true, isEmpty: true } }) => state,
    firestore: (state = { ordered: {}, data: {} }) => state,
    user: (state = {}) => state,
  });

  const store = createStore(mockReducer);

  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const brandElements = getAllByText(/Eshopify/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
