import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import aboutHeroImage from "@/assets/products/1 (2).JPG";
import cream2 from "@/assets/products/cream-2.jpg";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="SS Philosophy"
            className="w-full h-full object-cover object-center object-top opacity-80"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-4 sm:mb-6">
              Our Philosophy
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section 1 */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            <AnimatedSection>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground">
                  Born from a passion for the extraordinary
                </h2>
                <div className="space-y-4 sm:space-y-6 editorial-text text-sm sm:text-base md:text-lg text-muted-foreground">
                  <p style={{ fontFamily: "'Blosta', sans-serif" }}>
                    SS was founded on a singular belief: true luxury cannot be rushed, replicated, or diluted. Every creation bearing our name is
                    the result of disciplined craftsmanship, meticulous refinement, and an uncompromising pursuit of excellence. We
                    source only the most exceptional ingredients from regions where quality is not a trend, but a legacy that is respected, protected, and treated as sacred.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={cream2}
                  alt="SS Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-3 sm:mb-4">
              Our Values
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-8">
            <AnimatedSection delay={0}>
              <div className="text-center space-y-6">
                <div className="w-16 h-px bg-accent mx-auto" />
                <h3 className="font-serif text-2xl font-light text-foreground">
                  Artistry
                </h3>
                <p className="luxury-body text-muted-foreground">
                  Every creation is handcrafted with the precision of a master
                  artisan and the vision of an artist. We believe in the power
                  of human touch.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="text-center space-y-6">
                <div className="w-16 h-px bg-accent mx-auto" />
                <h3 className="font-serif text-2xl font-light text-foreground">
                  Heritage
                </h3>
                <p className="luxury-body text-muted-foreground">
                  We honor traditions passed down through generations while
                  embracing innovation. Our formulations are a bridge between
                  ancient wisdom and modern science.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center space-y-6">
                <div className="w-16 h-px bg-accent mx-auto" />
                <h3 className="font-serif text-2xl font-light text-foreground">
                  Excellence
                </h3>
                <p className="luxury-body text-muted-foreground">
                  We accept nothing less than perfection. From sourcing to
                  packaging, every detail is scrutinized until it meets our
                  uncompromising standards.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-primary-foreground italic mb-6 sm:mb-8 px-4">
              "We don't create products. We craft experiences that become part
              of who you are."
            </blockquote>
            <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent">
              — The Founders
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 sm:mb-8">
              Experience the Difference
            </h2>
            <Link to="/collections" className="luxury-button text-xs sm:text-sm">
              Explore Collections
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;

