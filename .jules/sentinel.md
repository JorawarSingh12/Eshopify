# Sentinel Security Journal

## 2025-02-14 - Prevent Payment PII Leakage and Secure CVV Fields
**Vulnerability:** The application was displaying credit card numbers in plaintext on checkout confirmation screens, risking exposing sensitive Cardholder Data (CHD). Additionally, the CVV field was unmasked and unconstrained in the payment form, allowing onlookers to easily view the security code and potentially input invalid input lengths.
**Learning:** For PCI-DSS compliance and general safety, credit card numbers must always be masked on any display components, only exposing the minimum necessary digits (such as the last 4). All security-sensitive fields (like CVV) must be masked via `type="password"` during input and have strict input formatting limits (such as `maxLength: 4`).
**Prevention:** Always use secure masked text representations for card/payment details on the frontend. Use password-masked inputs for authentication-related checkout fields. Add code-level test suites to prevent regressions of payment form masking and password config rules.
