import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('CVV input is configured as password type and has max length', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111234',
    expDate: '12/26',
    cvv: '123',
  };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).toBeInTheDocument();
  expect(cvvInput).toHaveAttribute('type', 'password');
  expect(cvvInput).toHaveAttribute('maxlength', '4');
  expect(cvvInput).toHaveAttribute('autocomplete', 'cc-csc');
});
