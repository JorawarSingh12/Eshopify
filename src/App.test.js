import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const mockStore = createStore(rootReducer, {
  firebase: { auth: { isLoaded: true, isEmpty: true }, profile: {} },
  firestore: { ordered: {}, data: {} },
});

test('renders app component without crashing', () => {
  const { container } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
