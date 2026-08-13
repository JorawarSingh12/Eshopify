# Sentinel Security Journal

## 2026-08-13 - Credit Card Number Leakage and Exposed CVV Fields
**Vulnerability:** The application was exposing the full plaintext credit card number on the order summary display component (`src/payment/Review.js`) and also leaking the first 5 digits of the card number in another field. Additionally, the CVV input field on `src/payment/PaymentForm.js` was a plain, unmasked text field without password masking or input format restrictions, exposing highly sensitive payment card data to shoulder-surfing and potentially insecure browser auto-fills.
**Learning:** These vulnerabilities existed because standard template components were modified or left default without auditing for PCI-DSS compliance or basic secure UI best practices. Unmasked display of cardholder details violates basic principles of sensitive data containment.
**Prevention:** Always mask credit card numbers to show only the last 4 digits on all non-input display elements. Ensure CVV inputs are set to `type="password"`, `required`, and enforce format restrictions (such as `maxLength: 4` and numeric character patterns) on the front-end to reduce shoulder-surfing and input error risks.
