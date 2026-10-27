## 2025-05-18 - Mask Credit Card Numbers and Obfuscate CVVs in Payment Components
**Vulnerability:** Credit card numbers were exposed in plain text in the order summary review component, and CVV fields lacked `type="password"`, leaking sensitive PCI-DSS payment PII visually and in rendered output.
**Learning:** Development UI components often display submitted props directly without masking sensitive fields or setting proper HTML input types.
**Prevention:** Always mask credit card numbers to show only the last 4 digits on display screens and enforce `type="password"` with required attributes on CVV input fields.
