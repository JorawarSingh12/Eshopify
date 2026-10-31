import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

test('masks credit card number and only displays the last 4 digits', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111234',
    expDate: '12/26',
    cvv: '123',
  };
  const address = {
    address1: '123 Main St',
    city: 'New York',
    zip: '10001',
    country: 'USA',
    firstName: 'Jane',
    lastName: 'Doe',
  };
  const cart = [
    {
      product: [
        {
          id: 'item-1',
          title: 'Laptop',
          Brand: 'Apple',
          price: '999.99',
        },
      ],
    },
  ];

  const { queryByText, getByText } = render(
    <Review cardDetails={cardDetails} address={address} cart={cart} />
  );

  // Full credit card number should NOT be exposed in plain text
  expect(queryByText('4111111111111234')).toBeNull();

  // Masked card number should be displayed
  expect(getByText('•••• •••• •••• 1234')).toBeInTheDocument();
});
