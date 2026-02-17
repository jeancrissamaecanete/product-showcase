"use client";

import Link from "next/link";
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductModal } from "@/components/ProductModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedProducts } from "@/lib/products";
import { Product } from "@/types/product";
import { Sparkles, Heart, Home as HomeIcon, Zap, Gift } from "lucide-react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featuredProducts = getFeaturedProducts();

  const categories = [
    {
      name: "Beauty",
      icon: Sparkles,
      color: "from-primary to-lavender",
      emoji: "💄",
    },
    {
      name: "Fashion",
      icon: Heart,
      color: "from-lavender to-accent",
      emoji: "👗",
    },
    {
      name: "Home",
      icon: HomeIcon,
      color: "from-accent to-mint",
      emoji: "🏠",
    },
    {
      name: "Tech",
      icon: Zap,
      color: "from-sky to-primary",
      emoji: "💻",
    },
    {
      name: "Gifts",
      icon: Gift,
      color: "from-peach to-lavender",
      emoji: "🎁",
    },
  ];

  return (
    <>
      <Hero />

      {/* Categories Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our carefully curated collections
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={`/products?category=${category.name}`}
              >
                <Card className="group cursor-pointer hover:scale-105 transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-6 text-center space-y-3">
                    <div
                      className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}
                    >
                      {category.emoji}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Handpicked for You
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Our current favorite picks that we think you'll love
          </p>
        </div>

        <ProductGrid
          products={featuredProducts}
          onProductClick={setSelectedProduct}
        />

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products">
              View All Products
              <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="bg-gradient-to-br from-primary/10 via-lavender/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Shop With Us? 💕
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We spend hours researching and testing products so you don't have to. 
              Every item in our collection is hand-selected based on quality, functionality, 
              and that special something that makes it worth sharing. When you shop through 
              our links, you support our mission to bring you the best product recommendations!
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
