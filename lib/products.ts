import { Product } from "@/types/product";

export const products: Product[] = [
  // Beauty & Self-Care
  {
    id: "beauty-001",
    name: "Glow Vitamin C Serum",
    shortDescription: "Brightening serum for radiant skin",
    description: "Transform your skincare routine with our premium Vitamin C serum. Packed with antioxidants, this lightweight formula brightens, evens skin tone, and reduces the appearance of fine lines. Perfect for all skin types, it absorbs quickly and works beautifully under makeup.",
    price: 34.99,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.8,
    featured: true,
    tags: ["skincare", "vitamin-c", "serum", "brightening"]
  },
  {
    id: "beauty-002",
    name: "Rose Quartz Face Roller",
    shortDescription: "Crystal facial massage tool",
    description: "Elevate your self-care ritual with this beautiful rose quartz face roller. Helps reduce puffiness, promote lymphatic drainage, and enhance product absorption. The cooling stone feels amazing on the skin and adds a touch of luxury to your routine.",
    price: 24.99,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.5,
    featured: false,
    tags: ["beauty-tools", "face-roller", "self-care", "crystal"]
  },
  {
    id: "beauty-003",
    name: "Lavender Sleep Mask",
    shortDescription: "Overnight hydration treatment",
    description: "Wake up to soft, glowing skin with this nourishing lavender-infused sleep mask. Formulated with hyaluronic acid and botanical extracts, it works overnight to deeply hydrate and calm your complexion. The soothing lavender scent promotes relaxation.",
    price: 28.50,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.7,
    featured: false,
    tags: ["skincare", "mask", "lavender", "nighttime"]
  },

  // Fashion & Accessories
  {
    id: "fashion-001",
    name: "Minimalist Leather Tote",
    shortDescription: "Versatile everyday bag",
    description: "This beautifully crafted vegan leather tote is your perfect companion for work, shopping, or weekend adventures. Features multiple interior pockets, a secure zipper closure, and adjustable straps. The timeless design pairs with any outfit.",
    price: 68.00,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.6,
    featured: true,
    tags: ["bag", "tote", "leather", "accessories"]
  },
  {
    id: "fashion-002",
    name: "Dainty Gold Layered Necklace",
    shortDescription: "Delicate layered chain necklace",
    description: "Add a touch of elegance to any outfit with this stunning layered necklace set. Made from high-quality gold-plated brass, it features three delicate chains at varying lengths. Hypoallergenic and water-resistant for everyday wear.",
    price: 32.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.9,
    featured: false,
    tags: ["jewelry", "necklace", "gold", "layered"]
  },
  {
    id: "fashion-003",
    name: "Cozy Oversized Knit Cardigan",
    shortDescription: "Soft chunky knit sweater",
    description: "Stay warm and stylish in this ultra-cozy oversized cardigan. Made from premium soft-touch yarn, it features a relaxed fit, deep pockets, and beautiful cable-knit detailing. Perfect for layering during cooler months.",
    price: 58.00,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.8,
    featured: true,
    tags: ["clothing", "cardigan", "knitwear", "cozy"]
  },

  // Home & Lifestyle
  {
    id: "home-001",
    name: "Ceramic Planter Set",
    shortDescription: "Modern minimalist plant pots",
    description: "Brighten up your space with this set of three handcrafted ceramic planters. Each features a unique reactive glaze finish and drainage hole. The modern minimalist design complements any decor style. Perfect for succulents, herbs, or small houseplants.",
    price: 42.00,
    category: "Home",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.7,
    featured: false,
    tags: ["home-decor", "planters", "ceramic", "plants"]
  },
  {
    id: "home-002",
    name: "Scented Soy Candle Collection",
    shortDescription: "Hand-poured natural candles",
    description: "Create the perfect ambiance with this curated collection of hand-poured soy candles. Made with natural essential oils and cotton wicks, they burn clean for up to 50 hours. Includes three signature scents: Lavender Dreams, Vanilla Bean, and Fresh Citrus.",
    price: 45.00,
    category: "Home",
    image: "https://images.unsplash.com/photo-1602874801006-e089d1b7f3d5?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.9,
    featured: true,
    tags: ["candles", "home-fragrance", "soy", "natural"]
  },
  {
    id: "home-003",
    name: "Bamboo Kitchen Organizer",
    shortDescription: "Sustainable drawer organizer",
    description: "Keep your kitchen tidy with this eco-friendly bamboo organizer set. Features adjustable dividers, smooth finish, and durable construction. Perfect for utensils, gadgets, or office supplies. Easy to clean and naturally antimicrobial.",
    price: 36.50,
    category: "Home",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.6,
    featured: false,
    tags: ["organization", "kitchen", "bamboo", "eco-friendly"]
  },

  // Tech Gadgets
  {
    id: "tech-001",
    name: "Wireless Charging Stand",
    shortDescription: "Fast charging dock for phones",
    description: "Upgrade your charging experience with this sleek wireless charging stand. Supports fast charging up to 15W, works with all Qi-enabled devices, and features an adjustable viewing angle. LED indicator shows charging status. Includes USB-C cable.",
    price: 29.99,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.5,
    featured: false,
    tags: ["charging", "wireless", "tech", "phone-accessories"]
  },
  {
    id: "tech-002",
    name: "Bluetooth Noise-Canceling Headphones",
    shortDescription: "Premium over-ear headphones",
    description: "Immerse yourself in crystal-clear sound with these premium wireless headphones. Features active noise cancellation, 30-hour battery life, comfortable memory foam ear cushions, and built-in microphone. Folds flat for easy travel.",
    price: 89.99,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.8,
    featured: true,
    tags: ["headphones", "audio", "bluetooth", "noise-canceling"]
  },
  {
    id: "tech-003",
    name: "Smart LED Desk Lamp",
    shortDescription: "Adjustable color temperature lamp",
    description: "Illuminate your workspace with this intelligent LED desk lamp. Features adjustable brightness, color temperature control (warm to cool white), USB charging port, and memory function. The flexible arm allows you to direct light exactly where you need it.",
    price: 45.00,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.6,
    featured: false,
    tags: ["lighting", "desk", "smart", "led"]
  },

  // Gifts & More
  {
    id: "gifts-001",
    name: "Watercolor Art Print Set",
    shortDescription: "Botanical wall art collection",
    description: "Add a touch of nature to your walls with this stunning set of botanical watercolor prints. Each archival-quality print is professionally printed on premium paper. Comes in a set of three 8x10\" prints, ready to frame. Perfect for any room or as a thoughtful gift.",
    price: 32.00,
    category: "Gifts",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.7,
    featured: false,
    tags: ["art", "prints", "botanical", "wall-decor"]
  },
  {
    id: "gifts-002",
    name: "Mindfulness Journal Set",
    shortDescription: "Guided gratitude journal",
    description: "Start your journey to mindfulness with this beautiful journal set. Includes a hardcover gratitude journal with daily prompts, a matching bookmark, and a pen. Premium thick paper prevents bleed-through. Makes a meaningful gift for anyone seeking more peace and positivity.",
    price: 26.99,
    category: "Gifts",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.8,
    featured: true,
    tags: ["journal", "mindfulness", "stationery", "self-care"]
  },
  {
    id: "gifts-003",
    name: "Artisan Tea Sampler Box",
    shortDescription: "Premium loose leaf tea collection",
    description: "Discover new favorite flavors with this curated tea sampler box. Features 12 unique blends from around the world, including green, black, white, and herbal teas. Each sample makes 10+ cups. Beautifully packaged in a reusable wooden box - perfect for gifting.",
    price: 38.00,
    category: "Gifts",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=800&fit=crop",
    affiliateLink: "#",
    rating: 4.9,
    featured: false,
    tags: ["tea", "gourmet", "gift-box", "beverages"]
  }
];

export const categories = ["All", "Beauty", "Fashion", "Home", "Tech", "Gifts"] as const;

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") {
    return products;
  }
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.shortDescription.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
