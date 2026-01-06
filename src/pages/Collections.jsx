import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-4 sm:mb-6">
              The Collection
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground mb-4 sm:mb-6 px-4">
              Our Creations
            </h1>
            <p className="editorial-text text-sm sm:text-base md:text-lg text-muted-foreground px-4">
              Each piece is a testament to artistry, crafted with rare
              ingredients and unwavering devotion to perfection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 border-y border-border bg-background sticky top-16 sm:top-20 md:top-24 z-30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`text-xs sm:text-sm tracking-luxury uppercase transition-colors duration-300 pb-1 border-b ${
                activeCategory === "all"
                  ? "text-accent border-accent"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`text-xs sm:text-sm tracking-luxury uppercase transition-colors duration-300 pb-1 border-b ${
                  activeCategory === category.id
                    ? "text-accent border-accent"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {filteredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100}>
                <ProductCard product={product} index={index} />
              </AnimatedSection>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Collections;

