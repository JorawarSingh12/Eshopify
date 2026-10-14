# Sentinel Security Journal

## 2026-10-14 - Mask Sensitive Payment Information in Checkout Flow
**Vulnerability:** Credit card details (full card number and CVV) were displayed in plain text in UI forms and checkout review summary screen.
**Learning:** React payment forms lacked `type="password"` input masking for CVV and string masking (`XXXX-XXXX-XXXX-1234`) for credit card numbers on summary pages.
**Prevention:** Always mask sensitive payment data (PII/PCI-DSS) on screen and use password fields for security codes like CVV.
