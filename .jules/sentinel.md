## 2025-05-10 - Payment Form CVV Password Field & PAN Card Number Masking

**Vulnerability:** In `PaymentForm.js`, the CVV input field was rendered as a plain text `TextField` without `type="password"`. In `Review.js`, primary account numbers (PAN) were rendered completely unmasked in cleartext.

**Learning:** Omitting `type="password"` on CVV inputs exposes sensitive credit card verification values to shoulder-surfing attacks and screen capture tools. Displaying raw credit card numbers violates PCI-DSS compliance requirements and leaks PII.

**Prevention:** Always mark CVV fields with `type="password"` and format limits (`maxLength: 4`). Ensure credit card numbers are masked on review screens to show only the last 4 digits (e.g., `XXXX-XXXX-XXXX-1234`).
