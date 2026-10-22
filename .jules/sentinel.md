# Sentinel Security Journal

## 2025-05-18 - PCI-DSS Compliance: CVV Input Masking and Card Number Truncation in Payment UI
**Vulnerability:** Payment form CVV input field displayed payment card security codes in plaintext (`type="text"` by default) and order review screen exposed complete unmasked 16-digit credit card numbers.
**Learning:** Payment inputs created with standard Material UI `TextField` components default to visible text unless explicitly set to `type="password"`. Review components displaying user-entered form data can easily leak full credit card numbers if not explicitly formatted with card masking functions.
**Prevention:** Always enforce `type="password"` and length restrictions on CVV/CVC fields, and mask primary account numbers (PAN) to show at most the last 4 digits on display screens to maintain PCI-DSS compliance.
