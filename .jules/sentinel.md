# Sentinel Security Journal

## 2025-02-17 - Checkout Payment Details Leakage
**Vulnerability:** Credit card numbers were displayed in plaintext on the order review page, and CVV fields lacked password input masking, which violates PCI-DSS compliance and risks exposing sensitive cardholder data.
**Learning:** Payment forms and review steps must treat card data with the highest level of confidentiality. Plaintext display of full PANs (Primary Account Numbers) and visible CVVs on screen can lead to unauthorized exposure or shoulder surfing.
**Prevention:** Always mask credit card numbers on any display/review component (e.g., showing only the last 4 digits) and ensure CVV fields use `type="password"` with appropriate input restrictions.
