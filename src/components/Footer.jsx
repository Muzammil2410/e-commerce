import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6">
            <Link
              to="/"
              className="luxury-heading text-2xl sm:text-3xl tracking-luxury-wide hover:text-accent transition-colors duration-400"
              style={{ fontFamily: "'Blosta', sans-serif" }}
            >
              SS
            </Link>
            <p className="luxury-body text-xs sm:text-sm text-primary-foreground/70 max-w-xs">
              Crafting moments of refined luxury through artisanal beauty creations.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="luxury-heading text-xs sm:text-sm tracking-luxury-wide text-accent">
              Explore
            </h4>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <Link
                to="/collections"
                className="luxury-link text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 w-fit"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="luxury-link text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 w-fit"
              >
                Our Philosophy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="luxury-heading text-xs sm:text-sm tracking-luxury-wide text-accent">
              Connect
            </h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-primary-foreground/80">
              <p>inquiries@ss-beauty.com</p>
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-center sm:text-left">
            <p className="text-xs text-primary-foreground/50 tracking-wide">
              © {currentYear} SS. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50 tracking-wide italic font-serif">
              Crafted with devotion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

