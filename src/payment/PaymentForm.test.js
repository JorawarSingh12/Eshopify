import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV field with type password', () => {
  const mockCardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
  const mockChangeHandler = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={mockCardDetails} changecardDetails={mockChangeHandler} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).not.toBeNull();
  expect(cvvInput).toHaveAttribute('type', 'password');
});
