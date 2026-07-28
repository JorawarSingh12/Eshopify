# Sentinel Security Journal

## 2025-03-02 - Masking Credit Card Numbers and Securing CVV Inputs
**Vulnerability:** The application was displaying raw credit card numbers in full on the order review screen (PII leakage / PCI-DSS compliance failure), and the CVV field lacked any visual masking or length and character restriction.
**Learning:** Legacy components or scaffolding files (like Material-UI templates) are often imported verbatim without reviewing security requirements like standard PCI-DSS compliance, leading to sensitive data exposure in display elements.
**Prevention:** Always ensure that display components mask sensitive information (such as credit card numbers to only the last 4 digits) and configure form text fields for sensitive values (such as CVV) with `type="password"`, `maxLength`, and digit-only character filters.
