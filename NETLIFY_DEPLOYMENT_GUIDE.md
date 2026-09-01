# Prajakta Nutrition — Netlify Deployment Guide

This is a production-ready Next.js project for Prajakta Clinical Nutrition.

## Recommended method: GitHub + Netlify

### 1. Extract the ZIP

Extract the downloaded ZIP on your computer. The folder containing `package.json` is the website project.

### 2. Upload it to GitHub

1. Sign in at https://github.com.
2. Click **New repository**.
3. Name it `prajakta-nutrition`.
4. Select **Private** or **Public**.
5. Create the repository without adding a README.
6. Open the repository and choose **Add file → Upload files**.
7. Upload the contents of the extracted `prajakta-nutrition` folder. Do not upload the ZIP itself.
8. Click **Commit changes**.

For easier uploads and future editing, GitHub Desktop can be used instead of the browser.

### 3. Connect GitHub to Netlify

1. Sign in at https://app.netlify.com.
2. Select **Add new project → Import an existing project**.
3. Choose **GitHub** and approve access.
4. Select the `prajakta-nutrition` repository.
5. Netlify should detect Next.js automatically.
6. Confirm these settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `22`
7. Click **Deploy**.

The first deployment may take several minutes. Netlify will then provide an address ending in `.netlify.app`.

## Change the Netlify site name

Open **Site configuration → General → Site details → Change site name**. Try a name such as `prajakta-nutrition`, if available.

## Connect a custom domain

1. Buy a domain from a domain provider.
2. In Netlify, open **Domain management**.
3. Select **Add a domain**.
4. Enter the domain and follow the DNS instructions shown by Netlify.
5. Netlify will issue an SSL certificate automatically after DNS verification.

## How future updates work

Edit a file in GitHub and commit the change. Netlify automatically rebuilds and publishes the new version. Main content is located in:

- `app/page.tsx` — homepage
- `app/about/page.tsx` — About page
- `app/services/` — service pages
- `components/site-header.tsx` — navigation and service dropdown
- `components/site-footer.tsx` — footer and contact details
- `components/consultation-form.tsx` — WhatsApp enquiry form
- `public/images/` — logo and website images

## Important checks after deployment

- Open every navigation and service link.
- Test the WhatsApp enquiry form on a phone.
- Test the email, Instagram and WhatsApp links.
- Check the website on desktop and mobile.
- Do not commit secret keys or passwords to GitHub.
