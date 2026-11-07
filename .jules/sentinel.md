# Sentinel's Journal

## 2026-11-07 - Masking Payment Card Data & CVV Field Security
**Vulnerability:** In `Review.js`, the full credit card number was displayed in plain text alongside partial BIN exposure (`detail: cardDetails.cardNumber`). In `PaymentForm.js`, the CVV input was rendered as plain text (`type` unspecified, defaulting to `text`), exposing security verification codes to shoulder surfing, DOM inspection, and casual screen observers.
**Learning:** Checkout flows must treat primary account numbers (PAN) and card verification codes (CVV/CVC) in accordance with PCI-DSS guidelines. Displaying full card numbers on confirmation pages is unnecessary and creates exposure risk. Similarly, CVV fields should always have password masking (`type="password"`), length limits (`maxLength="4"`), and standard autocomplete attributes (`autoComplete="cc-csc"`).
**Prevention:** Always mask PAN by default across all UI review pages (only rendering `•••• •••• •••• ${last4}`), never log or display card verification values, and enforce masked password inputs for card security codes.
