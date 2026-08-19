# Sentinel Journal - Security Learnings

## 2026-03-30 - Masking Sensitive Payment Information and CVV Field Security
**Vulnerability:**
The `PaymentForm` component rendered the CVV input field as standard plain text (`type="text"` by default when omitted), exposing CVV codes visually during user input (shoulder surfing risk). Furthermore, the `Review` component rendered the entire unmasked credit card number in the order review summary screen, leading to PII/PCI-DSS compliance issues.

**Learning:**
React checkout forms using Material UI `TextField` components often default to plain text input unless `type="password"` is explicitly set on sensitive credentials like CVV. Additionally, display components like order reviews may naively render full input values from state unless explicitly masked.

**Prevention:**
Always configure sensitive payment input fields (like CVV/CVC) with `type="password"`. Ensure order summaries or display components only present masked card details (e.g., showing only the last 4 digits `xxxx-xxxx-xxxx-1234`).
