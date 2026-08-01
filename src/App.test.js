import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const mockReducer = (
  state = {
    firebase: {
      auth: {
        isEmpty: true,
        isLoaded: true
      }
    },
    firestore: {
      ordered: {
        cart: []
      }
    }
  },
  action
) => state;

const store = createStore(mockReducer);

test('renders eshopify header link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/eshopify/i);
  expect(linkElements.length).toBeGreaterThanOrEqual(1);
  expect(linkElements[0]).toBeInTheDocument();
});
