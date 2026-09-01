## 2026-03-31 - Payment Information Masking and CVV Field Security
**Vulnerability:** Credit card numbers were displayed unmasked in plaintext in order summary components (`Review.js`), and CVV input fields were unmasked text fields (`PaymentForm.js`).
**Learning:** In e-commerce checkout flows, failure to mask payment details exposes PII and sensitive payment information to shoulder surfing and log/screen leakage, violating PCI-DSS standards.
**Prevention:** Always mask credit card numbers on summary views to only display the last 4 digits (e.g. `•••• •••• •••• 1234`), use `type="password"` for CVV inputs, and enforce length limits (`maxLength={4}`).
