import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

test('renders order summary and masks sensitive credit card number', () => {
  const mockCardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/25',
    cvv: '123'
  };
  const mockAddress = {
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Main St',
    city: 'Metropolis',
    zip: '12345',
    country: 'USA'
  };
  const mockCart = [
    {
      product: [
        { id: 'p1', title: 'Test Product', Brand: 'TestBrand', price: '19.99' }
      ]
    }
  ];

  const { getByText, queryByText } = render(
    <Review cardDetails={mockCardDetails} address={mockAddress} cart={mockCart} />
  );

  // Unmasked full credit card number should NOT be in the document
  expect(queryByText('1234567812345678')).not.toBeInTheDocument();

  // Masked card number should be present
  expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
});
