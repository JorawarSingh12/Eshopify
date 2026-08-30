# Sentinel Security Journal

## 2025-05-18 - Masking Plaintext Payment Card Data and CVV Inputs
**Vulnerability:** The checkout process exposed credit card numbers in full plaintext during the order review phase and left the CVV field unmasked as standard text input.
**Learning:** Displaying raw primary account numbers (PAN) and leaving CVV inputs unmasked risks sensitive PII/financial data leakage through shoulder surfing, screen capture, or browser history.
**Prevention:** Always mask sensitive card details (showing only the last 4 digits) for PCI-DSS compliance, and enforce `type="password"` on CVV input fields.
