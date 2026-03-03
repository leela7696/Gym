import { Badge } from "@/components/ui/badge";

const highlights = [
  "5.0 Rated",
  "LGBTQ+ Friendly",
  "Online Classes",
  "Outdoor Services",
  "Child Care",
  "Wheelchair Accessible",
  "Google Pay Accepted",
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
        About <span className="text-primary">Us</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Shripallavi Fitness and Gym is a 5-star rated, inclusive fitness center located in the heart of Bowenpally, Secunderabad. 
        We believe fitness is for everyone — regardless of age, ability, or background. Our state-of-the-art facility offers world-class 
        equipment, expert trainers, and a welcoming environment to help you reach your goals.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {highlights.map((h) => (
          <Badge key={h} variant="outline" className="text-sm px-4 py-1.5 border-primary/40 text-primary">
            {h}
          </Badge>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
