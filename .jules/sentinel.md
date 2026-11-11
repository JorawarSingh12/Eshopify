# Sentinel Journal

## 2026-07-14 - Mask Credit Card Numbers and Secure CVV Inputs in Payment Flow
**Vulnerability:** In `Review.js`, the user's full credit card number was displayed in clear text on the order review screen, and in `PaymentForm.js`, the CVV field lacked password masking, input constraints, and proper autocomplete attributes. This created risks of payment card credential leakage (violating PCI-DSS compliance requirements and defense-in-depth principles) via screen snooping or shoulder-surfing.
**Learning:** React checkout components commonly store full card info in client-side state for processing, but intermediate display/review screens should never re-display raw PANs (Primary Account Numbers) or plaintext CVVs. Only the last 4 digits should ever be rendered to confirm identity.
**Prevention:** Always mask PANs before rendering display components (`•••• •••• •••• 1234`) and ensure sensitive verification inputs like CVV have `type="password"`, `autoComplete="cc-csc"`, and length restrictions.
