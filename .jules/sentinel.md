# Sentinel Security Journal

## 2026-07-21 - [PII and Credit Card Masking Compliance]
**Vulnerability:** Credit card numbers were exposed in plaintext on the order review screen, and CVV fields lacked password masking and numeric format validation, violating PCI-DSS compliance and risking disclosure of cardholder data.
**Learning:** Development workflows can inadvertently leak highly sensitive financial PII when displaying payment confirmation details to the user. Standard browser autocomplete or shoulder surfing can expose CVVs if they are not masked using input `type="password"`.
**Prevention:** Always mask sensitive card details (showing only the last 4 digits) prior to rendering them in UI components. Secure input fields such as CVVs with `type="password"`, numeric input modes, and strict length/character restrictions.
