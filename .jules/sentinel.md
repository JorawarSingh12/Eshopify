## 2026-03-30 - Masking CVV and Sensitive Payment Inputs for PCI-DSS Compliance
**Vulnerability:** The CVV input field in `PaymentForm.js` was configured as a standard text input without `type="password"` or length restrictions, causing CVV values to display in clear text during input.
**Learning:** Unmasked payment fields create shoulder surfing and visual shoulder leakage risks during checkout, violating PCI-DSS guidance on sensitive payment data handling.
**Prevention:** Always ensure payment input fields for security codes (CVV/CVC) utilize `type="password"`, `autoComplete="cc-csc"`, `required`, and length restrictions (`maxLength: 4`).
