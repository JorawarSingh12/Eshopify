## 2026-03-31 - Masking Sensitive Payment CVV Field

**Vulnerability:** The CVV input field in `PaymentForm` was rendered as an unmasked text field (`type="text"` by default) without `required` validation or value binding, exposing sensitive credit card verification credentials on screen.
**Learning:** React Material UI `TextField` defaults to plaintext `type="text"` unless explicitly configured as `type="password"`. Payment forms handling PCI sensitive data require explicit password inputs to prevent shoulder surfing and accidental video/screenshot leaks.
**Prevention:** Always enforce `type="password"` and proper validation attributes on sensitive payment input fields such as CVVs and PINs.
