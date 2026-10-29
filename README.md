# Ria — Personal Portfolio

A responsive static portfolio built with HTML, CSS, and vanilla JavaScript. No build step or package installation is required for the portfolio itself.

## Run locally

1. Open `index.html` in a browser, or run a local server from this directory:
   - Python: `python3 -m http.server 8000`
   - Then visit `http://localhost:8000`.
2. Check navigation, filters, project detail dialogs, and contact links at desktop and mobile widths.

## Deploy to Vercel

1. Put the `portfolio-site` directory in a Git repository (or make it the repository root).
2. In Vercel, import the repository.
3. For this static site, use the portfolio directory as the Root Directory if it is inside a larger repository.
4. Leave Build Command and Output Directory empty/default for a static HTML site, or set the Output Directory to `.` if prompted by the project setup.
5. Deploy. There are no required environment variables for this portfolio page.
6. Open the deployed URL and verify image paths, navigation, filters, modal interactions, and external links.

The EstiMate project included in the parent `PROJECT` folder is a separate Next.js app and does use Supabase client configuration. Its backend environment variables are not required by this static portfolio and must not be copied into the portfolio or exposed publicly.

## Evidence notes

- SiNiKukiss, Toko Craft, and EstiMate were reviewed against source files in the supplied archive.
- Docker API & PostgreSQL and Computational Biology are retained as requested, but their source files were not present in the supplied archive. Their cards intentionally avoid unsupported implementation claims and do not fabricate repository/demo URLs.
- The Library Management System is not included in the portfolio UI or project data.
- LinkedIn, GitHub, Instagram, email, and WhatsApp use the contact details supplied for this portfolio. WhatsApp is normalized to `6285815787878`, consistent with the SiNiKukiss source README.
- The supplied profile image had a HEIF/HEIC file signature despite its `.jpg` extension; it was converted to a regular JPEG and resized for web use without generating or replacing the subject.
