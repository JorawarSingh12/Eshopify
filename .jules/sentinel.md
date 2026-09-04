## 2026-03-30 - Payment Card Data Masking and CVV Protection
**Vulnerability:** Full credit card numbers were rendered in plain text on the order review summary, and the CVV field in the payment checkout form was rendered as a plain text input field without `type="password"`.
**Learning:** Display components handling payment summary forms can inadvertently expose full Primary Account Numbers (PAN) and sensitive payment verification values (CVV/CVC) on screen, violating PCI-DSS requirements and risking shoulder surfing or session data leakage.
**Prevention:** Always mask card numbers to show at most the last 4 digits on display screens (`xxxx-xxxx-xxxx-1234`), and explicitly set `type="password"` on CVV/CVC input fields in payment forms.
