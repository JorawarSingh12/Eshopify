## 2025-05-18 - Credit Card Masking and CVV Password Masking
**Vulnerability:** Unmasked credit card number display on checkout order summary and plain text CVV input field.
**Learning:** React form controls for payment inputs defaulted to standard text fields, exposing sensitive PII data to shoulder surfing and PCI-DSS compliance issues.
**Prevention:** Always mask credit card numbers on display components (showing at most last 4 digits) and ensure CVV fields enforce `type="password"`, `autoComplete="cc-csc"`, and input length restrictions.
