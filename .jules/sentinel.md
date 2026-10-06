## 2026-10-06 - Mask Sensitive Payment Credentials and CVV Data

**Vulnerability:**
The `PaymentForm` rendered the CVV input as standard plain text instead of `type="password"`, and `Review` rendered the entire credit card primary account number (PAN) unmasked on the checkout summary screen, exposing cardholder payment data to shoulder surfing, screenshots, and logs in violation of PCI-DSS compliance standards.

**Learning:**
React form input fields and summary components often default to plain-text string displays if input types and data masking functions are omitted during initial frontend UI development.

**Prevention:**
Always enforce `type="password"` with input length constraints on CVV/CVC input fields, and ensure card numbers are masked showing only the final 4 digits before rendering on confirmation/review screens.
