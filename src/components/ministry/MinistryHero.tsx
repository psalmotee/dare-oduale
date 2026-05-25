export function MinistryHero() {
  return (
    <section
      aria-labelledby="ministry-hero-heading"
      className="relative bg-primary overflow-hidden"
    >
      <div className="px-6 py-12 md:px-14 md:py-18 mx-auto max-w-6xl">
        <p className="text-secondary text-xs font-semibold tracking-[1.5px] uppercase mb-2">
         CALLING & CONVICTION
        </p>

        {/* Main Quote */}
        <blockquote className="space-y-6 md:space-y-8">
          <h1 className="quote-text text-6xl text-primary-foreground itali">
            &ldquo;Ministry was never something I was assigned to. It was
            something I kept walking towards — even at five years old.&ldquo;
          </h1>
          <div className="bg-linear-to-l from-primary to-secondary h-1 w-26"></div>

          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">
            A lifetime of service defined by an unwavering pursuit of divine
            purpose, from the quiet pews of childhood to leading hundreds in the
            heart of urban centers.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
