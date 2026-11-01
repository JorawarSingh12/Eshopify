## 2026-03-31 - Mask Primary Account Numbers and Secure CVV Inputs

**Vulnerability:** Cleartext PAN (credit card number) displayed in the checkout review step and unmasked CVV input in the payment form exposing cardholder data to shoulder surfing and violating PCI-DSS Requirement 3.3.
**Learning:** Displaying sensitive card details in client-side checkout review summaries or using default text inputs for CVV leaves cardholder authentication and payment information exposed in the DOM and visible on-screen.
**Prevention:** In order review components, mask the credit card number to display only the last 4 digits (e.g., `•••• •••• •••• 1234`). On CVV input fields, always configure `type="password"`, `inputProps={{ maxLength: 4, pattern: "\\d*" }}`, and `autoComplete="cc-csc"`.
