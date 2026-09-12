import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/rootReducer';

test('renders App without crashing', () => {
  const store = createStore(rootReducer, {
    firebase: { auth: { isLoaded: true, isEmpty: true } },
  });
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
