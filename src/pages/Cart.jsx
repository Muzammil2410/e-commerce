import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 sm:mb-8">
              Your Cart is Empty
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10">
              Discover our luxury collection and add items to your cart.
            </p>
            <Link to="/collections" className="luxury-button text-xs sm:text-sm inline-block">
              Explore Collections
            </Link>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Back Link */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-luxury uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <AnimatedSection>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 sm:mb-10">
                Shopping Cart
              </h1>
            </AnimatedSection>

            <div className="space-y-6 sm:space-y-8">
              {cartItems.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 100}>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-border">
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.id}`}
                      className="w-full sm:w-32 md:w-40 aspect-[3/4] overflow-hidden bg-secondary flex-shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-2 sm:space-y-3">
                        <Link
                          to={`/product/${item.id}`}
                          className="block"
                        >
                          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-light text-foreground hover:text-accent transition-colors duration-300">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                            {item.tagline}
                          </p>
                        </Link>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4 sm:mt-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="text-xs sm:text-sm tracking-luxury uppercase text-muted-foreground">
                            Quantity
                          </span>
                          <div className="flex items-center gap-2 sm:gap-3 border border-border">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 sm:h-9 sm:w-9 p-0 hover:bg-primary hover:text-primary-foreground rounded-none"
                            >
                              <Minus size={14} />
                            </Button>
                            <span className="text-sm sm:text-base font-medium w-8 sm:w-10 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 sm:h-9 sm:w-9 p-0 hover:bg-primary hover:text-primary-foreground rounded-none"
                            >
                              <Plus size={14} />
                            </Button>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors duration-300"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={300}>
              <div className="lg:sticky lg:top-32 bg-card p-6 sm:p-8 border border-border">
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-foreground mb-6 sm:mb-8">
                  Order Summary
                </h2>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Items</span>
                    <span className="text-foreground">{cartItems.length}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">
                      {/* Placeholder - in real app, use actual prices */}
                      PKR {getCartTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div className="flex justify-between text-base sm:text-lg font-medium">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">
                      {/* Placeholder - in real app, use actual prices */}
                      PKR {getCartTotal().toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="luxury-button w-full text-center text-xs sm:text-sm block"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

