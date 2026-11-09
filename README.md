# tulipix-web

The website for **tulipix.pro**, built to be hosted by GitHub Pages from `github.com/atishsharma/tulipix-web`.

```
CNAME                       tulipix.pro  (tells GitHub Pages the custom domain)
.nojekyll                   serve the files as they are
index.html                  tulipix.pro            (Tulipix logo; the apps)
404.html                    shown for any page that does not exist
manager/index.html          tulipix.pro/manager/   (Tulipix Manager logo; the app's page)
manager/privacy/index.html  tulipix.pro/manager/privacy/
manager/Download/           put tulipix-manager-app.apk here (not included)
manager/terms/index.html    tulipix.pro/manager/terms/
assets/                     shared CSS, self-hosted fonts, Tulipix logo and favicons
manager/assets/             the Manager's CSS, JS, logo, favicons and screenshots
robots.txt, sitemap.xml
```

## Put it on GitHub

1. Copy **everything in this folder** (including the hidden files `.nojekyll` and `CNAME`) into the root of the `tulipix-web` repo. Commit and push to `main`.
2. Repo › Settings › Pages › Build and deployment: Source **Deploy from a branch**, Branch **main**, folder **/ (root)**.
3. In Pages › Custom domain, type `tulipix.pro` and Save (the `CNAME` file already says it).
4. Change the DNS records at your domain registrar: four A records for `@` and a CNAME for `www` pointing to `atishsharma.github.io`. The step-by-step DNS guide is the separate page that came with this site.
5. When GitHub has issued the certificate, tick **Enforce HTTPS**.

## Before it goes public

- **Download button.** The page links to `manager/Download/tulipix-manager-app.apk`. Put the APK in a `manager/Download/` folder with exactly that name. GitHub refuses files over 100 MB (and warns above 50 MB), and the APK is close to that, so if it outgrows the limit, point the link at a GitHub Release asset instead.
- **Google Play button.** Already points to `https://play.google.com/store/apps/details?id=app.tulipix.phone`.
- **Coming-soon apps.** Tulipix Companion and TypeCase are listed on `index.html` as coming soon. Turn each into a link when its page exists.
- **Privacy and terms** are drafts written from how the app works. Have someone qualified read the terms, especially clauses 8 and 10 (liability and governing law).
- The site sets no cookies and loads nothing from another domain: the fonts are self-hosted. Keep it that way.

## Preview on your computer

```
cd tulipix-web && python3 -m http.server 8000
```

Then open http://localhost:8000/ and http://localhost:8000/manager/ . Browsers cache CSS hard: use a private window or Ctrl+Shift+R after edits. The 404 page uses paths from the site root, so test it on the live domain.

## Editing

- Colours and type are CSS variables at the top of `assets/css/base.css`. Tulipix (warm) and Manager (cool) differ only by `body.site-main` and `body.site-manager`.
- The menu and the footer are the same markup on every page; change one and change the rest.
- `manager/assets/manager.js` only closes the phone menu; everything else is plain HTML and CSS.
- Screenshots in `manager/assets/shots/` are WebP, 560 px wide, quality about 78.
- Fonts: Bricolage Grotesque and Lexend, both SIL OFL (see `assets/fonts/FONTS.txt`).
