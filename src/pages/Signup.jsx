import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate signup (no backend)
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Account Created",
        description: "Your account has been created successfully!",
      });
      // In a real app, you'd handle authentication here
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-md mx-auto">
          <AnimatedSection className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-3 sm:mb-4">
              Create Account
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Join us and discover luxury beauty products
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="name" className="text-xs sm:text-sm tracking-luxury uppercase text-foreground mb-2 block">
                    Full Name
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
                  <Label htmlFor="email" className="text-xs sm:text-sm tracking-luxury uppercase text-foreground mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border-border focus:border-accent focus:ring-accent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-xs sm:text-sm tracking-luxury uppercase text-foreground mb-2 block">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border-border focus:border-accent focus:ring-accent"
                    placeholder="Create a password"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-xs sm:text-sm tracking-luxury uppercase text-foreground mb-2 block">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border-border focus:border-accent focus:ring-accent"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="luxury-button w-full text-xs sm:text-sm"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={300} className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="luxury-link text-foreground hover:text-accent"
              >
                Sign In
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Signup;

