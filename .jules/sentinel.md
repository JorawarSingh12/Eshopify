## 2026-03-30 - Masking Sensitive Payment Details (PCI-DSS)
**Vulnerability:** Full credit card numbers were displayed in plain text in checkout order review components, and CVV inputs lacked password masking (`type="password"`), exposing PII to over-the-shoulder viewing.
**Learning:** Frontend review components often render input state directly for confirmation without applying display masking, inadvertently leaking full card data.
**Prevention:** Always mask primary account numbers (PAN) on presentation layers to display only the last 4 digits (e.g. `XXXX-XXXX-XXXX-1234`), and explicitly enforce `type="password"` for CVV fields.
