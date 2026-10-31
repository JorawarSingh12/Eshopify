## 2024-05-18 - Masking Credit Card Details & Protecting CVV Input
**Vulnerability:** Cleartext display of full primary account numbers (PAN) during checkout review step and unmasked CVV field input without input type protection or length limitations in payment form.
**Learning:** During checkout workflows, developer convenience often results in rendering form state directly on review/confirmation components without sanitization or data masking, exposing sensitive cardholder data contrary to PCI-DSS requirements.
**Prevention:** Always mask card numbers to reveal at most the last four digits across UI components, and enforce `type="password"`, `autoComplete="cc-csc"`, and length constraints on sensitive authentication data like CVV.
