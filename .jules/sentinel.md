## 2025-05-18 - Masking Sensitive CVV Payment Inputs
**Vulnerability:** CVV input field in `PaymentForm.js` lacked `type="password"` attribute and controlled input attributes (`value`, `id`, `required`), exposing sensitive payment verification digits in plaintext on the user interface.
**Learning:** Material UI `TextField` components default to `type="text"` unless explicitly configured with `type="password"`, risking shoulder-surfing exposure of Card Verification Values (CVV) and violating PCI-DSS data protection guidance.
**Prevention:** Always set `type="password"` and controlled component attributes (`value`, `id`, `required`) on payment authentication fields like CVV.
