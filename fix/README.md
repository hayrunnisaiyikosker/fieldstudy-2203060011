# Accessible, validated visit form (Challenge fix)

## Problem and evidence
The original "Tesis Ziyaret Formu" on the municipality website has three problems:
labels are not linked to inputs [B5], required fields are not marked and errors
come only from the browser, in English and one at a time [B4], and Lighthouse
reports missing form labels [B7].

## What I built
My own version of the form, using React, Vite, TypeScript and Zod. It does not
copy the site's code, text or images, and it never sends data anywhere.

Run it:

```
npm install
npm run dev
```

## Before and after
All measurements were made on 9 November 2026 in Chrome, Lighthouse
Accessibility, Mobile mode. The "after" score was measured on the dev server.

| Measure | Original | My fix |
|---|---|---|
| Lighthouse Accessibility (Mobile) | 59 | 100 |
| Clicking a label focuses its input | No | Yes |
| Required fields marked | No | Yes |
| Error language | English (browser) | Turkish (own messages) |
| Errors shown | One at a time, browser bubble | All at once, under each field |

Screenshots: `fix-before-lighthouse.png`, `fix-after-lighthouse.png`,
`fix-after-label-click.png`, `fix-after-all-errors.png`,
`fix-after-values-kept.png`, `fix-after-custom-rule.png`.

## One design decision
In the original form, visitors could not tell which fields were required before submitting, so they had to guess and try again. I made two choices to fix this.
First, every required field is marked with a star (*) and a short note at the top says "* zorunlu alan". Second, when the form is submitted incomplete, all errors appear at once under their fields, and focus moves to the first invalid field. This way visitors can see everything that needs fixing and where to start, instead of finding the problems one at a time.

## AI use
I used an AI assistant to help with the code and with the layout and design of the form, and to improve the English of this README. I tested the form and took all measurements and screenshots myself.