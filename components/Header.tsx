"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="rounded-xl bg-gradient-to-br from-primary via-lavender to-accent p-2 shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-lavender to-accent bg-clip-text text-transparent">
              ShopCute
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform"
            >
              About
            </Link>
            <Button asChild size="sm" className="ml-2">
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-in slide-in-from-top-2">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-4 pt-2">
              <Button asChild className="w-full">
                <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                  Shop Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
