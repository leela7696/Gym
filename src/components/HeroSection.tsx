import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck, Star } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src="/bg.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/placeholder.svg"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm text-primary">
        <Star size={16} className="fill-primary" />
        5.0 Rated Gym
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none">
        Train Strong.<br />
        <span className="text-primary">Live Better.</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Transform Your Body at GYM & Fitness and Gym
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" asChild className="text-base px-8">
          <a href="#plans">Join Now</a>
        </Button>
        <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary/50 hover:bg-primary/10">
          <a href="#contact"><CalendarCheck size={18} className="mr-2" />Book Appointment</a>
        </Button>
        <Button size="lg" variant="secondary" asChild className="text-base px-8">
          <a href="tel:9346542665"><Phone size={18} className="mr-2" />Call Now</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
