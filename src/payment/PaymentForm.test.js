import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm Security', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111111',
    expDate: '12/25',
    cvv: '123'
  };
  const changecardDetails = jest.fn();

  test('CVV field must have type="password" to mask sensitive data', () => {
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxLength', '4');
    expect(cvvInput).toHaveValue('123');
  });
});
