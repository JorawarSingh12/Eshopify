import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './payment/PaymentForm';
import Review from './payment/Review';

test('PaymentForm CVV input is secured and masked', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '1234567890123456',
    expDate: '12/25',
    cvv: '123'
  };
  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
  );
  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).toBeInTheDocument();
  expect(cvvInput.getAttribute('type')).toBe('password');
  expect(cvvInput.getAttribute('value')).toBe('123');
});

test('Review masks the credit card number and shows last 4 digits', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111 2222 3333 4444',
    expDate: '12/25',
    cvv: '123'
  };
  const address = {
    firstName: 'Jane',
    lastName: 'Doe',
    address1: '123 Main St',
    city: 'Seattle',
    zip: '98101',
    country: 'USA'
  };
  const cart = [{
    product: [
      { id: '1', title: 'Test Laptop', Brand: 'TestBrand', price: '999.99' }
    ]
  }];
  const { getByText } = render(
    <Review cardDetails={cardDetails} address={address} cart={cart} />
  );
  // Credit card should be masked to: xxxx-xxxx-xxxx-4444
  expect(getByText('xxxx-xxxx-xxxx-4444')).toBeInTheDocument();
  // Card brand should be recognized as Visa
  expect(getByText('Visa')).toBeInTheDocument();
});
