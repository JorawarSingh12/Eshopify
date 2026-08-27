## 2026-03-30 - Payment Card Data Leakage in Checkout Review and Form Inputs
**Vulnerability:** Full credit card numbers were rendered in plain text on the payment review screen, and CVV fields used plain text input type, risking visual exposure and log/DOM leakage of sensitive payment information (PII/PCI-DSS violation).
**Learning:** Display components handling user-entered sensitive payment data must explicitly mask card numbers (showing only the last 4 digits) and use `type="password"` for CVV input fields.
**Prevention:** Always sanitize/mask sensitive card details before rendering them in summary UI components and ensure input fields for sensitive secrets use masked input types.
