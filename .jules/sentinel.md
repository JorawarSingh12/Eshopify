# Sentinel Security Journal

## 2025-06-05 - [PCI-DSS Compliance: Credit Card Number Leakage and CVV Exposure]
**Vulnerability:** Credit card numbers were displayed in full cleartext on the Checkout review page, violating PCI-DSS requirements. Additionally, the CVV input field was of type 'text' instead of 'password', exposing the CVV during typing, and lacked numeric format or length restrictions.
**Learning:** Raw sensitive payment inputs were directly bound to display components without applying any maskings or type safety, leading to potential leakage of personally identifiable information (PII) and credentials.
**Prevention:** Always mask credit card numbers to show only the last 4 digits on display screens, and utilize 'type="password"' with strict format and length limits for high-risk inputs like CVV.
