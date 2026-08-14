## 2026-03-08 - [PII and Payment Card Masking Verification]
**Vulnerability:** Potential exposure of plain credit card numbers (PII/PCI-DSS violation) and CVV codes in plain text fields on payment forms.
**Learning:** React state components and order review lists often display credit card details in plain-text formats without checking for sanitization, masking, or secure element properties (such as password fields). Masking numbers is critical to maintain compliance and avoid leakages to databases or UI sessions.
**Prevention:** Always filter CVV fields to only permit digit entry, hide inputs behind password field types (`type="password"`), and sanitize/mask the credit card number to only show the final 4 digits in review lists.
