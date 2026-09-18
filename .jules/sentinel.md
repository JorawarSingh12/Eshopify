## 2025-05-20 - Masking Sensitive Payment Data & PCI DSS Compliance
**Vulnerability:** Credit card numbers were rendered in plain text on the review step (`Review.js`), and the CVV field in `PaymentForm.js` used a default text input without `type="password"`, leaking sensitive payment information (PII) to visual observers and browser history.
**Learning:** Component forms rendering financial information must enforce `type="password"` for card verification values (CVV/CVC) and mask primary account numbers (PAN) showing at most the last 4 digits on confirmation pages.
**Prevention:** Always use `type="password"` for CVV inputs and transform card numbers to masked strings (`•••• •••• •••• 1234`) before rendering in UI components.
