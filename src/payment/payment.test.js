import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

test('PaymentForm renders CVV with type password and pattern limits', () => {
  const cardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/28',
    cvv: '123'
  };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).toBeInTheDocument();
  expect(cvvInput.getAttribute('type')).toBe('password');
  expect(cvvInput.getAttribute('value')).toBe('123');
  expect(cvvInput.getAttribute('maxLength')).toBe('4');
});

test('Review masks the credit card number correctly', () => {
  const cardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/28'
  };
  const address = {
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Main St',
    city: 'Springfield',
    zip: '12345',
    country: 'USA'
  };
  const cart = [
    {
      product: [
        {
          id: '1',
          title: 'Awesome Product',
          Brand: 'BrandX',
          price: '99.99'
        }
      ]
    }
  ];

  const { getByText } = render(
    <Review cardDetails={cardDetails} address={address} cart={cart} />
  );

  // Expect card number to be masked
  expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
});
