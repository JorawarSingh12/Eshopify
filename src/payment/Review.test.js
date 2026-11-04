import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

test('masks credit card number and shows only last 4 digits in review', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111222233334444',
    expDate: '12/28'
  };
  const address = {
    firstName: 'Jane',
    lastName: 'Doe',
    address1: '123 Main St',
    city: 'Metropolis',
    zip: '10001',
    country: 'USA'
  };
  const cart = [
    {
      product: [
        {
          id: 'prod-1',
          title: 'Laptop Pro',
          Brand: 'E-Brand',
          price: '999.99'
        }
      ]
    }
  ];

  const { queryByText, getByText } = render(
    <Review cardDetails={cardDetails} address={address} cart={cart} />
  );

  // Full credit card number must not appear in the DOM
  expect(queryByText('4111222233334444')).toBeNull();
  expect(queryByText('41112XXXX')).toBeNull();

  // Masked card number showing only last 4 digits must appear
  expect(getByText('•••• •••• •••• 4444')).toBeInTheDocument();
});
