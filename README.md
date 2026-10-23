# The Beauty Method — Website

Static HTML/CSS/JS site for The Beauty Method, Aptos, CA. No build step, no framework.
Designed and built by aglowstudios.ai.

## Files
- `index.html`, `services.html`, `about.html`, `visit.html`, `thanks.html`, `404.html`
- `styles.css` — all styling
- `script.js` — booking-link config, mobile menu, footer year, scroll reveal
- `assets/` — logo, favicon mark, practitioner portrait, hero image
- `netlify.toml` — security headers and clean-URL rewrites
- `robots.txt`

## Local development
From `/workspace/beautymethodsite`, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

No dependencies or build step are required. Python serves the `.html` pages directly;
Netlify applies the clean-URL rules in `netlify.toml` after deployment.
Netlify Forms submissions must be tested on Netlify, not the local static server.

## Deploy (GitHub → Netlify)
Repository: `meganaglow/beautymethodsite`. Deployment branch: `main`.
Existing Netlify project: `beautymethodpreview`.

One-time connection in the existing Netlify project's dashboard:
1. Open Project configuration → Build & deploy → Continuous deployment → Link repository.
2. Choose GitHub and `meganaglow/beautymethodsite`.
3. Select `main`, leave the base directory and build command blank, and set the publish directory to `.`.
4. Keep the existing visitor password protection enabled.
5. Enable form detection under Forms if it is not already enabled, then deploy.

Once linked, Netlify automatically deploys each push to `main`, as with the ACA site.
Edits must be committed and pushed to GitHub to trigger deployment; saving a local file alone does not deploy.
Check the Netlify deploy result and test the contact form on the protected deployed site.
The visitor password is managed in Netlify and is not stored in this repository.

## Booking link
All "Book an Appointment" buttons are controlled by one line at the top of `script.js`:
`const BOOKING_URL = "https://fklyz.myaestheticrecord.com/online-booking/h/M18zMzIzNV9jbGluaWNz";`
Every button on every page opens this URL in a new tab. Set it to `null` to fall back to the consultation-request form on `visit.html`.

## Contact form
The form on `visit.html` uses Netlify Forms. Submissions appear in the Netlify dashboard under **Forms**. Notifications go to Jillian's private email (dashboard setting, not in these files; not shown on the site).
The form is for general contact only. Visitors are instructed not to submit medical history; do not add fields requesting protected health information.

## Laser treatments (added Oct 2026)
Device: Candela Nordlys — SWT IPL, Frax 1550, Frax 1940.
- `services.html#ipl` (04 IPL Photofacial) and `services.html#resurfacing` (05 Laser Resurfacing). An `id="laser"` alias keeps old `#laser` links working.
- Both Frax handpieces are described as **non-ablative**, matching Candela's labeling (client email said "1940 Fractional Ablative").
- **Pending before deploy:** `[CLIENT: ...]` placeholders for appointment length, series, results timing, downtime, and two image slots (`.treatment-media--pending`). Replace each pending figure with `<figure class="treatment-media"><img src="assets/..." alt="..."></figure>` once Candela media and usage rights are confirmed.
- Clinical copy requires Nik's sign-off.

## Outstanding
- **Facebook username is off-brand** (`facebook.com/novellaskin`). If changed, update the footer link on all pages.
- **Instagram handle** `nurseinjector_jillian` — confirm.
- Business hours — not published; client has not supplied them.
- Privacy policy — client confirmed not needed; `privacy.html` removed.
- Jillian Osland Matejcek portrait, if one is provided later.

## Regulatory notice
Per the client (California Medical Board requirement), the legal entity name **The Beauty Method Inc.** and the supervising physician **Nikolas Greenson, MD** must be obvious and easy to find. Both appear in the footer brand block on all main pages, and as a Medical Director row on the Contact page. Do not remove either without client sign-off.

## Brand
- Logo files in `assets/` are the client's supplied artwork; `beauty-method-logo-source.png` is the untouched original.
- Fonts: Cormorant Garamond (display) and Inter (text), loaded from Google Fonts.
- The hero image is an AI-generated concept image; replace with licensed or commissioned photography if preferred.
