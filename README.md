# ShopCute - Affiliate Product Showcase 🛍️✨

A beautiful, whimsical affiliate product showcase website built with modern web technologies. Features a curated collection of products across beauty, fashion, home, tech, and gifts categories.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)

## ✨ Features

- 🎨 **Cute & Whimsical Design** - Soft pastel color palette with playful animations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔍 **Real-time Search** - Instant product search functionality
- 🏷️ **Category Filtering** - Easy navigation through product categories
- ⚡ **Fast Performance** - Optimized with Next.js 15 and static export
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🎯 **SEO Optimized** - Meta tags and Open Graph support
- 💫 **Smooth Animations** - Delightful micro-interactions throughout

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** [Geist Sans](https://vercel.com/font)

## 📁 Project Structure

```
product-showcase/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with header & footer
│   ├── page.tsx             # Homepage
│   ├── products/
│   │   └── page.tsx         # Products catalog page
│   ├── about/
│   │   └── page.tsx         # About page
│   └── globals.css          # Global styles with custom theme
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   └── skeleton.tsx
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with disclosure
│   ├── Hero.tsx             # Homepage hero section
│   ├── ProductCard.tsx      # Product display card
│   ├── ProductGrid.tsx      # Product grid layout
│   ├── ProductModal.tsx     # Product detail modal
│   ├── SearchBar.tsx        # Search component
│   └── CategoryFilter.tsx   # Category tabs
├── lib/
│   ├── utils.ts             # Utility functions
│   └── products.ts          # Product data & helpers
├── types/
│   └── product.ts           # TypeScript interfaces
├── public/
│   ├── .nojekyll           # GitHub Pages config
│   └── images/             # Static images
└── next.config.ts          # Next.js configuration

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jeancrissamaecanete/product-showcase.git
   cd product-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customizing Products

To add or modify products, edit the `/lib/products.ts` file:

```typescript
{
  id: "unique-id",
  name: "Product Name",
  shortDescription: "Brief description",
  description: "Full product description...",
  price: 29.99,
  category: "Beauty", // Beauty, Fashion, Home, Tech, or Gifts
  image: "https://images.unsplash.com/...",
  affiliateLink: "your-affiliate-url",
  rating: 4.8,
  featured: true, // Show on homepage
  tags: ["tag1", "tag2"]
}
```

### Categories Available:
- Beauty & Self-Care
- Fashion & Accessories
- Home & Lifestyle
- Tech Gadgets
- Gifts & More

## 🎨 Customizing Design

The design system uses CSS custom properties defined in `app/globals.css`. To change the color scheme:

```css
:root {
  --primary: #ffc6d9;      /* Pink */
  --secondary: #e8d5f2;    /* Lavender */
  --accent: #b8e6d5;       /* Mint */
  --peach: #ffd4b8;        /* Peach */
  /* ...more colors */
}
```

## 🏗️ Building for Production

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for deployment.

## 🚀 Deploying to GitHub Pages

### Option 1: Manual Deployment

1. **Build the static site**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder**
   ```bash
   # If using a custom domain or user/org page (username.github.io)
   # The site will be at https://username.github.io/
   
   # If using project pages (username.github.io/repo-name)
   # Uncomment basePath in next.config.ts first:
   # basePath: '/product-showcase'
   ```

3. **Push to gh-pages branch**
   ```bash
   npm install -g gh-pages
   gh-pages -d out
   ```

### Option 2: GitHub Actions (Automatic)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Then enable GitHub Pages in repository settings (Settings → Pages → Source: GitHub Actions).

## 📋 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## 🎯 Features Breakdown

### Homepage
- ✅ Hero section with CTA
- ✅ Category preview cards
- ✅ Featured products showcase
- ✅ About section snippet
- ✅ Affiliate disclosure in footer

### Products Page
- ✅ Product grid (responsive)
- ✅ Real-time search
- ✅ Category filtering with tabs
- ✅ Product count display
- ✅ Empty state handling

### Product Features
- ✅ Product cards with images
- ✅ Star ratings
- ✅ Price display
- ✅ Category badges
- ✅ Featured badge
- ✅ Hover effects
- ✅ Click to view details modal
- ✅ Affiliate link buttons

### About Page
- ✅ Mission statement
- ✅ What makes us different
- ✅ How it works section
- ✅ Full affiliate disclosure
- ✅ Contact CTA

### UI/UX
- ✅ Sticky header navigation
- ✅ Mobile hamburger menu
- ✅ Smooth scroll animations
- ✅ Loading skeletons
- ✅ Responsive design
- ✅ Accessible (ARIA labels, keyboard nav)
- ✅ Whimsical color palette
- ✅ Custom scrollbar
- ✅ Micro-interactions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💖 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Built with [Next.js](https://nextjs.org)

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Made with 💕 by [Jean Crissama Ecanete](https://github.com/jeancrissamaecanete)**

*Affiliate Disclosure: This website contains affiliate links. We may earn a commission when you make purchases through our links at no extra cost to you.*
