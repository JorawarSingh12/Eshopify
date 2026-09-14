## 2026-09-14 - Mask Credit Card Numbers and Secure CVV Inputs in Checkout

**Vulnerability:** The `Review.js` component exposed the full credit card number in cleartext on the order summary page, and `PaymentForm.js` lacked `type="password"` on the CVV input field, violating PCI-DSS data protection standards and exposing sensitive PII.

**Learning:** UI checkout components built with standard text input components can easily leak sensitive cardholder data if default text input props are used and raw state properties are directly formatted into labels without explicit masking.

**Prevention:** Ensure CVV input fields always explicitly declare `type="password"`, and pass credit card numbers through a masking helper (e.g. `xxxx-xxxx-xxxx-1234`) before rendering in order summaries or logs.
