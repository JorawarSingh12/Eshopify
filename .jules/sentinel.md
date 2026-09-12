## 2025-05-18 - Masking PII Payment Details & CVV Input Configuration
**Vulnerability:** Payment card numbers were displayed in plain text in the order summary (`Review.js`) and the CVV field lacked `type="password"` in `PaymentForm.js`.
**Learning:** Checkout form inputs and order review components often render input props or state values directly without applying masking or proper password input types.
**Prevention:** Always mask Primary Account Numbers (PAN) to show at most the last 4 digits on display screens and explicitly set `type="password"` on CVV inputs to prevent sensitive data leakage and comply with PCI-DSS standards.
