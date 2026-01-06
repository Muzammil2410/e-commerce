import { Link } from "react-router-dom";

const ProductCard = ({ product, index = 0 }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-800 ease-luxury group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="luxury-button-gold text-xs">
            Discover
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs tracking-luxury uppercase text-muted-foreground">
          {product.category === "perfume"
            ? "Perfume"
            : product.category === "cream"
            ? "Cream"
            : "Body Lotions"}
        </p>
        <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide text-foreground group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <p className="luxury-body text-sm text-muted-foreground line-clamp-2">
          {product.tagline}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;

