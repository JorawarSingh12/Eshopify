## 2026-10-19 - Sensitive Payment Data Leakage in Checkout
**Vulnerability:** CVV input field displayed in plaintext and full credit card numbers exposed in order review screen.
**Learning:** React payment inputs default to plaintext standard inputs unless explicitly masked or set to `type="password"`, violating PCI-DSS data minimization guidelines.
**Prevention:** Always mask PAN data to display only the last 4 digits on confirmation components, and set CVV inputs to `type="password"` with max length constraints.
