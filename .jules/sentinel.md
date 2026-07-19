## 2023-10-27 - Mask Credit Card Numbers and Secure CVV Inputs
**Vulnerability:** Displaying full credit card numbers on review screens or forms, and showing CVV inputs in plaintext, can leak sensitive personally identifiable information (PII) and payment credentials, violating PCI-DSS compliance standards.
**Learning:** Payment forms and verification/review components should decouple raw inputs from the rendered presentation. Masking credit card numbers to display only the last 4 digits minimizes exposure.
**Prevention:** Mask credit card numbers on all review views, set CVV field types to password, limit character input length, and restrict input strictly to numbers to ensure robust, secure processing.
