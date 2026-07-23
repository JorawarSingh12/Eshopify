# Sentinel Security Journal

## 2025-07-23 - Masking Payment Card Data (PCI-DSS Compliance)
**Vulnerability:** Unmasked display of raw credit card numbers on order review components, and exposed plaintext input for CVV fields during checkout.
**Learning:** Raw payment information was stored as simple strings and passed between views. Without masking, sensitive PII could be leaked on-screen or stored insecurely, violating PCI-DSS compliance and presenting a shoulder-surfing risk.
**Prevention:** Always mask credit card numbers on display views (e.g., showing only the last 4 digits), and ensure the CVV input uses `type="password"` with appropriate character and length restrictions.
