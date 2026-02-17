import Link from "next/link";
import { Button } from "./ui/button";
import { Sparkles, Heart, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-lavender/20 to-accent/20">
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="animate-bounce delay-100">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <div className="animate-bounce delay-200">
              <Heart className="h-8 w-8 text-lavender fill-lavender" />
            </div>
            <div className="animate-bounce delay-300">
              <Star className="h-8 w-8 text-accent fill-accent" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Discover Products You&apos;ll{" "}
            <span className="bg-gradient-to-r from-primary via-lavender to-accent bg-clip-text text-transparent">
              Absolutely Love
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated collection of delightful products to bring joy, style, and functionality 
            to your everyday life. From beauty essentials to tech gadgets, find your next favorite thing! ✨
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/products">
                Explore Products
                <Sparkles className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link href="#featured">
                View Featured
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/20 p-2">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <span>Curated with Care</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-lavender/20 p-2">
                <Star className="h-4 w-4 text-lavender" />
              </div>
              <span>Top-Rated Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-accent/20 p-2">
                <Sparkles className="h-4 w-4 text-accent" />
              </div>
              <span>Daily Discoveries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
}
