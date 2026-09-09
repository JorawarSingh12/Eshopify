## 2026-03-30 - Mask Payment Details and CVV Input
**Vulnerability:** Cleartext payment card digits and unmasked CVV inputs in checkout review/form components exposed sensitive payment information (PII) and violated PCI DSS compliance.
**Learning:** Default Material-UI TextField components render input as cleartext unless `type="password"` is specified, and order summary components can easily leak full credit card numbers if raw state properties are rendered directly.
**Prevention:** Always set `type="password"` on CVV fields and sanitize/mask payment card strings (e.g. `XXXX-XXXX-XXXX-1234`) before rendering in UI components.
