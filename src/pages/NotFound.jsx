import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        <p className="text-xs tracking-luxury-wide uppercase text-accent mb-6">
          404
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-6">
          Lost in Luxury
        </h1>
        <p className="editorial-text text-muted-foreground mb-12">
          The page you seek has drifted beyond our realm. Perhaps destiny leads
          you elsewhere.
        </p>
        <Link to="/" className="luxury-button">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

