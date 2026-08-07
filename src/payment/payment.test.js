import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment security tests', () => {
  test('CVV field uses type="password" and is masked', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567890123456',
      expDate: '12/25',
      cvv: '123'
    };
    const changecardDetails = jest.fn();
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });

  test('Card number is masked on the Review display', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567890123456',
      expDate: '12/25',
      cvv: '123'
    };
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      address2: '',
      city: 'Boston',
      zip: '02108',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          {
            id: '1',
            title: 'Test Product',
            Brand: 'Brand X',
            price: '99.99'
          }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Verify card number is masked
    expect(getByText('xxxx-xxxx-xxxx-3456')).toBeInTheDocument();
    // Ensure the full card number is not displayed anywhere
    expect(queryByText('1234567890123456')).toBeNull();
  });
});
