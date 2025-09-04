# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Repository Settings
Make sure your repository is public or you have GitHub Pro/Team for private repo Pages deployment.

### 3. Base Href Configuration
The deployment is configured with the base href `/personal-website/` which matches your repository name. If your repository name is different, update the following:

- In `package.json`, update the `build:github-pages` script
- In `src/404.html`, update the `base href` and icon path
- In `angular.json`, update the `github-pages` configuration if needed

### 4. Automatic Deployment
The GitHub Action will automatically:
- Trigger on pushes to `main` or `master` branch
- Install dependencies
- Build the Angular app for production
- Deploy to GitHub Pages

### 5. Access Your Site
After deployment, your site will be available at:
`https://yourusername.github.io/personal-website/`

Replace `yourusername` with your actual GitHub username.

## Manual Deployment
To deploy manually, you can also run:
```bash
npm run build:github-pages
```

Then upload the contents of `dist/personal-website/browser` to your hosting provider.

## Troubleshooting

### 404 Errors on Direct Navigation
The `404.html` file is configured to handle Angular routing for direct navigation to routes.

### Build Errors
If you encounter build errors:
1. Check that all dependencies are installed locally
2. Test the build locally with `npm run build:github-pages`
3. Check the GitHub Actions logs for specific error messages

### Base Href Issues
If your site doesn't load assets correctly:
1. Verify the repository name matches the base href
2. Check that the `base href` in both `index.html` and the build script are correct
