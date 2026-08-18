import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment security checks', () => {
  test('CVV input field uses password type to prevent shoulder surfing', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/26',
      cvv: '123',
    };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
  });

  test('Credit card number is masked on review screen showing only last 4 digits', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '4111222233334444',
      expDate: '12/26',
      cvv: '123',
    };
    const address = {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Metropolis',
      zip: '12345',
      country: 'USA',
    };
    const cart = [
      {
        product: [{ id: '1', title: 'Test Product', Brand: 'TestBrand', price: '10' }],
      },
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('•••• •••• •••• 4444')).toBeInTheDocument();
    expect(queryByText('4111222233334444')).toBeNull();
  });
});
