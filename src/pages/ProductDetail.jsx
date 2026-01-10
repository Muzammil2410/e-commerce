import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getProductById, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">
            Product Not Found
          </h1>
          <Link to="/collections" className="luxury-button">
            Return to Collections
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 2);

  const gallery = product.gallery || [product.image];

  return (
    <>
      {/* Back Link */}
      <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-6 sm:pb-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-luxury uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
            Back to Collections
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {/* Gallery */}
            <AnimatedSection>
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden bg-secondary">
                  <img
                    src={gallery[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {gallery.length > 1 && (
                  <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2">
                    {gallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-16 h-20 sm:w-18 sm:h-22 md:w-20 md:h-24 flex-shrink-0 overflow-hidden bg-secondary transition-all duration-300 ${
                          selectedImage === index
                            ? "ring-1 ring-accent"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Details */}
            <AnimatedSection delay={200}>
              <div className="lg:sticky lg:top-32 space-y-4 sm:space-y-6 md:space-y-8">
                <div>
                  <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-3 sm:mb-4">
                    {product.category === "perfume"
                      ? "Perfume"
                      : product.category === "cream"
                      ? "Cream"
                      : "Body Lotions"}
                  </p>
                  <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-3 sm:mb-4">
                    {product.name}
                  </h1>
                  <p className="luxury-subheading text-base sm:text-lg md:text-xl text-muted-foreground">
                    {product.tagline}
                  </p>
                </div>

                <div className="w-16 h-px bg-border" />

                <p className="editorial-text text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Olfactory Traits */}
                {product.olfactoryTraits && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-foreground">
                      Olfactory Traits
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground italic">
                      {product.olfactoryTraits}
                    </p>
                  </div>
                )}

                {/* Concentration */}
                {product.concentration && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-foreground">
                      Concentration
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {product.concentration}
                    </p>
                  </div>
                )}

                {/* Fragrance Notes - Detailed */}
                {product.noteDetails && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-foreground">
                      Fragrance Notes
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {product.noteDetails.top && (
                        <div>
                          <p className="text-xs font-medium text-foreground mb-1">Top notes:</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{product.noteDetails.top}</p>
                        </div>
                      )}
                      {product.noteDetails.heart && (
                        <div>
                          <p className="text-xs font-medium text-foreground mb-1">Heart notes:</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{product.noteDetails.heart}</p>
                        </div>
                      )}
                      {product.noteDetails.base && (
                        <div>
                          <p className="text-xs font-medium text-foreground mb-1">Base notes:</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{product.noteDetails.base}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Notes or Ingredients - Fallback for other products */}
                {product.notes && !product.noteDetails && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-foreground">
                      Fragrance Notes
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {product.notes.map((note) => (
                        <span
                          key={note}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary text-xs sm:text-sm text-foreground tracking-wide"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.scentProfile && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-foreground">
                      Scent Profile
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground italic">
                      {product.scentProfile}
                    </p>
                  </div>
                )}

                {product.keyFeatures && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-foreground">
                      Key Features
                    </h3>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {product.keyFeatures.map((feature, index) => (
                        <li key={index} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.ingredients && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-foreground">
                      Key Ingredients
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {product.ingredients.map((ingredient) => (
                        <span
                          key={ingredient}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary text-xs sm:text-sm text-foreground tracking-wide"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.directions && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-foreground">
                      Directions
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {product.directions}
                    </p>
                  </div>
                )}

                {/* Sillage and Longevity */}
                {(product.sillage || product.longevity) && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-foreground">
                      Performance
                    </h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      {product.sillage && (
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          <span className="font-medium">Sillage:</span> {product.sillage}
                        </p>
                      )}
                      {product.longevity && (
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          <span className="font-medium">Longevity:</span> {product.longevity}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      navigate("/checkout");
                    }}
                    className="luxury-button w-full sm:w-auto text-xs sm:text-sm"
                  >
                    Buy now
                  </button>
                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      toast({
                        title: "Added to Cart",
                        description: `${product.name} has been added to your cart.`,
                      });
                    }}
                    className="luxury-button-gold w-full sm:w-auto text-xs sm:text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            <AnimatedSection className="mb-12 sm:mb-16">
              <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-3 sm:mb-4">
                You May Also Love
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-foreground">
                Related Creations
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto">
              {relatedProducts.map((related, index) => (
                <AnimatedSection key={related.id} delay={index * 150}>
                  <ProductCard product={related} index={index} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;

