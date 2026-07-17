import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

test('masks the full credit card number on the review screen', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '1234567812345678',
    expDate: '12/26',
    cvv: '123',
  };

  const address = {
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Main St',
    address2: '',
    city: 'San Francisco',
    zip: '94111',
    country: 'USA',
  };

  const cart = [
    {
      product: [
        {
          id: 'p1',
          title: 'Laptop Pro',
          Brand: 'BrandX',
          price: '999.99',
        },
      ],
    },
  ];

  const { queryByText, getByText } = render(
    <Review cardDetails={cardDetails} address={address} cart={cart} />
  );

  // The full card number must NOT be in the document
  expect(queryByText('1234567812345678')).not.toBeInTheDocument();

  // The masked card number should be present
  expect(getByText('•••• •••• •••• 5678')).toBeInTheDocument();

  // Card holder name should be present
  expect(getByText('Jane Doe')).toBeInTheDocument();

  // Shipping name should be present
  expect(getByText('John Doe')).toBeInTheDocument();
});
