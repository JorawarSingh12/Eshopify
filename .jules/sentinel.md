## 2026-03-31 - Mask Sensitive Payment Inputs and Display Details
**Vulnerability:** The CVV field in `PaymentForm` was exposed in plain text as user typed (missing `type="password"`), and full unmasked credit card numbers were rendered in `Review` component.
**Learning:** Default text fields in UI libraries render characters visibly unless explicitly configured with `type="password"`, and display components can accidentally expose full credit card numbers if unmasked.
**Prevention:** Always ensure payment credential inputs (e.g., CVV/CVC) set `type="password"` and display components mask credit card numbers to show only the last 4 digits for PCI-DSS compliance and PII protection.
