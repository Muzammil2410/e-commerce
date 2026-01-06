import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import perfume2 from "@/assets/products/perfume-2.jpg";
import cream2 from "@/assets/products/cream-2.jpg";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={perfume2}
            alt="SS Philosophy"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-xs tracking-luxury-wide uppercase text-accent mb-6">
              Our Philosophy
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground">
              The Essence of SS
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section 1 */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground">
                  Born from a passion for the extraordinary
                </h2>
                <div className="space-y-6 editorial-text text-muted-foreground">
                  <p>
                    SS was founded on a singular belief: that true luxury cannot
                    be rushed, replicated, or reduced. Every creation that bears
                    our name is the result of countless hours of refinement,
                    sourcing only the rarest ingredients from corners of the
                    world where quality is still considered sacred.
                  </p>
                  <p>
                    We do not follow trends. We do not compromise. We create for
                    those who understand that the most precious things in life
                    are worth waiting for.
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
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <AnimatedSection className="text-center mb-20">
            <p className="text-xs tracking-luxury-wide uppercase text-accent mb-4">
              Our Values
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
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
      <section className="py-24 md:py-32 lg:py-40 bg-primary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-primary-foreground italic mb-8">
              "We don't create products. We craft experiences that become part
              of who you are."
            </blockquote>
            <p className="text-xs tracking-luxury-wide uppercase text-accent">
              — The Founders
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
              Experience the Difference
            </h2>
            <Link to="/collections" className="luxury-button">
              Explore Collections
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;

