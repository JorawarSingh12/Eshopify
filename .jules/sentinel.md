# Sentinel Security Journal

## 2025-06-15 - [Sensitive Payment Data Leakage and PCI-DSS Non-Compliance]
**Vulnerability:** The application was storing and displaying full unmasked credit card numbers on the checkout review page, and displaying the CVV input field as a clear text input. This violated fundamental security standards (PCI-DSS) and compromised sensitive cardholder PII.
**Learning:** Legacy UI components often lack secure default attributes (such as `type="password"` for CVV and masking utilities for card number display). This can lead to inadvertent data exposure in logs, screen sharing, or browser history.
**Prevention:** Always restrict CVV inputs to `type="password"` with correct pattern/length restrictions (e.g. 3-4 digits only), and mask credit card numbers to show only the last 4 digits on confirmation or review screens. Wrap the App under a mocked/fully initialized state context in tests to ensure security features can be consistently verified.
