import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to place your order.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Clear cart and navigate to confirmation
      clearCart();
      navigate("/order-confirmation", {
        state: {
          orderDetails: {
            ...formData,
            items: cartItems,
            total: getCartTotal(),
            orderNumber: `ORD-${Date.now()}`,
          },
        },
      });
    }, 1000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 sm:mb-8">
              Your Cart is Empty
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10">
              Add items to your cart before proceeding to checkout.
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
            to="/cart"
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-luxury uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
            Back to Cart
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 sm:mb-10">
                Checkout
              </h1>
            </AnimatedSection>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <AnimatedSection delay={100}>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-xs sm:text-sm tracking-luxury uppercase text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border-border focus:border-accent focus:ring-accent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-xs sm:text-sm tracking-luxury uppercase text-foreground mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border-border focus:border-accent focus:ring-accent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-xs sm:text-sm tracking-luxury uppercase text-foreground mb-2 block">
                      Address *
                    </Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full bg-background border-border focus:border-accent focus:ring-accent resize-none"
                      placeholder="Enter your complete address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city" className="text-xs sm:text-sm tracking-luxury uppercase text-foreground mb-2 block">
                      City *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border-border focus:border-accent focus:ring-accent"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-card p-6 sm:p-8 border border-border">
                  <h3 className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-4 sm:mb-6">
                    Payment Method
                  </h3>
                  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-secondary">
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium text-foreground mb-1">
                        Cash on Delivery (COD)
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Pay when you receive your order
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="luxury-button w-full text-xs sm:text-sm"
                >
                  {isSubmitting ? "Placing Order..." : "Place Order"}
                </Button>
              </AnimatedSection>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={400}>
              <div className="lg:sticky lg:top-32 bg-card p-6 sm:p-8 border border-border">
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-foreground mb-6 sm:mb-8">
                  Order Summary
                </h2>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {/* Order Items */}
                  <div className="space-y-4 sm:space-y-6 max-h-[400px] overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-4 border-b border-border last:border-0">
                        <div className="w-16 sm:w-20 aspect-[3/4] overflow-hidden bg-secondary flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm sm:text-base font-light text-foreground truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-px bg-border" />

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">
                        PKR {getCartTotal().toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">Free</span>
                    </div>
                    <div className="w-full h-px bg-border" />
                    <div className="flex justify-between text-base sm:text-lg font-medium">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">
                        PKR {getCartTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

