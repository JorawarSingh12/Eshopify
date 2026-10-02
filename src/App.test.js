import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockState = {
  firebase: {
    auth: {
      uid: '123',
      isEmpty: false,
      isLoaded: true
    },
    profile: {}
  },
  firestore: {
    ordered: {
      cart: []
    }
  }
};

const mockStore = createStore(() => mockState);

test('renders app component without crashing', () => {
  const { container } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
