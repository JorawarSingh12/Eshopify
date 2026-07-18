import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

// Define a simple mock reducer and initial state to satisfy component dependencies
const mockInitialState = {
  firebase: {
    auth: {
      uid: 'mock_uid',
      isEmpty: false,
      isLoaded: true
    }
  },
  firestore: {
    ordered: {
      cart: []
    }
  },
  user: {}
};

const mockReducer = (state = mockInitialState) => state;
const mockStore = createStore(mockReducer);

test('renders learn react link', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  // Header shows Eshopify brand link
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements[0]).toBeInTheDocument();
});
