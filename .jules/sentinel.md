## 2026-03-31 - Mask CVV and Sensitive Payment Input Fields

**Vulnerability:** The CVV input field in `PaymentForm` rendered as cleartext (`type="text"` by default), exposing sensitive payment card security codes to visual observation (shoulder surfing) and potential leak in DOM/browser history.
**Learning:** Default Material-UI `TextField` components render as `type="text"`. Financial sensitive input fields such as CVC/CVV require explicit `type="password"`, `autoComplete="cc-csc"`, and input length constraints to comply with PCI-DSS payment data security standards.
**Prevention:** Always specify `type="password"`, appropriate `autoComplete` attributes, and `maxLength` restrictions on payment security code inputs, and add automated component unit tests in `*.test.js` to assert sensitive field attribute configuration.
