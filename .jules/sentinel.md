## 2026-03-30 - Mask sensitive payment card details and secure CVV input
**Vulnerability:** Unmasked credit card details in `Review.js` displayed full card numbers, violating PCI-DSS standards, and `PaymentForm.js` exposed CVV digits in plain text during input entry.
**Learning:** Front-end components passed raw payment details directly into order review summaries and failed to set `type="password"` on sensitive CVV input fields, creating risk of PII leakage and shoulder surfing.
**Prevention:** Always mask card numbers to show only the last 4 digits before rendering, enforce `type="password"` and length restrictions on CVV input fields, and add unit tests in `src/payment/payment.test.js` to prevent regressions.
