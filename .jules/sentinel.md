## 2026-03-31 - Masking Payment Information and CVV Password Configuration

**Vulnerability:**
The payment review component displayed full credit card numbers in clear text, and the payment form CVV field used default clear-text input types, exposing sensitive financial data and PCI/PII information on screen.

**Learning:**
React forms handling payment details must ensure sensitive input fields (like CVV) explicitly configure `type="password"` and display components mask all card digits except the last 4. Additionally, Redux-connected test suites rendering `<App />` require a mock `<Provider>` store context to avoid context error failures.

**Prevention:**
Always use `type="password"` for CVV security inputs and format credit card strings with masking (e.g. `•••• •••• •••• 1234`) prior to rendering in order to maintain PCI-DSS compliance and prevent shoulder surfing or unintended PII leakage.
