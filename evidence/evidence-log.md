| A1 | evidence/A1-redirect.png | http:// request answered with 301 redirect to https:// | 07.11.2026 16:49 | http://www.gaziantep.bel.tr/ |
| A1 | evidence/A1-padlock.png | Padlock: connection secure, certificate valid | 07.11.2026 16:59 | https://www.gaziantep.bel.tr/ |
| A1 | evidence/A1-certificate.png | Certificate issuer and validity dates | 07.11.2026 16:59 | https://www.gaziantep.bel.tr/ |


| A2 | evidence/A2-url1.png | Home page address | 07.11.2026 17:22 | https://www.gaziantep.bel.tr/ |
| A2 | evidence/A2-url2.png | Announcements page address | 07.11.2026 17:23 | https://www.gaziantep.bel.tr/tr/basin/duyurular |
| A2 | evidence/A2-url3.png | Projects list address (no www) | 07.11.2026 17:23 | https://gaziantep.bel.tr/tr/projeler |
| A2 | evidence/A2-url4.png | Project detail address with long slug | 07.11.2026 17:24 | https://gaziantep.bel.tr/tr/projeler/abdulhamit-han-koprulu-kavsagiyla-trafikte-yeni-donem |
| A2 | evidence/A2-url5.png | Events page with one query parameter | 07.11.2026 17:25 | https://www.gaziantep.bel.tr/tr/basin/etkinlikler?name=tiyatro |


| A3 | evidence/A3-headers.png | Headers panel of the first (document) request | 07.11.2026 20:15 | https://www.gaziantep.bel.tr/ |
| A3 | evidence/A3-summary.png | Network summary bar: number of requests and total size (cache disabled) | 07.11.2026 20:22 | https://www.gaziantep.bel.tr/ |
| A3 | evidence/A3-xhr.png | One Fetch/XHR request and its headers | 07.11.2026 21:14 | https://www.gaziantep.bel.tr/ |
| A3 | evidence/A3-largest.png | Network list sorted by size: largest files are a video and a GIF | 07.11.2026 21:36 | https://www.gaziantep.bel.tr/ |


| A4 | evidence/A4-missingpage.png | 404 page: friendly message, homepage button; Network shows status 404 for the document | 07.11.2026 21:40 | https://www.gaziantep.bel.tr/no-such-page-123 |
| A4 | evidence/A4-language.png | 404 page still in English after choosing Turkish in the language menu | 07.11.2026 21:46 | https://www.gaziantep.bel.tr/no-such-page-123 |


| A5 | evidence/A5-cache.png | Response headers of the main document: Cache-Control private, must-revalidate | 07.11.2026 22:03 | https://www.gaziantep.bel.tr/ |
| A5 | evidence/A5-cache-image.png | Response headers of one image: no Cache-Control, ETag and Last-Modified present | 07.11.2026 22:05 | https://dosya.gaziantep.bel.tr/uploads/new/2026/10/a314e3fd-de6a-4278-9f8e-640659023ed0_original.JPG |


| A6 | evidence/A6-source.png | Raw page source (Ctrl+U): search for the menu word "haberler" finds it | 07.11.2026 23:10 | view-source:https://www.gaziantep.bel.tr/ |
| A6 | evidence/A6-elements.png | Elements panel: same menu word found | 07.11.2026 23:11 | https://www.gaziantep.bel.tr/ |
| A6 | evidence/A6-source-news.png | Raw page source: a news headline from the slider is found | 07.11.2026 23:13 | view-source:https://www.gaziantep.bel.tr/ |
| A6 | evidence/A6-elements-news.png | Elements panel: same headline found | 07.11.2026 23:14 | https://www.gaziantep.bel.tr/ |


| A7 | evidence/A7-seo.png | Console checks: title, meta description, canonical, lang, h1 count, sponsored/ugc count | 08.11.2026 1:18 | https://www.gaziantep.bel.tr/ |


| B1 | evidence/B1-loading-1.png | Loading screen (logo and three dots), about 11 s after reload with the 3G preset | 08.11.2026 01:27 | https://www.gaziantep.bel.tr/ |
| B1 | evidence/B1-loading-2.png | Page content visible, icons shown as empty boxes, about 30 s after reload | 08.11.2026 01:27 | https://www.gaziantep.bel.tr/ |
| B1 | evidence/B1-loading-3.png | News photo only partly drawn, many images still pending, about 1 min after reload | 08.11.2026 01:28 | https://www.gaziantep.bel.tr/ |


| B2 | evidence/B2-empty.png | Events filter with "zzzqqq": message "Kayıt bulunamadı", "Tüm Etkinlikler" button, total 0 records | 08.11.2026 14:45 | https://www.gaziantep.bel.tr/tr/basin/etkinlikler?name=zzzqqq |


| B3 | evidence/B3-offline.png | Chrome's own offline error page shown when opening another page of the site while Offline (cache disabled) | 08.11.2026 16:55 | https://www.gaziantep.bel.tr/tr/basin/duyurular?name=tapu |


| B4 | evidence/B4-form-errors.png | Visit form submitted with "Adı" empty: browser bubble "Please fill out this field." under the field; no required marks before submit | 08.11.2026 17:46 | https://www.gaziantep.bel.tr/tr/tesis-ziyaret-formu |


| B5 | evidence/B5-labels.png | Visit form: clicking label text "Adı" does not move focus into the field | 08.11.2026 17:59 | https://gaziantep.bel.tr/tr/tesis-ziyaret-formu |
| B5 | evidence/B5-label-code.png | Elements panel: <label> for "Adı" has no for attribute; <input> has no id but has required | 08.11.2026 18:00 | https://gaziantep.bel.tr/tr/tesis-ziyaret-formu |