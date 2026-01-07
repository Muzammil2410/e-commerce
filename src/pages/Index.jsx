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
import promiseImage from "@/assets/products/IMG_4896.JPEG";

const Index = () => {
  const featuredProducts = products.filter(p => p.category === "perfume").slice(0, 6);
  const bodyLotionProducts = products.filter(p => p.category === "soap").slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] md:min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <div className="overflow-hidden mb-8 md:mb-12">
            <h1
              className="luxury-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground animate-reveal-text px-2"
              style={{ animationDelay: "300ms", fontFamily: "'Blosta', sans-serif" }}
            >
              Art of Self Care
            </h1>
          </div>
          <div
            className="animate-fade-in px-4"
            style={{ animationDelay: "500ms" }}
          >
            <Link to="/collections" className="luxury-button text-xs sm:text-sm">
              Explore Collections
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-float hidden sm:block">
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-start">
            <AnimatedSection>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent">
                  Our Philosophy
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-foreground">
                  NO.31 x NO.44 Signature Pair
                </h2>
                <p className="editorial-text text-sm sm:text-base md:text-lg text-muted-foreground">
                  Love in Balance — two souls, two scents.
                  Where No.31 glows with tenderness, No.44 grounds it strength.
                  They're designed to complement one another — her warmth, his depth — forming a complete olfactory story of devotion.
                </p>
                <Link
                  to="/about"
                  className="luxury-link text-xs sm:text-sm tracking-luxury uppercase text-foreground hover:text-accent inline-block mt-2"
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
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-3 sm:mb-4">
              Collections
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Explore Our World
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 150}>
                <Link
                  to={`/collections?category=${category.id}`}
                  className="group block text-center p-6 sm:p-8 md:p-10 lg:p-12 bg-background hover:bg-primary transition-colors duration-500"
                >
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-foreground group-hover:text-primary-foreground transition-colors duration-500 mb-2 sm:mb-3">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-500">
                    {category.description}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-4 sm:gap-6">
            <div>
              <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-3 sm:mb-4">
                Featured
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
                Signature Creations
              </h2>
            </div>
            <Link
              to="/collections"
              className="luxury-link text-xs sm:text-sm tracking-luxury uppercase text-foreground hover:text-accent w-fit"
            >
              View All
            </Link>
          </AnimatedSection>

          <div className="relative px-2 sm:px-4 md:px-8 lg:px-0">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                duration: 25,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {featuredProducts.map((product, index) => (
                  <CarouselItem
                    key={product.id}
                    className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <AnimatedSection delay={index * 150}>
                      <ProductCard product={product} index={index} isFeatured={true} />
                    </AnimatedSection>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious 
                variant="ghost"
                className="absolute left-2 sm:left-4 md:-left-8 lg:-left-14 xl:-left-16 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-white/90 backdrop-blur-md border border-[#5C5B58]/20 shadow-[0_4px_20px_rgba(92,91,88,0.15)] hover:shadow-[0_6px_30px_rgba(92,91,88,0.25)] hover:bg-[#5C5B58] hover:border-[#5C5B58] transition-all duration-500 ease-out text-[#5C5B58] [&_svg]:text-[#5C5B58] [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6 [&_svg]:stroke-[1.5] hover:[&_svg]:text-white [&_span]:hidden disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white/90 disabled:hover:border-[#5C5B58]/20 disabled:hover:shadow-[0_4px_20px_rgba(92,91,88,0.15)] z-10 flex items-center justify-center p-0 group" 
              />
              <CarouselNext 
                variant="ghost"
                className="absolute right-2 sm:right-4 md:-right-8 lg:-right-14 xl:-right-16 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-white/90 backdrop-blur-md border border-[#5C5B58]/20 shadow-[0_4px_20px_rgba(92,91,88,0.15)] hover:shadow-[0_6px_30px_rgba(92,91,88,0.25)] hover:bg-[#5C5B58] hover:border-[#5C5B58] transition-all duration-500 ease-out text-[#5C5B58] [&_svg]:text-[#5C5B58] [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6 [&_svg]:stroke-[1.5] hover:[&_svg]:text-white [&_span]:hidden disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white/90 disabled:hover:border-[#5C5B58]/20 disabled:hover:shadow-[0_4px_20px_rgba(92,91,88,0.15)] z-10 flex items-center justify-center p-0 group" 
              />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Body Lotions Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-4 sm:gap-6">
            <div>
              <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-3 sm:mb-4">
                Body Care
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
                Skin Moisturizing Essentials
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">
                Nourishing body lotions for complete skin moisturizing and hydration
              </p>
            </div>
            <Link
              to="/collections?category=soap"
              className="luxury-link text-xs sm:text-sm tracking-luxury uppercase text-foreground hover:text-accent w-fit"
            >
              View All
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto">
            {bodyLotionProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 150}>
                <ProductCard product={product} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* New Philosophy Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-start">
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
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent">
                  Female body lotion
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-foreground">
                  Fruit & créme
                </h2>
                <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-3 sm:mb-4">
                  Fruity, flirty and fabulously creamy
                </p>
                <p className="editorial-text text-sm sm:text-base md:text-lg text-muted-foreground">
                  Indulge your skin in a playful, luscious treat with Fruit & Crème. This silky-smooth body and hand lotion wraps you in a soft, fruity sweetness with a creamy, dreamy finish that's impossible to resist. For long-lasting scent experience layer it with your favourite SS PERFUME and complete your daily scent and hydration ritual.
                </p>
                <Link
                  to="/about"
                  className="luxury-link text-xs sm:text-sm tracking-luxury uppercase text-foreground hover:text-accent inline-block mt-2"
                >
                  Discover Our Story
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* New Section Similar to Female Body Lotion */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-start">
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
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent">
                  Face Cream
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-foreground">
                  CLÉA
                </h2>
                <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-3 sm:mb-4">
                  The hydration luxury.
                </p>
                <p className="editorial-text text-sm sm:text-base md:text-lg text-muted-foreground">
                  Elevate your daily ritual with this lightweight, hydrating face cream. Expertly formulated for all skin types, it soothes, nourishes, and restores balance, leaving your skin soft, supple, and naturally radiant. Its silky texture absorbs effortlessly, delivering lasting moisture without heaviness. CLÉA creates the perfect canvas for a flawless complexion, while supporting your skin's natural barrier.
                </p>
                <Link
                  to="/about"
                  className="luxury-link text-xs sm:text-sm tracking-luxury uppercase text-foreground hover:text-accent inline-block mt-2"
                >
                  Discover Our Story
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder's Vision Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-start">
            <AnimatedSection>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <p className="text-sm sm:text-base md:text-lg tracking-luxury-wide uppercase text-accent font-bold">
                  FOUNDER'S VISION
                </p>
                <p className="editorial-text text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  <span className="font-serif font-light text-foreground">I'm Shermin</span> and my vision for SS is to redefine everyday luxury—where care meets intention, and scent becomes an extension of self. I strive to create products that are both effective and sensorial, empowering people to feel confident, nurtured, and uniquely themselves. Every formula, every fragrance, every ritual is designed to be precise, purposeful, and deeply personal—because true luxury is felt, not shown.
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

      {/* Editorial Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={promiseImage}
            alt="SS Editorial"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-foreground italic mb-8 sm:mb-10 md:mb-12 px-4">
              Your vibe, bottled
            </blockquote>
            <Link to="/collections" className="luxury-button-gold text-xs sm:text-sm">
              Shop now
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;

