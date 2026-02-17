# Deployment Guide

This document provides instructions for deploying the ShopCute affiliate product showcase website to GitHub Pages.

## Automatic Deployment (Recommended)

A GitHub Actions workflow is already configured in `.github/workflows/deploy.yml` that will automatically build and deploy your site when you push to the main branch.

### Steps to Enable Automatic Deployment:

1. **Enable GitHub Pages in Repository Settings**
   - Go to your repository on GitHub
   - Click on "Settings" → "Pages"
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push to Main Branch**
   ```bash
   git checkout main
   git merge copilot/create-affiliate-product-showcase
   git push origin main
   ```

3. **Monitor Deployment**
   - Go to the "Actions" tab in your repository
   - You'll see the "Deploy to GitHub Pages" workflow running
   - Once complete, your site will be live!

4. **Access Your Site**
   - For user/org pages: `https://username.github.io/`
   - For project pages: `https://username.github.io/product-showcase/`
   
   > **Note**: If using project pages, uncomment and update the `basePath` in `next.config.ts`

## Manual Deployment

If you prefer to deploy manually:

1. **Build the Site**
   ```bash
   npm run build
   ```

2. **Deploy the Output**
   - The static files are in the `out/` directory
   - Upload these to your hosting provider, or:
   
   ```bash
   # Using gh-pages package
   npm install -g gh-pages
   gh-pages -d out
   ```

## Custom Domain Setup

If you want to use a custom domain:

1. Create a file named `CNAME` in the `public/` directory
2. Add your domain name (e.g., `www.shopcute.com`)
3. Configure DNS settings with your domain provider
4. Rebuild and deploy

## Troubleshooting

### Images Not Loading
- Images are from Unsplash and should load automatically
- If blocked, update the image URLs in `lib/products.ts`

### 404 Errors
- Ensure GitHub Pages is enabled
- Check that the repository is public (or you have GitHub Pages enabled for private repos)
- Verify the build completed successfully

### basePath Issues
- If deploying to a project page (not user/org page), uncomment the basePath in `next.config.ts`:
  ```typescript
  basePath: '/product-showcase',
  ```

## Build Information

- **Build Command**: `npm run build`
- **Output Directory**: `out/`
- **Build Size**: ~1.5MB
- **Pages Generated**: 3 (/, /products, /about)
- **Build Time**: ~3 seconds

## Post-Deployment

After deployment:
1. Test all pages and navigation
2. Verify search functionality works
3. Check category filtering
4. Test on mobile devices
5. Verify all affiliate links work
6. Check that images load correctly

## Support

For issues or questions:
- Check the README.md for detailed documentation
- Review the GitHub Actions logs if automatic deployment fails
- Ensure all dependencies are installed correctly
