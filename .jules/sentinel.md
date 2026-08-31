# Sentinel Security Journal

## 2026-03-31 - Mask sensitive credit card PII and enforce password masking on CVV
**Vulnerability:** Full credit card numbers were displayed in cleartext in the order review component, and CVV inputs were rendered as standard text fields rather than password fields.
**Learning:** React form inputs and review components handling payment details must enforce strict PII protection standards (PCI-DSS) by default.
**Prevention:** Always mask credit card display values (showing only the last 4 digits) and use `type="password"` on CVV inputs to prevent shoulder surfing and unauthorized data exposure.
