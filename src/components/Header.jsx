import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Collections", path: "/collections" },
    { name: "Philosophy", path: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ease-luxury ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="luxury-heading text-xl sm:text-2xl md:text-3xl tracking-luxury-wide text-foreground hover:text-accent transition-colors duration-400"
              style={{ fontFamily: "'Blosta', sans-serif" }}
            >
              SS
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`luxury-link text-sm tracking-luxury uppercase font-light transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="relative text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-medium rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount > 99 ? "99+" : cartItemCount}
                  </span>
                )}
              </Link>

              {/* Auth Buttons */}
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className={`luxury-link text-sm tracking-luxury uppercase font-light transition-colors duration-300 ${
                    location.pathname === "/login"
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="luxury-button text-xs px-6 py-2"
                >
                  Signup
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button and Cart */}
            <div className="md:hidden flex items-center gap-4">
              <Link
                to="/cart"
                className="relative text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-medium rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount > 99 ? "99+" : cartItemCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 ease-luxury md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            to="/"
            className={`luxury-heading text-3xl tracking-luxury transition-colors duration-300 ${
              location.pathname === "/"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            Home
          </Link>
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`luxury-heading text-3xl tracking-luxury transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-foreground hover:text-accent"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/cart"
            className={`luxury-heading text-3xl tracking-luxury transition-colors duration-300 ${
              location.pathname === "/cart"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            Cart ({cartItemCount})
          </Link>
          <Link
            to="/login"
            className={`luxury-heading text-3xl tracking-luxury transition-colors duration-300 ${
              location.pathname === "/login"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`luxury-heading text-3xl tracking-luxury transition-colors duration-300 ${
              location.pathname === "/signup"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            Signup
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;

