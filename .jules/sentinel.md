# Sentinel Security Journal

## 2023-11-23 - Masking of Sensitive Payment Data and Obscuring CVV
**Vulnerability:** Exposing full credit card numbers and plaintext CVV input fields on client screens violates PCI-DSS requirements and introduces high risk of shoulder surfing or unauthorized data retention.
**Learning:** React state-bound forms must explicitly set `type="password"` for CVVs and truncate/mask full credit card numbers before rendering on screen summaries, to avoid exposure of primary account numbers (PAN) and sensitive authentication data (SAD).
**Prevention:** Always use `type="password"` for password/CVV inputs and format card numbers to show only the last 4 digits on any order review or summary screens.
