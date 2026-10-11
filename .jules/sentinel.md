## 2025-05-18 - Masking Payment Information and Securing CVV Fields
**Vulnerability:** Credit card numbers were rendered in plain text on the order review screen, and CVV fields in payment forms lacked the `type="password"` attribute, leaking sensitive PII / PCI cardholder data.
**Learning:** Default text fields in payment components can unintentionally display sensitive payment information in plain text if not explicitly configured with input masking and secret input types.
**Prevention:** Always mask card numbers to show only the last 4 digits on display screens and enforce `type="password"` with proper length restrictions on CVV input components.
