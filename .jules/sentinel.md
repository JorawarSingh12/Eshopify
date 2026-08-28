## 2026-03-30 - Masking Sensitive Payment Data & Restricting CVV Inputs
**Vulnerability:** Unmasked full credit card numbers displayed in review steps and unmasked CVV text fields in payment checkout forms lead to PCI-DSS non-compliance and exposure of PII / payment card data.
**Learning:** React form components handling payment data must obscure sensitive credentials immediately on input and mask PAN (primary account number) displays to only show the last 4 digits.
**Prevention:** Always set `type="password"` and enforce `maxLength` on security code inputs (CVV / CVC), and mask payment card numbers before rendering in summary / review views.
