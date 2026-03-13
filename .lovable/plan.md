
The issue is that both the navigation and hero section currently use the same logo file (`@/assets/haimi-logo.png`). When you replaced it, both locations were updated.

To fix this and use different logos for navigation vs. the main hero screen:

1. **Save the new black logo to a separate file** - Copy the uploaded image to `src/assets/haimi-logo-nav.png` (keeping the existing `haimi-logo.png` for the hero section)

2. **Update Navigation.tsx** - Change the import to use the new black logo file

3. **Keep HeroSection.tsx unchanged** - It will continue using the original `haimi-logo.png`

The navigation uses `brightness-0 invert` CSS filters on the logo. Since the new logo is already black, I'll need to remove those filters so it displays correctly on the gold background.
