## Part A: Under the hood

**A1. HTTPS and redirects.** When I typed the address with `http://`, the server answered with a 301 Moved Permanently status and sent my browser to `https://www.gaziantep.bel.tr/`, which then loaded normally with status 200. The padlock shows a secure connection and a valid certificate. It was issued by Sectigo to `*.gaziantep.bel.tr` (a wildcard certificate that covers all subdomains), is valid from 19 February 2026 and expires on 20 February 2027. This means visitors who use an old `http://` link still end up on the secure version of the site, and the certificate is currently in good order. The expiry date is about three and a half months away, so the municipality should make sure it is renewed on time. [A1]

## URL Rules Evaluation

**A2. URL structure.**
| # | URL | HTTPS | Short and readable | Lowercase | Hyphens | Few parameters | Overall |
|---|-----|-------|--------------------|-----------|---------|----------------|---------|
| 1 | `https://www.gaziantep.bel.tr/` (home page) | Pass | Pass | Pass | N/A (no words in the address) | Pass (0) | Pass |
| 2 | `https://www.gaziantep.bel.tr/tr/basin/duyurular` | Pass | Pass | Pass | N/A (single-word sections) | Pass (0) | Pass |
| 3 | `https://gaziantep.bel.tr/tr/projeler` | Pass | Pass | Pass | N/A | Pass (0) | Pass |
| 4 | `https://gaziantep.bel.tr/tr/projeler/abdulhamit-han-koprulu-kavsagiyla-trafikte-yeni-donem` | Pass | Partial (slug is long) | Pass | Pass (words separated by `-`, no `_`) | Pass (0) | Partial |
| 5 | `https://www.gaziantep.bel.tr/tr/basin/etkinlikler?name=tiyatro` | Pass | Pass | Pass | N/A | Pass (1 parameter: `name`) | Pass |

I scored five pages against the five URL rules. All five use HTTPS, are written in lowercase, and have no or very few query parameters. The project detail page is the most readable address: its slug uses hyphens and describes the page title, and Turkish letters appear as plain letters (for example "koprulu"), so the address has no unreadable codes. The only parameter I found was `?name=tiyatro` on the events filter, which is short and easy to understand. The one weak point is the long project slug, which is readable but about 50 characters. I also noticed that some pages open on `www.gaziantep.bel.tr` and others on `gaziantep.bel.tr`, so the site seems to use two forms of its main address. I check which one it prefers in A7. [A2]

## Legend
- **Pass**: the URL meets the rule
- **Partial**: the URL mostly meets the rule but could be improved
- **N/A**: the rule does not apply to this URL
