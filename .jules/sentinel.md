## 2025-05-18 - Mask Sensitive Payment Information in Checkout
**Vulnerability:** Checkout components exposed full credit card numbers on the review screen and used plain text input fields for sensitive CVV entries during payment collection.
**Learning:** React components displaying payment details or collecting card verification codes often omit masking or `type="password"` attributes when focusing only on functional UI layouts, causing PCI-DSS non-compliance and visual data leakage risks.
**Prevention:** Always mask Primary Account Numbers (PAN) to show only the last 4 digits on display screens and ensure CVV text fields enforce `type="password"`.
