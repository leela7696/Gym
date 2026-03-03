import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "/month",
    popular: false,
    features: ["Gym floor access", "Locker room & showers", "Basic equipment usage", "Fitness assessment"],
  },
  {
    name: "Standard",
    price: "₹2,999",
    period: "/month",
    popular: true,
    features: ["Everything in Basic", "Group fitness classes", "Swimming pool access", "1 personal training session/month", "Diet consultation"],
  },
  {
    name: "Premium",
    price: "₹4,999",
    period: "/month",
    popular: false,
    features: ["Everything in Standard", "Unlimited personal training", "Tennis court access", "Online classes included", "Priority booking", "Guest pass (2/month)"],
  },
];

const PlansSection = () => (
  <section id="plans" className="py-20 md:py-28 bg-card/50">
    <div className="container mx-auto px-4 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Membership <span className="text-primary">Plans</span>
        </h2>
        <p className="text-muted-foreground text-lg">Choose the plan that fits your goals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative bg-card border-border transition-all duration-300 hover:-translate-y-1 ${
              plan.popular ? "border-primary ring-2 ring-primary/30 scale-[1.02]" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase px-4 py-1 rounded-full tracking-wider">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl uppercase tracking-wide">{plan.name}</CardTitle>
              <div className="pt-2">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                <a href="#contact">Join Now</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default PlansSection;
