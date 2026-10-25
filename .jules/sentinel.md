## 2025-05-18 - PCI-DSS Credit Card Masking and CVV Input Protection
**Vulnerability:** Payment details review component (`Review.js`) displayed the full unmasked credit card number in cleartext, and the CVV input field (`PaymentForm.js`) lacked `type="password"` and length restrictions.
**Learning:** React form inputs without explicit `type="password"` leave sensitive credentials vulnerable to shoulder surfing, and rendering complete payment data in summary components leads to PCI-DSS non-compliance and PII leakage.
**Prevention:** Always mask credit card numbers on display (showing at most the last 4 digits) and ensure CVV fields enforce `type="password"`, required status, and `maxLength: 4` restrictions.
