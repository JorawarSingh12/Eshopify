## 2026-03-31 - Masking Sensitive Payment Information and CVV Exposure
**Vulnerability:** The payment form displayed CVV input in plain text (`type="password"` missing) and the order review step displayed the full credit card number in cleartext.
**Learning:** Checkout forms without password inputs on CVV and full credit card displays violate PCI-DSS compliance and expose PII to shoulder surfing or screen logs.
**Prevention:** Always set `type="password"` on CVV input fields and mask credit card numbers on display screens to show only the last 4 digits (e.g. `xxxx-xxxx-xxxx-1234`).
