import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

test('renders without crashing', () => {
  const store = createStore(rootReducer, {
    firebase: { auth: { isLoaded: true, isEmpty: true }, profile: {} },
    firestore: { ordered: {} },
  });
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
