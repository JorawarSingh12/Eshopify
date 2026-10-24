## 2026-10-24 - Payment PII Exposure in CVV Input and Review Display
**Vulnerability:** The CVV text field in `PaymentForm` lacked `type="password"`, allowing sensitive CVV codes to be visible as plain text. Additionally, `Review` rendered the full credit card number in cleartext on the order summary screen.
**Learning:** React form controls and summary components were rendering raw payment state properties directly without considering shoulder surfing, PII protection, or PCI-DSS compliance requirements.
**Prevention:** Always mask CVV input fields (`type="password"`, `maxLength: 4`) and display credit card numbers with masking (e.g., showing only the last 4 digits) across all frontend components.
