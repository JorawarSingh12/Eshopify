## 2026-08-24 - Payment Details Exposure in Checkout Review
**Vulnerability:** Full credit card numbers and plaintext CVV field inputs were exposed in clear text during order review and checkout forms.
**Learning:** React form inputs default to text type, and summary/review screens may naively pass raw state variables without masking sensitive PII/PCI-DSS fields.
**Prevention:** Always mask card numbers (showing only the last 4 digits) in review/display components, and configure sensitive inputs like CVV/passwords with `type="password"`.
