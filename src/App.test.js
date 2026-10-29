import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockStore = createStore(() => ({
  firebase: {
    auth: { isLoaded: true, isEmpty: true },
    profile: {}
  },
  firestore: {
    ordered: {}
  }
}));

test('renders App without crashing', () => {
  const { container } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
