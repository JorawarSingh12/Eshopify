# Sentinel Security Journal

## 2026-03-31 - PCI-DSS Masking & Password Inputs in React Payment Forms
**Vulnerability:** Payment form CVV input field was rendered as a plain text field without `type="password"`, `required`, or length limits, and full credit card numbers were displayed unmasked on the checkout summary screen.
**Learning:** Default Material UI `TextField` components default to plaintext (`type="text"`). Omitting `type="password"` on sensitive payment fields like CVV exposes card verification values to shoulder surfing and browser DOM exposure. Additionally, displaying unmasked card numbers in order summaries creates PII leaks and PCI-DSS compliance risks.
**Prevention:** Always mark CVV fields with `type="password"`, `required`, `autoComplete="cc-csc"`, and strict input limits (`maxLength: 4`). Ensure display components mask credit card numbers to show only the last 4 digits (e.g., `xxxx-xxxx-xxxx-1234`).
