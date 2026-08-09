# Sentinel Security Journal

## 2026-03-05 - Checkout Payment Information Leakage and PCI-DSS Compliance
**Vulnerability:** Raw, unmasked credit card numbers and visible CVV input fields on checkout display components.
**Learning:** Raw card numbers were rendered directly in the Order Review component, risking the leakage of sensitive cardholder PII. Additionally, the CVV TextField did not have the password type attribute, meaning the security digits remained visually exposed on-screen.
**Prevention:** Always mask credit card numbers on display screens to only show the last 4 digits (e.g. `xxxx-xxxx-xxxx-1234`). Configure sensitive payment inputs (like CVV) with `type="password"` in React forms to mask input visually and prevent shoulder-surfing.
