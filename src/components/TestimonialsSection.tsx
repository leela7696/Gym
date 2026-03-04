import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "GYM & Fitness completely transformed my lifestyle. The trainers are incredibly supportive, the equipment is top-notch, and the environment is welcoming. I've lost 15 kgs in just 4 months!",
  },
  {
    name: "Priya Sharma",
    text: "As a working mother, the child care facility and flexible class timings are a blessing. The online classes option during busy weeks keeps me on track. Best gym in Bowenpally, hands down!",
  },
  {
    name: "Arjun Reddy",
    text: "The swimming pool and tennis court make this place so much more than a gym. I look forward to coming here every day. The wheelchair accessibility also makes it easy for my father to join me.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
          What Our <span className="text-primary">Members</span> Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <Card key={t.name} className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
              <p className="font-bold text-sm uppercase tracking-wide">— {t.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
