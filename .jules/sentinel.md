## 2026-07-18 - Masking PII Credit Card Data & Securing CVV Fields
**Vulnerability:** plain-text exposure of full credit card numbers during checkout review steps, and clear-text presentation of the card CVV code during user input.
**Learning:** React applications handling credit card inputs must adhere to PCI-DSS compliance by avoiding visual leakage of complete PANs (Primary Account Numbers) on display review panels, as well as masking CVV inputs using the 'password' field type to prevent shoulder surfing.
**Prevention:** Mask all credit card numbers to display only the last 4 digits (e.g. `xxxx-xxxx-xxxx-1234`) when displayed back to users, and ensure the CVV text field input uses `type="password"`.
