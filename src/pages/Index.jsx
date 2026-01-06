import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import perfume1 from "@/assets/products/perfume-1.jpg";
import cream1 from "@/assets/products/cream-1.jpg";
import philosophyImage from "@/assets/products/1 (2).JPG";
import sectionImage from "@/assets/products/10.JPG";
import soloImage from "@/assets/products/IMG_5238.JPG";
import heroImage from "@/assets/products/IMG_4898.JPEG";
import newSectionImage from "@/assets/products/IMG_5236.JPG";

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="SS Luxury Beauty"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="overflow-hidden mb-6">
            <h1
              className="luxury-heading text-5xl md:text-7xl lg:text-8xl text-foreground animate-reveal-text"
              style={{ animationDelay: "300ms" }}
            >
              Art of Self Care
            </h1>
          </div>
          <div className="overflow-hidden mb-12">
            <p
              className="luxury-subheading text-xl md:text-2xl text-foreground/80 animate-reveal-text"
              style={{ animationDelay: "500ms" }}
            >
              Where luxury meets legacy
            </p>
          </div>
          <div
            className="animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <Link to="/collections" className="luxury-button">
              Explore Collections
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection>
              <div className="space-y-8">
                <p className="text-xs tracking-luxury-wide uppercase text-accent">
                  Our Philosophy
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                  NO.31 x NO.44 Signature Pair
                </h2>
                <p className="editorial-text text-muted-foreground">
                  Love in Balance — two souls, two scents.
                  Where No.31 glows with tenderness, No.44 grounds it strength.
                  They're designed to complement one another — her warmth, his depth — forming a complete olfactory story of devotion.
                </p>
                <Link
                  to="/about"
                  className="luxury-link text-sm tracking-luxury uppercase text-foreground hover:text-accent inline-block"
                >
                  Discover Our Story
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={philosophyImage}
                  alt="SS Luxury Philosophy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <AnimatedSection className="text-center mb-16 md:mb-20">
            <p className="text-xs tracking-luxury-wide uppercase text-accent mb-4">
              Collections
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Explore Our World
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 150}>
                <Link
                  to={`/collections?category=${category.id}`}
                  className="group block text-center p-8 md:p-12 bg-background hover:bg-primary transition-colors duration-500"
                >
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground group-hover:text-primary-foreground transition-colors duration-500 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-500">
                    {category.description}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
            <div>
              <p className="text-xs tracking-luxury-wide uppercase text-accent mb-4">
                Featured
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
                Signature Creations
              </h2>
            </div>
            <Link
              to="/collections"
              className="luxury-link text-sm tracking-luxury uppercase text-foreground hover:text-accent w-fit"
            >
              View All
            </Link>
          </AnimatedSection>

          <div className="relative px-8 md:px-0">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                duration: 25,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredProducts.map((product, index) => (
                  <CarouselItem
                    key={product.id}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <AnimatedSection delay={index * 150}>
                      <ProductCard product={product} index={index} />
                    </AnimatedSection>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious 
                variant="ghost"
                className="absolute left-0 md:-left-14 lg:-left-16 top-1/2 -translate-y-1/2 h-14 w-14 md:h-16 md:w-16 rounded-full bg-white/90 backdrop-blur-md border border-[#4F473E]/20 shadow-[0_4px_20px_rgba(79,71,62,0.15)] hover:shadow-[0_6px_30px_rgba(79,71,62,0.25)] hover:bg-[#4F473E] hover:border-[#4F473E] transition-all duration-500 ease-out text-[#4F473E] [&_svg]:text-[#4F473E] [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-[1.5] hover:[&_svg]:text-white [&_span]:hidden disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white/90 disabled:hover:border-[#4F473E]/20 disabled:hover:shadow-[0_4px_20px_rgba(79,71,62,0.15)] z-10 flex items-center justify-center p-0 group" 
              />
              <CarouselNext 
                variant="ghost"
                className="absolute right-0 md:-right-14 lg:-right-16 top-1/2 -translate-y-1/2 h-14 w-14 md:h-16 md:w-16 rounded-full bg-white/90 backdrop-blur-md border border-[#4F473E]/20 shadow-[0_4px_20px_rgba(79,71,62,0.15)] hover:shadow-[0_6px_30px_rgba(79,71,62,0.25)] hover:bg-[#4F473E] hover:border-[#4F473E] transition-all duration-500 ease-out text-[#4F473E] [&_svg]:text-[#4F473E] [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-[1.5] hover:[&_svg]:text-white [&_span]:hidden disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white/90 disabled:hover:border-[#4F473E]/20 disabled:hover:shadow-[0_4px_20px_rgba(79,71,62,0.15)] z-10 flex items-center justify-center p-0 group" 
              />
            </Carousel>
          </div>
        </div>
      </section>

      {/* New Philosophy Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={sectionImage}
                  alt="SS Luxury Philosophy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-8">
                <p className="text-xs tracking-luxury-wide uppercase text-accent">
                  Female body lotion
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                  Fruit & créme
                </h2>
                <p className="text-sm tracking-luxury-wide uppercase text-accent mb-4">
                  Fruity, flirty and fabulously creamy
                </p>
                <p className="editorial-text text-muted-foreground">
                  Indulge your skin in a playful, luscious treat with Fruit & Crème. This silky-smooth body and hand lotion wraps you in a soft, fruity sweetness with a creamy, dreamy finish that's impossible to resist. For long-lasting scent experience layer it with your favourite SS PERFUME and complete your daily scent and hydration ritual.
                </p>
                <Link
                  to="/about"
                  className="luxury-link text-sm tracking-luxury uppercase text-foreground hover:text-accent inline-block"
                >
                  Discover Our Story
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder's Vision Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection>
              <div className="space-y-8">
                <p className="text-xs tracking-luxury-wide uppercase text-accent">
                  Founder's Vision
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                  I'm shermin
                </h2>
                <p className="editorial-text text-muted-foreground leading-relaxed">
                  and my vision for SS is to redefine everyday luxury—where care meets intention, and scent becomes an extension of self. I strive to create products that are both effective and sensorial, empowering people to feel confident, nurtured, and uniquely themselves. Every formula, every fragrance, every ritual is designed to be precise, purposeful, and deeply personal—because true luxury is felt, not shown.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={soloImage}
                  alt="Founder's Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* New Section Similar to Female Body Lotion */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={newSectionImage}
                  alt="SS Luxury"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-8">
                <p className="text-xs tracking-luxury-wide uppercase text-accent">
                  Face Cream
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
                  CLÉO
                </h2>
                <p className="text-sm tracking-luxury-wide uppercase text-accent mb-4">
                  The hydration luxury.
                </p>
                <p className="editorial-text text-muted-foreground">
                  Elevate your daily ritual with this lightweight, hydrating face cream. Expertly formulated for all skin types, it soothes, nourishes, and restores balance, leaving your skin soft, supple, and naturally radiant. Its silky texture absorbs effortlessly, delivering lasting moisture without heaviness. CLÉO creates the perfect canvas for a flawless complexion, while supporting your skin's natural barrier.
                </p>
                <Link
                  to="/about"
                  className="luxury-link text-sm tracking-luxury uppercase text-foreground hover:text-accent inline-block"
                >
                  Discover Our Story
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cream1}
            alt="SS Editorial"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-luxury-wide uppercase text-accent mb-8">
              The SS Promise
            </p>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-foreground italic mb-12">
              "Luxury is not about price. It's about the feeling of being truly
              understood."
            </blockquote>
            <Link to="/collections" className="luxury-button-gold">
              Begin Your Journey
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;

