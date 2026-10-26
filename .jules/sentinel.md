## 2026-03-30 - Masking Sensitive Payment Data (CVV & Card Numbers)
**Vulnerability:** Payment form CVV input field lacked `type="password"` input masking, and full credit card numbers were displayed in plain text on the order review summary.
**Learning:** Default Material UI `TextField` components default to plain text inputs unless explicitly configured with `type="password"`, and display components can easily leak sensitive card digits if not explicitly masked.
**Prevention:** Ensure CVV inputs always enforce `type="password"` and length restrictions, and mask credit card numbers on summary screens to show only the last 4 digits for PCI-DSS compliance.
