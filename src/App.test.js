import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialMockState = {
  firebase: {
    auth: {
      isLoaded: true,
      isEmpty: true
    },
    profile: {}
  },
  firestore: {
    ordered: {}
  }
};

const mockStore = createStore(() => initialMockState);

test('renders App component without crashing', () => {
  const { container } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  expect(container).toBeDefined();
});
