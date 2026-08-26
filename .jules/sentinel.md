## 2026-03-31 - Payment PII Data Exposure during Checkout

**Vulnerability:** The CVV text field was rendered as standard plain text (`type="text"`), exposing sensitive verification digits on screen. In addition, the order review screen rendered the entire credit card number in cleartext.

**Learning:** UI forms generated from standard template components without explicit input type overrides or masking helper functions can inadvertently leak PCI-sensitive cardholder details (PAN & CVV) to shoulder surfers or DOM scrapers.

**Prevention:** Always set `type="password"` on CVV/CVC inputs and enforce length restrictions (`maxLength`). Always truncate/mask credit card numbers to display only the last 4 digits (e.g., `xxxx-xxxx-xxxx-1234`) across all review, summary, and receipt components.
