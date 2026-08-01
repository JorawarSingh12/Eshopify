import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Checkout Security and PCI-DSS compliance tests', () => {
  test('CVV field in PaymentForm is secure and has type="password"', () => {
    const cardDetails = { cvv: '' };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxlength', '4');
  });

  test('Card number is masked on the Review display page', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567890123456',
      expDate: '12/25',
      cvv: '123'
    };
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 St',
      city: 'New York',
      zip: '10001',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          { id: 'p1', title: 'Test Product', Brand: 'Test Brand', price: '99.99' }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Ensure the original unmasked credit card number does NOT appear in the DOM
    expect(queryByText('1234567890123456')).not.toBeInTheDocument();

    // Ensure the masked credit card number DOES appear
    // e.g., "************3456" or similar masked pattern
    const maskedCardNumber = '************3456';
    expect(getByText(maskedCardNumber)).toBeInTheDocument();
  });
});
