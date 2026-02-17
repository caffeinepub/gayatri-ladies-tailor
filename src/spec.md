# Specification

## Summary
**Goal:** Remove all auto-inserted/generated illustrations and replace them with empty, optional, user-controlled upload placeholders, while updating all site copy to formal Gujarati for the tailoring business details.

**Planned changes:**
- Update the shared image component (e.g., ReplaceableImage) to support an empty state with an in-place “Upload Image / Add Image” CTA, client-side file selection, and per-area preview without requiring a src URL.
- Replace all currently auto-rendered images/icons across Home, About, Services, and Contact with empty upload placeholders so the layout remains complete and professional even with no uploads.
- Update all site text to Gujarati-only (formal tone) and include business scope (Ladies, Gents & Kids tailoring; work-from-home), owner name (Patel Geetaben J.), working hours (7:00 AM to 9:00 PM), and a clickable mobile number (7359316413).
- Update the Contact page to display the full provided multi-line address exactly as given.
- Replace the Services list with exactly 6 services (formal Gujarati) and include an optional upload placeholder area for each service image/icon.
- Add the “Important Note” content prominently as a distinct Gujarati callout block on an appropriate page section so it’s clearly visible without images.

**User-visible outcome:** The site shows no default illustrations; every image area offers an “Upload Image / Add Image” control with preview, and visitors see fully Gujarati business content (including services, contact details, hours, owner name, and full address) even if no images are uploaded.
