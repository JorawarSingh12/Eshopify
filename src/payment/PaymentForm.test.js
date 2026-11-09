import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm security', () => {
  const dummyProps = {
    cardDetails: {
      cardName: 'Jane Doe',
      cardNumber: '4111111111111234',
      expDate: '12/28',
      cvv: '123'
    },
    changecardDetails: jest.fn()
  };

  test('CVV field is configured with type="password" to prevent shoulder surfing', () => {
    const { container } = render(<PaymentForm {...dummyProps} />);
    const cvvInput = container.querySelector('input[name="cvv"]');

    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('autocomplete', 'cc-csc');
    expect(cvvInput).toHaveAttribute('maxlength', '4');
  });
});
