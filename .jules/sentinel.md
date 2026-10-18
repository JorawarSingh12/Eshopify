## 2025-05-18 - Masking Payment Card Data and CVV Fields

**Vulnerability:** Plaintext CVV input field in `PaymentForm` and unmasked credit card number exposure in `Review` component.
**Learning:** CVV fields missing `type="password"` allow shoulder surfing/screen recording, and displaying full card numbers on review screens violates PCI-DSS compliance and leaks sensitive Primary Account Numbers (PAN).
**Prevention:** Always mask credit card numbers on display components (showing at most the last 4 digits, e.g. `xxxx-xxxx-xxxx-1234`) and use `type="password"` with max length constraints for CVV form inputs.
