import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

test('masks credit card number showing only last four digits', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111222233334567',
    expDate: '10/27',
  };
  const address = {
    address1: '123 Market St',
    city: 'San Francisco',
    zip: '94103',
    country: 'USA',
    firstName: 'Jane',
    lastName: 'Doe',
  };
  const cart = [
    {
      product: [
        { id: '1', title: 'Laptop', Brand: 'TechBrand', price: '999.99' },
      ],
    },
  ];

  const { queryByText, getByText } = render(
    <Review cardDetails={cardDetails} address={address} cart={cart} />
  );

  // Full credit card number must NOT be visible anywhere in the document
  expect(queryByText('4111222233334567')).toBeNull();

  // Masked credit card number with only last 4 digits visible
  expect(getByText('•••• •••• •••• 4567')).toBeInTheDocument();
});
