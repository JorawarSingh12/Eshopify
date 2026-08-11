import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV field is secured with type password and appropriate length/pattern constraints', () => {
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

    // Get the CVV input element
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();

    // Assert CVV field security attributes
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
    expect(cvvInput.getAttribute('pattern')).toBe('[0-9]*');
    expect(cvvInput.getAttribute('required')).not.toBeNull();
  });

  test('Credit card numbers are masked in Review step to prevent sensitive PII leakage', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/28',
      cvv: '123'
    };
    const address = {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Boston',
      zip: '02111',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          {
            id: 'prod1',
            title: 'Secure Product',
            Brand: 'Sentinel',
            price: '99.99'
          }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Ensure the raw credit card number does NOT appear in the document
    expect(queryByText('1234567812345678')).toBeNull();

    // Ensure the masked version does appear (only showing the last 4 digits)
    // 1234567812345678 -> ************5678
    expect(getByText('************5678')).toBeInTheDocument();
  });
});
