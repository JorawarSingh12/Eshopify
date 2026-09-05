import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockReducer = (state = {
  firebase: { auth: { uid: '123', isEmpty: false, isLoaded: true }, profile: {} },
  firestore: { ordered: { cart: [] } }
}) => state;

test('renders app component without crashing', () => {
  const store = createStore(mockReducer);
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
