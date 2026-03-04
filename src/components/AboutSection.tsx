const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-3xl space-y-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
        About <span className="text-primary">Us</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        This is placeholder content for the About section. Replace this text with
        real information about your brand, mission, and services when ready.
      </p>
      <div className="bg-card border border-border rounded-lg p-6 text-left space-y-4 mx-auto">
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          fringilla, ipsum nec aliquet efficitur, nisl nisl tristique neque,
          eget luctus elit lectus nec augue. Sed posuere, eros at pulvinar
          volutpat, ipsum massa pharetra metus, vitae tincidunt enim nibh id
          lectus.
        </p>
        <p className="text-sm text-muted-foreground">
          Mauris a nunc non lacus feugiat faucibus. Suspendisse potenti. Donec
          ac lorem at lorem malesuada bibendum. Cras blandit, velit in
          malesuada lobortis, dui lorem pellentesque lacus, in tempus nibh
          mauris eu justo.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Dummy point one describing a key highlight.</li>
          <li>Dummy point two outlining a core value.</li>
          <li>Dummy point three summarizing an offering.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
