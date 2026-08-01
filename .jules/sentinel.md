## 2023-11-02 - Checkout Payment Masking and CVV Password Configuration
**Vulnerability:** Exposure of credit card details in plaintext on the review step of checkout and unmasked plaintext CVV input.
**Learning:** Development prioritized functionality over security, leading to the full card number state being outputted to the screen directly without sanitization or masking, violating PCI-DSS standards.
**Prevention:** Always mask credit card numbers to only show the last 4 digits on display screens, and ensure CVV or PIN text fields have `type="password"` with correct format and length restrictions.
