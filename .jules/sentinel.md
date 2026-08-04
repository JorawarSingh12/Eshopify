# Sentinel Security Journal

This journal documents critical, reusable security learnings and patterns specific to the Eshopify codebase.

## 2026-03-05 - Insecure Payment Processing via CVV Visibility and Unmasked Credit Card Numbers
**Vulnerability:** The application was displaying full, unmasked credit card numbers to users on the Review component of the checkout process. Furthermore, the CVV input field on the PaymentForm was configured as a plain text input with no maxLength constraints, allowing sensitive security codes to be visible in plain text on screen and allowing arbitrary length inputs.
**Learning:** This issue existed because of missing strict client-side controls during the initial user interface implementation. For PCI-DSS compliance and general data privacy (PII protection), credit card numbers must always be masked on the client UI except for the last 4 digits, and CVV fields must act as password inputs to prevent over-the-shoulder snooping.
**Prevention:** Always use `type="password"`, `id` for accessibility, and enforce `maxLength` restrictions on CVV inputs. For display or receipt components, apply a masking utility to show only the last 4 digits of the card number.
