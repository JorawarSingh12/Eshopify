# Sentinel Security Journal

## 2026-03-31 - PCI-DSS Payment Masking & CVV Field Password Type
**Vulnerability:** Unmasked credit card numbers displayed on the checkout Review screen and plaintext CVV input in PaymentForm exposed sensitive cardholder data to shoulder-surfing and potential logging/screen scraping risks.
**Learning:** React forms handling card details often default to standard `<TextField>` elements without setting explicit `type="password"` for CVV fields or applying masking logic before rendering card details in summary components.
**Prevention:** Always mask card numbers showing only trailing digits (e.g., `xxxx-xxxx-xxxx-1234`) when displaying payment summaries, and enforce `type="password"` with explicit element IDs on sensitive input fields like CVV.
