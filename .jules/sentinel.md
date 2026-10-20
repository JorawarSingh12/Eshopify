## 2026-10-20 - Masking Sensitive Payment Information and CVV Security

**Vulnerability:**
Cleartext CVV input field (`type="text"`) and full credit card number display on order review screen in client-side payment flow.

**Learning:**
React forms handling payment details should avoid rendering sensitive PCI-DSS related values like full card numbers and CVV numbers in plaintext.

**Prevention:**
Ensure CVV inputs always use `type="password"` with appropriate input length attributes (`maxLength: 4`), and display card summary details with leading masks showing only the last 4 digits (`xxxx-xxxx-xxxx-1234`).
