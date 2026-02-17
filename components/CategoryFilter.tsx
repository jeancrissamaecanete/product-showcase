"use client";

import { categories } from "@/lib/products";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <Tabs value={selectedCategory} onValueChange={onCategoryChange}>
        <TabsList className="inline-flex w-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
