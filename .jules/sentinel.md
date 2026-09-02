## 2026-03-31 - Masking PII and Sensitive Payment Information in Checkout
**Vulnerability:** Unmasked credit card primary account numbers (PAN) in the order review summary and unmasked plain-text CVV inputs in checkout payment forms.
**Learning:** Displaying full credit card numbers in order review screens or rendering CVV input fields as standard text fields violates PCI-DSS requirements and exposes sensitive cardholder data to shoulder surfing, DOM inspection, or unintended screen recording.
**Prevention:** Always mask primary account numbers (PAN) so only the last 4 digits are displayed (`•••• •••• •••• 1234`), use `type="password"` for sensitive verification codes like CVV/CVC, and enforce strict input length limits.
