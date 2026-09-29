import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const dummyReducer = (state = { firebase: { auth: {}, profile: {} } }) => state;
const store = createStore(dummyReducer);

test('renders learn react link or app without crashing', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
