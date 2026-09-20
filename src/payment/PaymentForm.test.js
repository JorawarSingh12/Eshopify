import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment security enhancements', () => {
  test('CVV field has password type and security attributes in PaymentForm', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('autocomplete')).toBe('cc-csc');
    expect(cvvInput.getAttribute('maxlength')).toBe('4');
  });

  test('Card number is masked on the Review page', () => {
    const cardDetails = { cardName: 'John Doe', cardNumber: '1234567812345678', expDate: '12/25', cvv: '123' };
    const address = { address1: '123 St', city: 'City', zip: '12345', country: 'US', firstName: 'John', lastName: 'Doe' };
    const cart = [{ product: [{ id: '1', title: 'Test Product', Brand: 'Brand', price: '10.00' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('•••• •••• •••• 5678')).toBeInTheDocument();
    expect(queryByText('1234567812345678')).toBeNull();
  });
});
