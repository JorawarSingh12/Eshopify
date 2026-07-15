# Sentinel Security Journal 🛡️

## 2025-03-04 - Unprotected Seller Creation Endpoint & Input Validation Bypass
**Vulnerability:** Unauthenticated users could directly navigate to `/Eshopify/becomeSeller` and submit the product creation form. Additionally, there was a complete absence of input validation on product details (such as price and text length limitations), allowing for negative/invalid price injection (causing NaN total checkout calculations) and large text payload uploads.
**Learning:** The application used router-based path definitions without standard higher-order security wrappers or redirection checks on sensitive administrative/creation endpoints, leaving the client side unprotected if users manually changed the URL.
**Prevention:** Always implement explicit authentication guards (such as a conditional check on `uid` leading to redirection) at the render level of all components handling sensitive data modifications, and programmatically validate and bounds-check all incoming input properties on submit.
