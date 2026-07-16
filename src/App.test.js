import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import PaymentForm from './payment/PaymentForm';
import Review from './payment/Review';

const mockReducer = (state = {
  firebase: {
    auth: {
      isEmpty: true,
      isLoaded: true,
    }
  },
  firestore: {
    ordered: {}
  },
  user: {
    isProductError: false
  }
}, action) => state;

const store = createStore(mockReducer);

test('renders Eshopify link', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const elements = getAllByText(/Eshopify/i);
  expect(elements.length).toBeGreaterThan(0);
});

test('PaymentForm obscures CVV field', () => {
  const cardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567890123456',
    expDate: '12/26',
    cvv: '123'
  };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).toBeInTheDocument();
  expect(cvvInput).toHaveAttribute('type', 'password');
  expect(cvvInput).toHaveAttribute('required');
  expect(cvvInput).toHaveValue('123');
});

test('Review masks card number', () => {
  const cardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567890123456',
    expDate: '12/26',
    cvv: '123'
  };
  const address = {
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Main St',
    city: 'Anytown',
    zip: '12345',
    country: 'USA'
  };
  const cart = [{
    product: [
      { id: '1', title: 'Product 1', Brand: 'Brand 1', price: '100' }
    ]
  }];

  const { getByText } = render(
    <Review cardDetails={cardDetails} address={address} cart={cart} />
  );

  const elements = getByText(/XXXX-XXXX-XXXX-3456/i);
  expect(elements).toBeInTheDocument();
});
