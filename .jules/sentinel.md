# Sentinel Security Journal

## 2026-08-07 - [PCI-DSS Checkout Leakage in Payment Flow]
**Vulnerability:** The application was displaying raw credit card numbers on the checkout review screen and accepting CVVs as plaintext inputs instead of a masked password input field.
**Learning:** React forms handling payment components must implement defense in depth by masking sensitive credit card information immediately on ingestion and display steps. Relying on browser/client behavior for payment form protection without explicit component constraints leaves sensitive data exposed.
**Prevention:** Always restrict CVV inputs with `type="password"` and length restrictions, and mask credit card displays on the frontend showing only the last 4 digits.
