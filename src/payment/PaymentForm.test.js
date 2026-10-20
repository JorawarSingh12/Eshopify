import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('PaymentForm Security', () => {
  test('CVV field has type="password" and maxLength 4', () => {
    const cardDetails = { cardName: 'John Doe', cardNumber: '1234567812345678', expDate: '12/25', cvv: '123' };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });
});

describe('Review Security', () => {
  test('Credit card number is masked on the review component', () => {
    const cardDetails = { cardName: 'John Doe', cardNumber: '1234567812345678', expDate: '12/25', cvv: '123' };
    const address = { firstName: 'John', lastName: 'Doe', address1: '123 Main St', city: 'City', zip: '12345', country: 'US' };
    const cart = [{ product: [{ id: '1', title: 'Product 1', Brand: 'Brand 1', price: '10.00' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
    expect(queryByText('1234567812345678')).toBeNull();
  });
});
