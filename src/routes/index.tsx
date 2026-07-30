import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scissors, Crown, Shirt, Palette, HeartHandshake } from "lucide-react";
import heroBridal from "@/assets/hero-bridal.jpg";
import heroFormal from "@/assets/hero-formal.jpg";
import heroFabric from "@/assets/hero-fabric.jpg";
import { StitchingEstimator } from "../components/stitching-estimator";
import { NecklineVisualizer } from "../components/neckline-visualizer";
import { ReviewsCarousel } from "../components/reviews-carousel";
import { DesignerProfileCard } from "../components/designer-profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farooq Garments — Elegant Ladies Wear & Custom Stitching in Karachi" },
      {
        name: "description",
        content:
          "Farooq Garments specializes in ladies clothing, custom stitching, and designer wear — casual, formal, bridal, and party outfits crafted in Karachi.",
      },
      { property: "og:title", content: "Farooq Garments — Elegant Ladies Wear & Custom Stitching" },
      {
        property: "og:description",
        content:
          "Beautiful ladies outfits with quality stitching, stylish designs, and a perfect fit for every customer.",
      },
    ],
  }),
  component: Home,
});

const HIGHLIGHTS = [
  {
    icon: Shirt,
    title: "Casual & Formal Wear",
    body: "Everyday elegance and polished formal pieces.",
  },
  {
    icon: Crown,
    title: "Bridal & Wedding Dresses",
    body: "Statement bridal wear crafted with care for your big day.",
  },
  {
    icon: HeartHandshake,
    title: "Lawn, Silk, Maxi & Party Wear",
    body: "A wide range of fabrics and silhouettes for every season.",
  },
  {
    icon: Scissors,
    title: "Custom Stitching",
    body: "Bring us your pictures and ideas — we stitch them to life.",
  },
  {
    icon: Palette,
    title: "Modern Neck Styles",
    body: "Fine detailing and the latest neckline designs finished with genuine care.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Share Your Idea",
    body: "Send a picture, design, or fabric — or visit us in person.",
  },
  {
    n: "02",
    title: "Consultation & Measurements",
    body: "We plan the fit, fabric, and finishing details together.",
  },
  {
    n: "03",
    title: "Stitching & Fitting",
    body: "Our team stitches your piece with careful attention to detail.",
  },
  {
    n: "04",
    title: "Ready to Wear",
    body: "Collect a beautifully finished outfit made just for you.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        {/* animated background */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="animate-orb absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div
            className="animate-orb absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="animate-orb absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
            style={{ animationDelay: "6s" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0,var(--background)_70%)]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 px-4 sm:px-6 py-12 sm:py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            {/* Logo Emblem Header Badge */}
            <div className="mb-4 sm:mb-6 animate-fade-up">
              <div className="inline-flex items-center gap-3 sm:gap-4 rounded-2xl border border-accent/30 bg-card/60 p-2 sm:p-2.5 pr-4 sm:pr-6 shadow-md backdrop-blur-md max-w-full">
                <img
                  src="/farooq-official-logo.svg"
                  alt="Farooq Garments Official Logo"
                  className="h-12 sm:h-16 w-auto object-contain shrink-0 filter drop-shadow-[0_2px_8px_rgba(200,160,60,0.4)]"
                />
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-accent truncate">
                    Official Brand Emblem
                  </div>
                  <div className="text-[11px] sm:text-xs font-serif text-foreground/90 truncate">
                    Karachi · Established Ladies Couture
                  </div>
                </div>
              </div>
            </div>

            <h1 className="animate-fade-up font-serif text-3xl sm:text-5xl md:text-6xl leading-tight text-foreground delay-100">
              Farooq <span className="gold-shimmer">Garments</span>
            </h1>
            <p className="mt-3 sm:mt-4 animate-fade-up font-serif text-lg sm:text-2xl md:text-3xl text-gold-gradient delay-200">
              Ladies Couture, Men's Designer Suits & Kids' Sports Suits
            </p>
            <p className="mt-4 sm:mt-6 max-w-xl animate-fade-up text-sm sm:text-base md:text-lg text-muted-foreground delay-300">
              Farooq Garments specializes in ladies clothing, custom stitching, men's designer
              suits, and kids' sports suits. We craft premium bespoke outfits with quality
              stitching, stylish embroidered necklines, and a perfect fit.
            </p>
            <div className="mt-6 sm:mt-8 flex animate-fade-up flex-col sm:flex-row gap-3 delay-400">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold-gradient px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 glow-gold"
              >
                View Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-accent/60 px-6 py-3 text-sm font-medium text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
              >
                Shop Collection
              </Link>
            </div>
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-md animate-fade-up delay-500">
              {[
                { k: "20+", v: "Years Craft" },
                { k: "1000+", v: "Happy Clients" },
                { k: "100%", v: "Custom Fit" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-lg border border-accent/20 bg-card/40 p-2 sm:p-3 text-center backdrop-blur"
                >
                  <div className="font-serif text-xl sm:text-2xl text-gold-gradient">{s.k}</div>
                  <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-slow delay-200">
            {/* decorative gold frame */}
            <div aria-hidden className="absolute -inset-4 rounded-2xl border border-accent/30" />
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-gradient opacity-30 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -left-8 top-1/3 h-16 w-16 rounded-full bg-accent/30 blur-2xl animate-orb"
            />
            <div
              aria-hidden
              className="absolute -bottom-6 right-10 h-20 w-20 rounded-full bg-accent/20 blur-2xl animate-orb"
              style={{ animationDelay: "2s" }}
            />
            <div className="relative grid grid-cols-2 gap-3">
              <div className="img-zoom row-span-2 overflow-hidden rounded-lg ring-1 ring-accent/30">
                <img
                  src={heroBridal}
                  alt="Bridal outfit"
                  className="h-full w-full animate-kenburns object-cover"
                />
              </div>
              <div className="img-zoom overflow-hidden rounded-lg ring-1 ring-accent/20">
                <img
                  src={heroFormal}
                  alt="Formal wear"
                  loading="lazy"
                  className="h-full w-full object-cover aspect-square"
                />
              </div>
              <div className="img-zoom overflow-hidden rounded-lg ring-1 ring-accent/20">
                <img
                  src={heroFabric}
                  alt="Luxury fabric"
                  loading="lazy"
                  className="h-full w-full object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee band */}
      <section
        aria-hidden
        className="overflow-hidden border-y border-border/60 bg-secondary/50 py-4"
      >
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-serif text-xl text-accent/80">
          {Array.from({ length: 2 }).map((_, r) => (
            <div key={r} className="flex gap-12">
              {[
                "Men's Designer Suits",
                "✦",
                "Kids' Sports Suits",
                "✦",
                "Bridal Couture",
                "✦",
                "Custom Stitching",
                "✦",
                "Lawn & Silk",
                "✦",
                "Party Wear & Maxis",
                "✦",
              ].map((t, i) => (
                <span key={`${r}-${i}`} className="tracking-[0.25em] uppercase text-sm">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Stitching Cost Calculator */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
        <StitchingEstimator />
      </section>

      {/* Finishing & Necklines Showcase */}
      <section className="border-t border-border/60 bg-secondary/30 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <NecklineVisualizer />
        </div>
      </section>

      {/* Lead Designer & Manager Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <DesignerProfileCard />
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="mb-8 sm:mb-12 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            What We Offer
          </div>
          <h2 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
            Style for every occasion
          </h2>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.title}
              className="group hover-lift animate-fade-up rounded-xl border border-border/70 bg-card p-5 sm:p-6 transition hover:border-accent shadow-md"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent transition-transform group-hover:rotate-6 group-hover:scale-110">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold">{h.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="mb-6 sm:mb-8">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Client Satisfaction
          </div>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl">What Our Clients Say</h2>
        </div>
        <ReviewsCarousel />
      </section>

      {/* How We Work */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
          <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">How We Work</div>
              <h2 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-3xl md:text-4xl">
                From idea to outfit
              </h2>
            </div>
            <Link to="/about" className="text-xs sm:text-sm text-primary hover:underline">
              Learn more about us →
            </Link>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="hover-lift animate-fade-up rounded-lg border border-border/70 bg-card p-5 sm:p-6"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="font-serif text-2xl sm:text-3xl gold-shimmer">{s.n}</div>
                <div className="mt-2 sm:mt-3 font-medium text-sm sm:text-base">{s.title}</div>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden border-t border-border/60 bg-secondary/30">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="animate-orb absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
          <div
            className="animate-orb absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
            style={{ animationDelay: "4s" }}
          />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 py-12 sm:py-16 text-center md:flex-row md:text-left">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Ready to begin?</div>
            <h3 className="mt-2 font-serif text-xl sm:text-2xl md:text-3xl text-foreground">
              Send us your design on WhatsApp — we'll take it from there.
            </h3>
          </div>
          <a
            href="https://wa.me/923168941755"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-md bg-gold-gradient px-8 py-3 text-sm font-medium text-accent-foreground glow-gold transition hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
