
# Merge branch 'main' into feature/bootstrap

## Overview
Base: origin/main

Head: feature/bootstrap

Stats: 115 files changed, 2293 insertions(+), 1864 deletions(-)

## Changes
Describe the purpose and high-level changes introduced in this branch.

- What problem does this solve?
- Why is this approach chosen?
- Any user-facing impacts or screenshots (if applicable)?

## Commits
- cd4fbd4 Spinner styles correctly (Leoni Lubbinge, 2025-08-09)
- 49cfbdf Simplify and standardise all stylesheets (Leoni Lubbinge, 2025-08-09)
- 4b6c823 Really working now (Leoni Lubbinge, 2025-08-09)
- 33d2b5c Bootstrap styling correct again (Leoni Lubbinge, 2025-08-09)
- 97b1cdc Use namespaces in the custom stylesheet (Leoni Lubbinge, 2025-08-08)
- e7a10c8 Get styles working globally (Leoni Lubbinge, 2025-08-08)
- 96d77e9 Add some more details to the architecture document. (Leoni Lubbinge, 2025-07-14)
- f8af773 Fix the e-mail regular expression (Leoni Lubbinge, 2025-07-13)
- 122ad5f Improve the architecture document (Leoni Lubbinge, 2025-07-13)
- 1650ff8 Add the BosNinja logo in black and white Mark where more detail is required in the architure document. (Leoni Lubbinge, 2025-07-13)
- 29d846f Create  a custom component for the links page Add BosNinja link (Leoni Lubbinge, 2025-07-13)
- e16a15d Create a content component for the news page (Leoni Lubbinge, 2025-07-13)
- 2a56d43 Create new content components (Leoni Lubbinge, 2025-07-13)
- 65784f9 Work on the architecture file (Leoni Lubbinge, 2025-07-13)
- 65f8a91 Move the routes to a sub-directory. Rename the model directory. (Leoni Lubbinge, 2025-07-13)
- 0d6fc25 Re-instate the architecture file. Remove the icomoon fonts. (Leoni Lubbinge, 2025-07-13)
- 8c2b4fb Update the version 3 change log (Leoni Lubbinge, 2025-07-12)
- ec22d58 Create a README and ARCHITECTURE template (Leoni Lubbinge, 2025-07-12)
- 06c8bf3 Change the README file names to code (Leoni Lubbinge, 2025-07-06)
- 395e5fe Move the current CHANGELOG to history for version 4.0.0 (Leoni Lubbinge, 2025-07-06)
- fefe45c Update the sitemap (Leoni Lubbinge, 2025-07-06)
- 5fb8c05 Fix capitilasion of routes (Leoni Lubbinge, 2025-07-06)
- 80445f2 Fix the styles (Leoni Lubbinge, 2025-07-06)
- 1c1c05b Refactor some styles (Leoni Lubbinge, 2025-07-06)
- b0a15cd Override styles correctly (Leoni Lubbinge, 2025-07-06)
- b29d6d5 Use @use and @forward instead of @import (Leoni Lubbinge, 2025-07-05)
- 457a63c Improve the generality of the world shoot component (Leoni Lubbinge, 2025-07-05)
- aec2d3d Get rid of warnings Add IntelliJ configs (Leoni Lubbinge, 2025-07-05)
- b7132c2 Modify comments in .gitignore (Leoni Lubbinge, 2025-07-05)

