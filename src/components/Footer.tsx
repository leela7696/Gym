const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="space-y-3">
          <h3 className="text-lg font-bold uppercase tracking-wider text-primary" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Shripallavi Fitness
          </h3>
          <p className="text-sm text-muted-foreground">
            Beside DRDL Residential Complex, Diamond Point, Icrisat Colony, Bowenpally, Secunderabad, Telangana 500009
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-sm">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#plans" className="hover:text-primary transition-colors">Plans</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-sm">Contact</h4>
          <a href="tel:09888345345" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
            098883 45345
          </a>
          <p className="text-sm text-muted-foreground">Open · Closes 8 PM</p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shripallavi Fitness and Gym. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
