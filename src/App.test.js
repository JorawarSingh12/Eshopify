import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

test('renders App without crashing', () => {
  const initialState = {
    firebase: { auth: { isLoaded: true, isEmpty: true } },
    firestore: { ordered: {} }
  };
  const store = createStore(rootReducer, initialState);
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
