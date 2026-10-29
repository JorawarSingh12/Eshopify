## 2026-07-14 - Masking Sensitive Payment Information (CVV)
**Vulnerability:** Plaintext rendering of sensitive card verification values (CVV) in payment forms.
**Learning:** Default text fields in React forms can inadvertently expose PCI-DSS regulated credentials like CVVs to shoulder surfing or screen capture if `type="password"` is omitted.
**Prevention:** Always enforce `type="password"` and length constraints (`maxLength: 4`) on payment credential inputs like CVVs to prevent inadvertent exposure and comply with PCI-DSS guidelines.
