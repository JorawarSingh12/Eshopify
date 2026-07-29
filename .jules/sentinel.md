# Sentinel Security Journal

Critical security learnings, reusable security patterns, and vulnerability prevention guidelines for Eshopify.

## 2025-02-18 - Masking Payment Information (PCI-DSS Compliance)
**Vulnerability:** The application was exposing full credit card numbers directly on the Order Review summary screen, leaking sensitive Personally Identifiable Information (PII) / Cardholder Data. Additionally, the CVV input was a standard text field without masking or proper formatting and length constraints, which risks shoulder surfing and input errors.
**Learning:** These vulnerabilities occurred due to a lack of secure payment handling standards during the implementation of the checkout flow. Credit card details were stored and bound to simple state objects and rendered directly without applying defense-in-depth or compliance principles.
**Prevention:** Always mask credit card numbers on all user interface display screens to show only the last 4 digits (e.g. `xxxx-xxxx-xxxx-1234`). Any CVV or security code input must always use `type="password"` to prevent exposure, bind to state correctly, and include length restrictions (maximum 4 characters) and strict numeric regex patterns to validate input before processing.
