import { Dumbbell, Heart, UserCheck, TrendingDown, Monitor, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build muscle and increase power with our comprehensive strength training programs and premium equipment." },
  { icon: Heart, title: "Cardio Workouts", desc: "Boost your endurance and heart health with high-energy cardio sessions designed for all fitness levels." },
  { icon: UserCheck, title: "Personal Training", desc: "Get personalized coaching from certified trainers who create custom plans tailored to your goals." },
  { icon: TrendingDown, title: "Weight Loss Programs", desc: "Achieve sustainable weight loss with our structured programs combining diet guidance and targeted workouts." },
  { icon: Monitor, title: "Online Fitness Classes", desc: "Train from anywhere with our live and on-demand online classes led by expert instructors." },
  { icon: TreePine, title: "Outdoor Training", desc: "Enjoy fresh-air workouts with our outdoor training sessions that keep things fun and challenging." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-card/50">
    <div className="container mx-auto px-4 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to transform your fitness journey.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
