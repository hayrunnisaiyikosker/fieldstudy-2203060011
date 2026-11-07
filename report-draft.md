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

## A3. One Request, Closely

I reopened the home page with the Network panel open and the cache disabled, which simulated a first-time visit.
The first request was for the HTML document. It used the GET method and returned status 200, with the content type text/html; charset=UTF-8.
The HTML file itself was small (about 76 kB), yet the page as a whole made 52 requests and transferred 12.9 MB of data (14.5 MB in total resources). The DOMContentLoaded event fired at 2.87 seconds, and the full page finished loading at 6.35 seconds.
The only Fetch/XHR requests were POST requests to Google Analytics. They returned status 204 (No Content), so they carried no page content.
Overall, the page is quite heavy. The three largest files were two video segments (gaziantep.webm, 4.2 MB and 2.4 MB) and one GIF (chatbot2.gif, 2.3 MB), which is used for the live chat icon. Together they total about 8.9 MB, nearly two-thirds of all transferred data. This can slow the website down, especially on mobile devices with slow connections. I will examine this further in B1. [A3]

## A4. A page that does not exist.

I opened a made-up page address: /no-such-page-123. The server returned status 404 (Not Found), which is correct because the page does not exist.
The visitor sees a simple error page with the municipality logo and the title “Page Not Found!”, along with a short message explaining that the page may have been removed or moved.
The page offers useful navigation options, such as “Go to homepage” and “Go back” buttons. It also includes Quick Links, contact cards, and a bottom navigation bar.
However, there is one problem: the error message is only in English. I tried switching the language to Turkish using the bottom menu, but the page stayed in English. This may confuse Turkish-speaking visitors, since this is a Turkish municipality website. [A4]

## A5. Caching.

The main page uses Cache-Control: private, must-revalidate. This means the browser may store the page on the user’s device, but it must check with the server whether the stored copy is still up to date before using it.
For the image a314e3fd-...original.JPG, which is served from a different domain (dosya.gaziantep.bel.tr), the server response contained no Cache-Control header. The no-cache line I saw in the request headers was added by my browser because I had disabled the cache.
The server did send ETag and Last-Modified headers, which allow the browser to check whether the image has changed. However, there is no explicit rule about how long the browser may keep the image.
Since this is a large image that probably does not change often, setting a longer cache lifetime (for example, with Cache-Control: public, max-age=...) would help. Visitors would not need to download the same image again on later visits. [A5]

## A6. Where the page is built.
I opened the page source with Ctrl+U and searched for text that appears on the website.
The menu word “haberler” and the news title “GAZİANTEP BÜYÜKŞEHİR’DEN ULAŞIM HİZMETLERİNDE YENİ DİJİTAL HAMLE” were already present in the HTML source. I also checked the Elements panel and found the same text there (4 matches for the news title).
This means the server sends the main content as ready-made HTML, so I conclude that the home page uses server-side rendering.
The page still loads many JavaScript files, probably for features such as the news sliders, but the main text is already present without JavaScript. This is beneficial for users on slow connections, and also for search engines, which can read the important content without having to run JavaScript. [A6]

## A7. SEO basics.

I checked the home page for basic SEO elements.
The page has a clear title (“Gaziantep Büyükşehir Belediyesi”) and a meta description that explains the purpose of the website. It also has a canonical link pointing to https://www.gaziantep.bel.tr/. The page language is set to Turkish (lang="tr"), and there is only one h1 heading.
I could not find any rel="sponsored" or rel="ugc" links. This is expected, since the website does not appear to have advertisements or user comments.
Overall, the basic SEO elements are present, and I did not find any major SEO problems on the home page.
The canonical link also shows that the website prefers the www address. This is consistent with my finding in A2, where some pages opened without www. [A7]

## B1. Loading state.

I reloaded the home page with the cache disabled and selected Chrome’s slowest network throttling preset. 
(“3G”; in the current Chrome version, this is the lowest preset available, and the older “Slow 3G” label is no longer shown).
For about 13 seconds, I saw only a loading screen with the municipality logo and three animated dots. The page was not completely blank, but nothing was usable during this time.
After that, the text and page layout appeared, but the images loaded much more slowly. After one minute, only about 3.3 MB had been downloaded, and many news images were still loading. One image was only partially visible, and no placeholder was shown while it loaded.
The small icons appeared as empty boxes, probably because the icon font had not loaded yet. The background video was also not visible.
This can be a problem for visitors with slow connections. They have to wait a long time, and even after the page appears, some parts are still missing.