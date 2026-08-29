# Sentinel Security Journal

## 2026-07-15 - PII Masking & CVV Field Type
**Vulnerability:** Full credit card numbers were displayed unmasked on the order summary/review screen, and the CVV field was rendered as standard plain text instead of password/masked input.
**Learning:** Payment review UI components often copy state directly without sanitizing or masking sensitive PCI/PII data. Plain text CVV inputs allow shoulder surfing.
**Prevention:** Mask card numbers showing only last 4 digits (e.g. `**** **** **** 1234`), and set `type="password"` on CVV input fields.
