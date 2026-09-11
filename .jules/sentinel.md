## Sentinel Security Journal

## 2025-05-18 - Mask Sensitive Payment Information in Checkout
**Vulnerability:** Unmasked credit card details in order review components and plain-text input field for CVV during payment checkout.
**Learning:** Payment forms and review steps in React frontends can inadvertently leak sensitive PCI-DSS PII data if inputs lack explicit `type="password"` or display components render complete card strings without masking.
**Prevention:** Ensure credit card inputs use password fields or dedicated PCI-compliant widgets, and always truncate/mask payment card numbers (displaying at most the last 4 digits) across all summary views.
