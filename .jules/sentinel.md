# Sentinel Security Journal

## 2025-05-18 - Masking PII Payment Information and Securing CVV Input Fields
**Vulnerability:** In `PaymentForm.js`, the CVV input field lacked `type="password"`, allowing sensitive card verification codes to be exposed in plain text. Furthermore, in `Review.js`, credit card numbers were displayed in full plain text instead of being masked.
**Learning:** React form components handling sensitive payment information (PII) must default to masked input types (`type="password"`) for CVVs and truncate/mask card digits on review/summary screens to meet PCI-DSS compliance and prevent shoulder-surfing/screen-recording leaks.
**Prevention:** Always enforce `type="password"` on CVV fields and use card masking utilities (e.g. `xxxx-xxxx-xxxx-1234`) on review components before rendering payment data.
