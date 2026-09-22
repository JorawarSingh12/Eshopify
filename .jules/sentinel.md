# Sentinel Security Journal

## 2026-03-30 - Mask Sensitive Payment Information in Order Summary and CVV Input
**Vulnerability:** The order review step rendered full, unmasked credit card numbers in plaintext, and the CVV entry field in PaymentForm lacked `type="password"`, exposing sensitive PAN and card security codes to visual surveillance and PII/PCI leakage.
**Learning:** React form inputs for security codes must explicitly configure password rendering types and character limits, and order summary components must slice/mask primary account numbers before rendering.
**Prevention:** Ensure all payment entry fields utilize `type="password"` for CVVs and apply string masking (e.g. `xxxx-xxxx-xxxx-${last4}`) to card numbers in display components prior to rendering.
