import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';

// Setup mock store context for testing Redux connect functions in Header and components.
const mockReducer = combineReducers({
  firebase: () => ({
    auth: { isEmpty: true, uid: null },
    profile: {}
  }),
  firestore: () => ({
    ordered: {}
  }),
  user: () => ({})
});

const store = createStore(mockReducer);

test('renders learn react link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements.length).toBeGreaterThan(0);
  expect(linkElements[0]).toBeInTheDocument();
});
