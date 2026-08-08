# Sentinel Security Journal

## 2026-08-08 - Credit Card PII Leakage and CVV Exposure
**Vulnerability:** The review screen exposed the full, plaintext credit card number (`cardDetails.cardNumber`) in the frontend UI rendering. Additionally, the CVV input field lacked `type="password"`, had no `required` attribute, was not controlled, and did not restrict input to numeric digits or length of 3-4 characters, exposing payment details to session leakage and shoulder surfing.
**Learning:** React components (such as `Review.js` and `PaymentForm.js`) handling payment information must strictly implement PCI-DSS compliance practices. Failing to mask payment card numbers on final review steps risks caching/logging sensitive data or exposing it visually, while unmasked CVV inputs allow credential leakage.
**Prevention:** Always mask card numbers before rendering on review screens, leaving only the last 4 digits visible. Configure CVV fields with `type="password"`, `required`, and enforce strict character length and pattern restrictions in the state handler (only allow numeric digits with a maximum length of 4).
