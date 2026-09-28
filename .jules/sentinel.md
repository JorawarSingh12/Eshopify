# Sentinel Security Journal

## 2025-05-18 - Credit Card Masking and CVV Field Security
**Vulnerability:** Payment form allowed unmasked CVV entry in plain text input and order review displayed full unmasked credit card numbers on screen.
**Learning:** Form components lacked explicit security input types (`type="password"`) and card display components lacked masking helper logic, leading to PII/PCI-DSS non-compliance.
**Prevention:** Always set `type="password"`, `required`, and format limits (`autoComplete="cc-csc"`, `maxLength`) on sensitive verification code inputs like CVV, and ensure credit card numbers are masked showing only the last 4 digits on display screens.
