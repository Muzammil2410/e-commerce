import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link
              to="/"
              className="luxury-heading text-3xl tracking-luxury-wide hover:text-accent transition-colors duration-400"
            >
              SS
            </Link>
            <p className="luxury-body text-sm text-primary-foreground/70 max-w-xs">
              Crafting moments of refined luxury through artisanal beauty creations.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="luxury-heading text-xs tracking-luxury-wide text-accent">
              Explore
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/collections"
                className="luxury-link text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 w-fit"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="luxury-link text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 w-fit"
              >
                Our Philosophy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="luxury-heading text-xs tracking-luxury-wide text-accent">
              Connect
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p>inquiries@ss-beauty.com</p>
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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

