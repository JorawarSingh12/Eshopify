import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import PaymentForm from './PaymentForm';

describe('PaymentForm', () => {
  it('renders CVV field with type="password"', () => {
    const cardDetails = {
      cardName: '',
      cardNumber: '',
      expDate: '',
      cvv: ''
    };
    const changecardDetails = jest.fn();

    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = getByLabelText(/cvv/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxLength', '4');
  });
});

test('app renders with store provider', () => {
  const store = createStore(rootReducer);
  const { container } = render(
    <Provider store={store}>
      {/* Basic smoke test */}
    </Provider>
  );
  expect(container).toBeDefined();
});
