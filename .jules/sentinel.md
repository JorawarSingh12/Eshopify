# Sentinel Security Journal

## 2026-03-24 - Masking Credit Card PII and CVV Inputs for PCI-DSS Compliance
**Vulnerability:** The Checkout flow exposed full, unmasked credit card numbers in plaintext on the Order Summary (`Review.js`) component, and left the CVV input field in `PaymentForm.js` completely unmasked. This exposes sensitive PII and CVV information to shoulder surfing and potential leakage, violating PCI-DSS requirements.
**Learning:** The components lacked simple display-level and input-level masking of payment details. Standard Material UI TextFields render inputs as plaintext by default unless explicitly configured with `type="password"`, and display components will render raw data unless transformed by masking helpers.
**Prevention:** Always implement display-level masking for highly sensitive data like card numbers (e.g., only showing the last 4 digits) and use `type="password"` on CVV/PIN inputs with proper formatting restrictions (such as `maxLength` and `pattern`).
