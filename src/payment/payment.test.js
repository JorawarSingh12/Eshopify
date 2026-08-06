import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('PaymentForm renders secure CVV field', () => {
    const cardDetails = {
      cardName: '',
      cardNumber: '',
      expDate: '',
      cvv: ''
    };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });

  test('Review masks credit card number', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'San Francisco',
      zip: '94111',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          {
            id: 'p1',
            title: 'Laptop',
            Brand: 'BrandX',
            price: '999'
          }
        ]
      }
    ];

    const { queryByText, getByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(queryByText('1234567812345678')).not.toBeInTheDocument();
    expect(getByText('****-****-****-5678')).toBeInTheDocument();
  });
});
