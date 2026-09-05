## 2025-05-18 - Mask Sensitive Payment Details and CVV Input Protection
**Vulnerability:** Full credit card numbers (PAN) were displayed unmasked on the order summary review component, and the CVV input field lacked `type="password"`, exposing sensitive payment information in plain text.
**Learning:** React checkout review components often display state objects directly without mask functions, and default text inputs leave security codes vulnerable to shoulder surfing.
**Prevention:** Always mask card numbers to show only the last 4 digits on confirmation and review pages, and enforce `type="password"` with max length constraints on CVV fields.
