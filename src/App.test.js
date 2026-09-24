import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

const store = createStore(rootReducer, {
  firebase: { auth: { isLoaded: true, isEmpty: true } },
  firestore: { data: {}, ordered: {} }
});

test('renders App without crashing', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
