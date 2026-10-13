# Sentinel's Security Journal - Critical Learnings

## 2026-03-31 - Mask Credit Card Numbers and Obfuscate CVV Inputs in Payment Forms

**Vulnerability:**
The `PaymentForm` component rendered the CVV input field as a standard text input (`type="text"` by default) without format constraints, and `Review` rendered the full credit card number in plain text in the UI order summary.

**Learning:**
Displaying full credit card numbers and rendering CVV inputs in plain text leaks PCI-sensitive payment information (PII) to visual shoulder-surfing, browser logs/recordings, and DOM inspection tools.

**Prevention:**
Always use `type="password"` for CVV input fields on payment forms and mask credit card numbers (showing only the last 4 digits, e.g. `xxxx-xxxx-xxxx-1234`) on review/display components in compliance with PCI-DSS guidelines.