## Files Changed
- M: .env.local
- M: .gitignore
- A: .idea/.gitignore
- A: .idea/codeStyles/codeStyleConfig.xml
- M: .idea/inspectionProfiles/Project_Default.xml
- A: .idea/jsLinters/eslint.xml
- A: .idea/prettier.xml
- A: .idea/scopes/src.xml
- A: .junie/guidelines.md
- D: .vscode/tasks.json
- M: ARCHITECTURE.md
- M: CHANGELOG.md
- A: HISTORY.md
- M: README.md
- M: RELEASE_NOTES.md
- M: builders/RoutesSitemap.ts
- A: docs/plan.md
- R100: documentation/screenshots/HistoryPage.png → docs/screenshots/HistoryPage.png
- A: docs/tasks.md
- A: docs/templates/CHANGELOG.md
- A: docs/templates/RELEASE_NOTES.md
- M: package-lock.json
- M: package.json
- A: public/assets/images/logos/bosninja-logo-bw.png
- A: public/assets/images/logos/bosninja-logo.png
- M: public/sitemap.xml
- M: src/App.scss
- M: src/App.tsx
- D: src/assets/fonts/icomoon/glyphs/icomoon.eot
- D: src/assets/fonts/icomoon/glyphs/icomoon.svg
- D: src/assets/fonts/icomoon/glyphs/icomoon.ttf
- D: src/assets/fonts/icomoon/glyphs/icomoon.woff
- D: src/assets/fonts/icomoon/license/license-162363863.pdf
- D: src/assets/fonts/icomoon/license/license-162363863_Page_1.png
- D: src/assets/fonts/icomoon/license/license-162363863_Page_2.png
- D: src/assets/fonts/icomoon/style.css
- A: src/assets/stylesheets/_colors.scss
- R100: src/assets/stylesheets/styles-font.scss → src/assets/stylesheets/_fonts.scss
- R072: src/assets/stylesheets/styles-classes.scss → src/assets/stylesheets/_forms.scss
- A: src/assets/stylesheets/_icons.scss
- R069: src/assets/stylesheets/styles.scss → src/assets/stylesheets/_standard.scss
- A: src/assets/stylesheets/_theme.scss
- A: src/assets/stylesheets/_variables.scss
- R100: src/assets/stylesheets/styles-color.png → src/assets/stylesheets/images/_colors.png
- A: src/assets/stylesheets/style.scss
- D: src/assets/stylesheets/styles-color.scss
- D: src/assets/stylesheets/styles-custom.scss
- D: src/assets/stylesheets/styles-icon.scss
- D: src/assets/stylesheets/styles-theme.scss
- D: src/assets/stylesheets/styles-variables.scss
- A: src/components/Content/ContentWithStories.tsx
- A: src/components/Content/LinkWithLogoAndDescription.module.scss
- A: src/components/Content/LinkWithLogoAndDescription.tsx
- M: src/components/Map/SimpleVenueMap.tsx
- M: src/components/Map/VenueMap.tsx
- M: src/components/Map/VenuePin.tsx
- M: src/components/Map/VenuePins.tsx
- M: src/components/Sidebar/ImageSidebar.module.scss
- M: src/components/Text/SanitizedWidget.tsx
- M: src/components/Title/PageTitle.module.scss
- M: src/components/Video/YouTubeVideo.tsx
- R050: src/config/AppRoutes.tsx → src/config/Routes/AppRoutes.tsx
- R096: src/config/BaseRoutes.ts → src/config/Routes/BaseRoutes.ts
- R073: src/config/RouteAliases.tsx → src/config/Routes/RouteAliases.tsx
- R100: src/config/index.tsx → src/config/Routes/index.tsx
- M: src/constants/AppConstants.ts
- A: src/constants/ContentConstants.ts
- M: src/constants/about/ClubConstants.ts
- M: src/content/pages/AboutUs/AboutUs.module.scss
- M: src/content/pages/AboutUs/AboutUsConstants.ts
- M: src/content/pages/AboutUs/AboutUsContent.tsx
- D: src/content/pages/Links/Links.module.scss
- A: src/content/pages/Links/LinksConstants.ts
- M: src/content/pages/Links/LinksContent.tsx
- M: src/content/posts/Events/EventsContent.tsx
- M: src/content/posts/Events/stories/WorldShoots/2025/WorldShoot2025.module.scss
- M: src/content/posts/Events/stories/WorldShoots/2025/WorldShoot2025Constants.tsx
- M: src/content/posts/Events/stories/WorldShoots/WorldShoot.module.scss
- M: src/content/posts/Events/stories/WorldShoots/WorldShootConstants.tsx
- M: src/content/posts/Events/stories/WorldShoots/WorldShootContent.tsx
- M: src/content/posts/Members/MembersContent.tsx
- R100: src/components/Map/VenueMap.module.scss → src/content/posts/News/NewsConstant.tsx
- A: src/content/posts/News/NewsContent.tsx
- M: src/content/posts/Venues/VenueConstants.ts
- M: src/content/posts/Venues/Venues.module.scss
- M: src/content/posts/Venues/VenuesContent.tsx
- M: src/forms/ContactUs/ContactUsForm.tsx
- M: src/forms/ContactUs/ContactUsSchema.ts
- M: src/helpers/MenuHelpers.tsx
- M: src/helpers/RouteHelpers.tsx
- M: src/layout/Body/Body.module.scss
- M: src/layout/Body/Body.tsx
- A: src/layout/Content/index.ts
- M: src/layout/Footer/Footer.module.scss
- M: src/layout/Footer/FooterContent.tsx
- M: src/layout/Header/Header.module.scss
- M: src/layout/Header/HeaderMenu.tsx
- M: src/layout/Layout.module.scss
- M: src/layout/LayoutProps.ts
- R100: src/model/Email.ts → src/models/Email.ts
- R100: src/model/EmailAttachment.ts → src/models/EmailAttachment.ts
- R064: src/model/EmailContent.ts → src/models/EmailContent.ts
- R079: src/model/EmailMessage.ts → src/models/EmailMessage.ts
- R100: src/model/PageAlias.ts → src/models/PageAlias.ts
- R100: src/model/PageMapping.ts → src/models/PageMapping.ts
- R100: src/model/SitemapMapping.ts → src/models/SitemapMapping.ts
- R100: src/model/Venue.ts → src/models/Venue.ts
- R091: src/model/VenueEvent.ts → src/models/VenueEvent.ts
- M: src/pages/News/NewsPage.tsx
- M: src/services/EmailService.ts
- M: src/templates/ContactUs/ContactUsEmailTemplate.tsx
- M: src/utils/HtmlUtils.ts
- M: src/utils/MapUtils.ts
- A: src/vendors/bootstrap/stylesheets/_custom.scss
- A: src/vendors/bootstrap/stylesheets/style.scss

## Checklist
- [ ] Code builds locally (npm run build)
- [ ] Lint passes (npm run lint)
- [ ] Tests added/updated if needed (npx vitest run)
- [ ] Docs/README updated if behaviour changed
- [ ] No sensitive secrets or keys committed

## Metadata
Generated: 2025-08-14 19:00:46 +02:00
Generator: builders/GeneratePrDescription.ts

