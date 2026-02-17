import Link from "next/link";
import { Heart, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-gradient-to-br from-primary via-lavender to-accent p-2">
                <Heart className="h-4 w-4 text-white fill-white" />
              </div>
              <span className="font-bold text-lg">ShopCute</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your destination for curated, delightful products that bring joy to everyday life. ✨
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=Beauty"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Beauty & Self-Care
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Fashion"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fashion & Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Home"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home & Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Tech"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tech Gadgets
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-xl bg-primary/10 hover:bg-primary hover:text-white transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="rounded-2xl bg-muted/50 p-6 mb-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Affiliate Disclosure:</strong> This website contains affiliate links. 
              When you click on product links and make a purchase, we may receive a small commission at no extra cost to you. 
              This helps us keep the site running and continue sharing products we love. We only recommend products we genuinely 
              believe in and think you&apos;ll enjoy! Thank you for your support. 💕
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} ShopCute. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 fill-primary text-primary" /> for product lovers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
