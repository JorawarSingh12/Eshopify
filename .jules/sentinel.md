## 2026-03-31 - Masking CVV/CVC Input Fields in Checkout Forms
**Vulnerability:** CVV input field in payment form was using standard plain-text input without `type="password"`, exposing sensitive payment verification values to shoulder-surfing, screen sharing, or visual capture.
**Learning:** React Material-UI TextFields default to `type="text"` unless explicitly configured as `type="password"`. Sensitive card verification inputs (CVV/CVC) must be masked to comply with PCI-DSS guidelines.
**Prevention:** Always enforce `type="password"` and input length restrictions (`maxLength: 4`) on payment security code inputs, and complement with unit tests checking element attributes.
