## 2025-05-18 - Mask Sensitive Payment Information and CVV Inputs

**Vulnerability:** CVV input fields were rendered without `type="password"`, allowing sensitive security codes to be visible in plain text. Additionally, credit card numbers were rendered unmasked on the order summary review screen.

**Learning:** Displaying unmasked credit card numbers and CVV values exposes PII and sensitive payment details to shoulder surfing, screenshots, and visual eavesdropping, violating PCI-DSS security guidelines.

**Prevention:** Ensure all CVV input fields use `type="password"` with restricted length attributes (`inputProps={{ maxLength: 4 }}`). Mask credit card numbers on display and review screens (e.g. showing only `XXXX-XXXX-XXXX-1234`).
