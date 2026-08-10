## 2025-02-18 - [Secure Payment Data Masking & CVV Password Masking]
**Vulnerability:** Credit card details (PII) were displayed in plain text in the order Review screen without masking, violating PCI-DSS compliance and risking sensitive data leakage. Additionally, the CVV input field was unmasked (visible plain text) and lacked input constraints.
**Learning:** Legacy components developed without security requirements often default to generic unmasked input/display components, which is unsafe for critical financial/PII values.
**Prevention:** Always enforce masking (e.g., showing only the last 4 digits) for sensitive fields in user-facing components, and use `type="password"` with strict input restriction attributes for inputs like CVVs.
