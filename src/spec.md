# Specification

## Summary
**Goal:** Build a clean, mobile-friendly, Gujarati-only 4-page website for “Gayatri Ladies Tailor” using a minimal local-business theme (light background, black text, dark red shop-name accent) and non-photographic illustration placeholders.

**Planned changes:**
- Create SPA routing with exactly four pages: Home, About Us, Services, Contact Us; include a header navigation that highlights the active page.
- Apply Gujarati-only UI copy across all pages and set a Gujarati font globally.
- Enforce strict visual rules site-wide: white/light-cream background, black body text, and a prominent dark-red “Gayatri Ladies Tailor” title.
- Home page: hero section with shop name, tailoring-themed illustration (not a real photo), short Gujarati description, working time (7:00 AM–9:00 PM), and a prominent “Call Now” button linking to `tel:7359316413`; mark image area as replaceable (Gujarati label).
- About Us page: Gujarati content including owner “Patel Geetaben J.” and work-from-home ladies tailoring; include a minimal tailoring-tools illustration/icon placeholder labeled as replaceable (Gujarati).
- Services page: show exactly six services as cards/rows (Gujarati), each with a simple non-photo icon/illustration; mobile-friendly layout.
- Contact Us page: show phone number (clickable `tel:`), working hours, Gujarati call-to-action, and a minimal contact illustration placeholder labeled as replaceable (Gujarati).
- Add generated illustration/icon assets as static files under `frontend/public/assets/generated` and reference them from the relevant sections with Gujarati alt text.

**User-visible outcome:** Visitors can browse a Gujarati-only, mobile-friendly website with Home/About/Services/Contact pages, see services and business details, and tap to call 7359316413; all imagery is minimal illustration-based and clearly marked as replaceable.
