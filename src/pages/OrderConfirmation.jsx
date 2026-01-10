import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;

  useEffect(() => {
    // Redirect if no order details
    if (!orderDetails) {
      navigate("/");
    }
  }, [orderDetails, navigate]);

  if (!orderDetails) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center">
                <CheckCircle2 size={40} className="sm:w-12 sm:h-12 md:w-16 md:h-16 text-accent-foreground" />
              </div>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6">
              Order Placed Successfully
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Thank you for your order. We've received your order and will begin processing it shortly.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-card p-6 sm:p-8 md:p-10 border border-border mb-8 sm:mb-10">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-2">
                    Order Number
                  </p>
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-foreground">
                    {orderDetails.orderNumber}
                  </p>
                </div>

                <div className="w-full h-px bg-border" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-2">
                      Delivery Address
                    </p>
                    <div className="text-sm sm:text-base text-foreground space-y-1">
                      <p className="font-medium">{orderDetails.name}</p>
                      <p>{orderDetails.address}</p>
                      <p>{orderDetails.city}</p>
                      <p className="text-muted-foreground">{orderDetails.phone}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-2">
                      Payment Method
                    </p>
                    <p className="text-sm sm:text-base text-foreground">
                      Cash on Delivery (COD)
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-border" />

                <div>
                  <p className="text-xs sm:text-sm tracking-luxury-wide uppercase text-accent mb-4 sm:mb-6">
                    Order Items
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    {orderDetails.items.map((item) => (
                      <div key={item.id} className="flex gap-4 sm:gap-6">
                        <div className="w-20 sm:w-24 md:w-32 aspect-[3/4] overflow-hidden bg-secondary flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-serif text-base sm:text-lg md:text-xl font-light text-foreground">
                              {item.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                              {item.tagline}
                            </p>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-border" />

                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    Total Amount
                  </span>
                  <span className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-foreground">
                    PKR {orderDetails.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} className="text-center space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm text-muted-foreground">
              You will receive a confirmation email shortly. Our team will contact you to confirm your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link to="/collections" className="luxury-button text-xs sm:text-sm">
                Continue Shopping
              </Link>
              <Link to="/" className="luxury-button-gold text-xs sm:text-sm">
                Back to Home
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

