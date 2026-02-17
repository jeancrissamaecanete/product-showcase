import { Heart, Sparkles, Star, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
          <Heart className="h-4 w-4 text-primary fill-primary" />
          <span className="text-sm font-semibold text-primary">
            About ShopCute
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Curating Products with{" "}
          <span className="bg-gradient-to-r from-primary via-lavender to-accent bg-clip-text text-transparent">
            Love & Care
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're passionate about discovering and sharing products that bring joy, 
          functionality, and a little bit of magic to everyday life.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <Card className="border-2">
          <CardContent className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission 🎯</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              In a world of endless options, we believe shopping should be delightful, 
              not overwhelming. That's why we carefully curate products across beauty, 
              fashion, home, tech, and gifts - testing, researching, and handpicking 
              only items we genuinely love and would recommend to our closest friends.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* What Makes Us Different */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What Makes Us Different ✨
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:scale-105 transition-transform">
            <CardContent className="p-8">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-lavender p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Handpicked</h3>
              <p className="text-sm text-muted-foreground">
                Every product is personally tested and evaluated
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform">
            <CardContent className="p-8">
              <div className="rounded-2xl bg-gradient-to-br from-lavender to-accent p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Focus</h3>
              <p className="text-sm text-muted-foreground">
                We prioritize quality, durability, and value
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform">
            <CardContent className="p-8">
              <div className="rounded-2xl bg-gradient-to-br from-accent to-mint p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Always Fresh</h3>
              <p className="text-sm text-muted-foreground">
                Regular updates with new discoveries and trends
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform">
            <CardContent className="p-8">
              <div className="rounded-2xl bg-gradient-to-br from-peach to-primary p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Honest Reviews</h3>
              <p className="text-sm text-muted-foreground">
                Real opinions, no sugar-coating
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          How It Works 🛍️
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">We Research</h3>
              <p className="text-muted-foreground">
                Our team spends hours researching products, reading reviews, 
                and comparing options across different categories.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lavender text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">We Test</h3>
              <p className="text-muted-foreground">
                When possible, we test products ourselves or rely on trusted sources 
                to ensure quality and authenticity.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">We Curate</h3>
              <p className="text-muted-foreground">
                Only the best products make it to our collection - items we'd 
                genuinely recommend to friends and family.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-peach text-white flex items-center justify-center font-bold text-lg">
              4
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">You Shop</h3>
              <p className="text-muted-foreground">
                Browse our collection, click through our affiliate links, and 
                support us at no extra cost while getting great products!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-primary/10 via-lavender/10 to-accent/10 border-2">
          <CardContent className="p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-4 text-center">
              💕 Affiliate Disclosure
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <strong className="text-foreground">Full transparency:</strong> This website 
              contains affiliate links. When you make a purchase through our links, 
              we may earn a small commission at no additional cost to you. This helps us 
              maintain the site, research new products, and continue sharing our favorite finds. 
              We only recommend products we genuinely believe in and think you'll love. 
              Your support means the world to us and allows us to keep doing what we love! 
              Thank you for shopping with us. 💕
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Questions or Suggestions?
        </h2>
        <p className="text-muted-foreground mb-6">
          We'd love to hear from you! Connect with us on social media.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
