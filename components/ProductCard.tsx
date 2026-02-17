"use client";

import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { Product } from "@/types/product";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${
              i < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Card className="group overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300">
      <div
        onClick={() => onProductClick?.(product)}
        className="relative aspect-square overflow-hidden bg-muted"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.featured && (
          <Badge
            variant="secondary"
            className="absolute top-3 right-3 shadow-lg backdrop-blur-sm bg-secondary/90"
          >
            ✨ Featured
          </Badge>
        )}
      </div>

      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3
            onClick={() => onProductClick?.(product)}
            className="font-semibold text-base line-clamp-2 group-hover:text-primary transition-colors"
          >
            {product.name}
          </h3>
          <Badge variant="outline" className="shrink-0 text-xs">
            {product.category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between pt-1">
          {renderStars(product.rating)}
          <span className="text-xs text-muted-foreground">
            {product.rating.toFixed(1)}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-primary">
            ${typeof product.price === "number" ? product.price.toFixed(2) : product.price}
          </span>
        </div>
        <Button
          asChild
          size="sm"
          className="gap-1"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Shop Now
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
