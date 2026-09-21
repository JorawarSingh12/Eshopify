import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

const mockStore = createStore(rootReducer, {
  firebase: { auth: { isLoaded: true, isEmpty: true } },
  user: { items: [], cart: [] }
});

test('renders app without crashing', () => {
  render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
});
