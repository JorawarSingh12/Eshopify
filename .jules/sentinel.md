## 2026-03-30 - Payment Card Data Exposure and Sensitive Field Masking
**Vulnerability:** Unmasked credit card details in order review and plain-text CVV input field during checkout.
**Learning:** Payment forms in React/Material UI must explicitly configure `type="password"` and length restrictions on CVV inputs, and display components must mask full card numbers showing only the last 4 digits (PCI-DSS compliance).
**Prevention:** Always verify payment input components use secure input types and display components sanitize and mask payment details before rendering.
