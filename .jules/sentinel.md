# Sentinel Security Journal

## 2026-03-29 - Obscuring CVV and Masking Credit Card Numbers for PCI-DSS Compliance
**Vulnerability:** In `PaymentForm.js`, the CVV field was rendered as a plain text `<TextField>` without `type="password"`, allowing shoulder surfing and cleartext display of sensitive security codes. In `Review.js`, full credit card numbers were rendered in plain text without masking.
**Learning:** React Material UI `TextField` components default to plain text `type="text"`. Developers often omit explicit input types and masking logic during UI layout implementation, resulting in sensitive payment details (PII) being exposed on UI screens.
**Prevention:** Always enforce `type="password"` and input length restrictions on CVV/security code fields. Mask credit card numbers (displaying only the last 4 digits e.g., `XXXX-XXXX-XXXX-1234`) on review and summary components before rendering.
