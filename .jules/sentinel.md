## 2026-08-17 - PCI-DSS Payment Field Masking & CVV Field Type

**Vulnerability:** Unmasked credit card details in order review (`Review.js`) and plain-text CVV input field in payment form (`PaymentForm.js`).
**Learning:** Default form inputs for CVV fields and review display components were missing strict security attributes (`type="password"` and card number masking), risking exposure of sensitive Payment Card Industry (PCI) / Personally Identifiable Information (PII) data.
**Prevention:** Always set `type="password"` on CVV input components and slice/mask sensitive credit card numbers so that only the last 4 digits are displayed on confirmation screens.
