## 2026-09-13 - Mask Sensitive Payment Information in Checkout
**Vulnerability:** Raw credit card numbers and CVV security codes were displayed as plain text on checkout and order review screens.
**Learning:** Payment inputs in React forms must explicitly enforce `type="password"` for CVVs and apply string masking (showing only last 4 digits) for card numbers on display components to prevent PII/PCI leakage.
**Prevention:** Always verify payment inputs use `type="password"` and display components mask credit card numbers before rendering order review details.
