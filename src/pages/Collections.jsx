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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-xs tracking-luxury-wide uppercase text-accent mb-6">
              The Collection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6">
              Our Creations
            </h1>
            <p className="editorial-text text-muted-foreground">
              Each piece is a testament to artistry, crafted with rare
              ingredients and unwavering devotion to perfection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 md:py-12 border-y border-border bg-background sticky top-20 md:top-24 z-30">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`text-sm tracking-luxury uppercase transition-colors duration-300 pb-1 border-b ${
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
                className={`text-sm tracking-luxury uppercase transition-colors duration-300 pb-1 border-b ${
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
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
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

