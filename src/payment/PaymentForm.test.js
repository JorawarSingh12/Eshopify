import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('PaymentForm security', () => {
  test('renders CVV field securely with password type and maxLength limit', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '4111111111111234',
      expDate: '12/26',
      cvv: '123'
    };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput).toHaveAttribute('required');
    expect(cvvInput.getAttribute('maxlength')).toBe('4');
  });
});

describe('Review payment details security', () => {
  test('masks credit card number showing only last 4 digits', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '4111111111111234',
      expDate: '12/26',
      cvv: '123'
    };
    const address = {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Springfield',
      zip: '62701',
      country: 'USA'
    };
    const cart = [{ product: [{ id: '1', title: 'Test Item', Brand: 'Test Brand', price: '10.00' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('**** **** **** 1234')).toBeInTheDocument();
    expect(queryByText('4111111111111234')).toBeNull();
  });
});
