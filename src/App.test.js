import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './App';

test('renders App with Redux Provider', () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeDefined();
});
