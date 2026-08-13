import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

test('PaymentForm renders CVV with type="password", required, and format restrictions', () => {
  const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).toBeInTheDocument();
  expect(cvvInput.getAttribute('type')).toBe('password');
  expect(cvvInput).toBeRequired();
  expect(cvvInput.getAttribute('maxlength')).toBe('4');
});

test('Review displays masked card number showing only last 4 digits', () => {
  const cardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/26',
    cvv: '123'
  };
  const address = {
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Main St',
    city: 'New York',
    zip: '10001',
    country: 'USA'
  };
  const cart = [
    {
      product: [
        { id: '1', title: 'Product 1', Brand: 'Brand A', price: '10.00' }
      ]
    }
  ];

  const { getByText, queryByText } = render(
    <Review cardDetails={cardDetails} address={address} cart={cart} />
  );

  // The fully exposed card number should NOT be in the document
  expect(queryByText('1234567812345678')).not.toBeInTheDocument();

  // The masked card number should be in the document (ending with 5678)
  const maskedElement = getByText(/xxxx-xxxx-xxxx-5678/i);
  expect(maskedElement).toBeInTheDocument();
});
