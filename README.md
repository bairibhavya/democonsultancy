# GlobalPath Overseas Consultancy — React website + CRM demo

A responsive, photographic React + Vite website inspired by the supplied GlobalPath design montage. The project uses navy blue, warm gold, translucent glass panels, serif headings, destination photo cards, and a complete editable demonstration admin workspace.

## Getting started

1. Extract this ZIP to a new folder.
2. Open **GlobalPath-React-Complete** in VS Code (the directory that contains `package.json`).
3. In the VS Code terminal run:

   ```powershell
   npm install
   npm run dev
   ```

4. Open the **Local** URL that Vite prints, usually `http://localhost:5173`.
5. Admin demo: `http://localhost:5173/admin`.

> This is **React + Vite**, not Python or a static HTML-site substitute. Do not use `py -m http.server` to run the application.

## Included pages

| Path | What works |
|---|---|
| `/` | Navy-and-gold photographic hero, country cards, study finder with live country suggestions, service cards and sample success stories |
| `/destinations` | Instant country search (no Enter key required), category filters and sorting |
| `/destinations/australia` etc. | Country details with working Overview / Universities / Courses / Cost / Visa / Scholarships tabs |
| `/services` and `/services/:slug` | Services listing and individual service information |
| `/immigration` | Work and settlement information with appropriate legal disclaimers |
| `/scholarships` | Country-specific scholarship information and links to country pages |
| `/process` | Five-step application guidance timeline |
| `/stories` | Clearly labeled sample testimonials |
| `/about` | Consultancy information page |
| `/contact` and `/counselling` | Functional client-side form validation and local demo CRM enquiry creation |
| `/admin` and `/admin/*` | Demo dashboard, enquiry status editing, applications, students, destination editing, testimonials, CSV exports, settings |
| `/privacy` | Placeholder privacy information and demo data notice |

## Search behavior

Typing `a`, `aus`, `CAN`, `g` etc. updates destination suggestions/results **on every keystroke**. Country names, words in the country name, and city names are searched case-insensitively. `npm test` runs the offline search test suite.

## Important — demo vs production

The website's admin screen is a **DEMO**. It does not have real authentication or role-based protection. Example records and user-submitted demo enquiries are saved in **localStorage in that browser**, not on a server and not across devices. The admin demo **must not** be used to process real applicant information, passports, legal documents, or financial details.

Before deployment to a paying client:

- Implement a protected backend (e.g. Supabase with correct per-role RLS, or an audited server API) for inquiries, applications, and student records.
- Implement real administrator sign-in and secure account management; replace localStorage persistence with an authenticated server-backed data store.
- Replace fake/sample testimonials, all sample institution claims, photographic concept artwork, and placeholder contact details with authorized real business information.
- Have the consultancy verify every admissions, immigration, scholarship, and financial claim with official sources. Never guarantee visas, scholarship awards, jobs or permanent residency.
- Replace the placeholder Privacy page with a lawful notice appropriate for the actual jurisdiction and activities.
- Obtain necessary consent before displaying student photos or testimonials.
- Implement email/SMS notifications using secure server-side credentials, not client-side API keys.
- Test live booking/contact delivery, access permissions, mobile layouts, and Vercel deployment.

No database credentials or secrets are included in this ZIP. That is intentional.

## Where to customize

- Business brand and contact placeholders: `src/data/content.js` (`BRAND`)
- Countries, services, process: `src/data/content.js`
- Marketing / page components: `src/pages/Public.jsx`
- Admin dashboard / management: `src/pages/Admin.jsx`
- Styles and mobile breakpoints: `src/styles.css`
- Static images: `public/images/`
- Example storage logic: `src/lib/store.jsx`

Some images are locally extracted **concept visuals** from the supplied montage (not licensed real-student or institutional images); larger remote photos use Unsplash. The `Photo` component falls back to local images on network/image errors. Review image rights before commercial use.

## Build and deploy

```powershell
npm install
npm run build
npm run preview
```

On Vercel: Framework = Vite; Build Command = `npm run build`; Output Directory = `dist`. The included `vercel.json` rewrites deep links back to the app entry point.

## Tests and known limits

The supplied project has passed JavaScript/JSX parse checks, relative import resolution, CSS parsing, image-path checks, search tests, and a static CSS-rendering check at desktop and mobile viewports. The tool environment could **not reach the npm registry**, so a real `vite build` and React browser interaction test were not possible in this environment; run these tests on your machine before launch.

## Screen recording tip

For client demos use the actual running website for authentic clicking/scrolling. Keep the `DEMO MODE` label visible in admin recordings to avoid representing fictional records as real client performance.
