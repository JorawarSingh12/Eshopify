## 2026-07-14 - Masking Sensitive Payment Card Data and CVV Input

**Vulnerability:** Checkout workflow displayed unmasked credit card numbers (Primary Account Number) on the order review screen, and CVV verification codes were captured in standard plain text inputs without masking or input length restrictions.
**Learning:** In checkout forms, developer convenience during initial prototyping often results in raw card details being echoed to confirmation/review screens and CVV fields being treated as regular text fields. Under PCI-DSS Requirement 3, card verification values (CVV/CVC) must never be exposed or visible to bystanders (shoulder surfing), and display of PAN must be masked to show at most the last 4 digits.
**Prevention:** Always set CVV input `type="password"` with autocomplete `cc-csc` and input constraints (`maxLength={4}`), and ensure any client-side order review screens mask the PAN to only show the last 4 digits (`•••• •••• •••• 1234`).
