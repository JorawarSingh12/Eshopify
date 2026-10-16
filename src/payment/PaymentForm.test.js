import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm Security Tests', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111111',
    expDate: '12/25',
    cvv: '123'
  };

  const changecardDetails = jest.fn();

  test('CVV field is rendered as password type and required for security', () => {
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');

    expect(cvvInput).not.toBeNull();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('required');
    expect(cvvInput.value).toBe('123');
  });
});
