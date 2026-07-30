import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site-layout";
import { BadgeCheck, Ruler, Palette, Award } from "lucide-react";
import { DesignerProfileCard } from "../components/designer-profile";
import atelier from "@/assets/atelier.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Farooq Garments" },
      {
        name: "description",
        content:
          "Farooq Garments is a Karachi-based ladies clothing and stitching brand dedicated to style, quality, and comfort.",
      },
      { property: "og:title", content: "About Farooq Garments" },
      {
        property: "og:description",
        content: "Style, quality, and comfort — elegant outfits with professional finishing.",
      },
    ],
  }),
  component: About,
});

const WHY = [
  {
    icon: BadgeCheck,
    title: "Quality Stitching",
    body: "Professional finishing and careful attention to detail on every order.",
  },
  {
    icon: Ruler,
    title: "Perfect Fit",
    body: "Outfits tailored to your measurements for a comfortable, flattering fit.",
  },
  {
    icon: Palette,
    title: "Design Flexibility",
    body: "Custom stitching from your own pictures, ideas, and inspiration.",
  },
  {
    icon: Award,
    title: "Trusted Branded Stitching",
    body: "Experienced with leading branded suits and designer fabrics.",
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

function About() {
  return (
    <div>
      <PageHeader eyebrow="About Us" title="Style, quality, and comfort — stitched with care" />

      <section className="mx-auto grid max-w-7xl gap-8 sm:gap-12 px-4 sm:px-6 py-12 sm:py-20 md:grid-cols-2">
        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-muted-foreground md:text-lg">
          <div className="mb-4 inline-flex items-center gap-3.5 rounded-2xl border border-accent/30 bg-card/60 p-2 sm:p-2.5 pr-5 shadow-sm max-w-full">
            <img
              src="/farooq-official-logo.svg"
              alt="Farooq Garments Official Logo"
              className="h-12 sm:h-16 w-auto object-contain shrink-0 filter drop-shadow-[0_2px_8px_rgba(200,160,60,0.3)]"
            />
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent truncate">
                Brand Heritage
              </div>
              <div className="text-xs font-serif text-foreground/90 truncate">
                Farooq Garments Karachi
              </div>
            </div>
          </div>

          <p>
            Farooq Garments is a ladies clothing and stitching brand dedicated to style, quality,
            and comfort. We create elegant outfits for women with professional finishing and
            attention to detail.
          </p>
          <p>
            Our team works on custom designs, branded suit stitching, and fashion-inspired dresses
            to match your style and occasion — turning a reference picture or a simple idea into a
            finished, wearable piece.
          </p>
          <p className="font-serif text-xl text-primary md:text-2xl">
            We believe in delivering beautiful clothing that feels as good as it looks.
          </p>
        </div>
        <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/5" }}>
          <img
            src={atelier}
            alt="Our atelier"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Designer & Manager Profile Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16">
        <DesignerProfileCard />
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
          <div className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Why Choose Us
            </div>
            <h2 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
              Why Choose Farooq Garments
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-border/70 bg-card p-5 sm:p-6 transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(200,160,60,0.15)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Our Process
          </div>
          <h2 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
            From Idea to Outfit
          </h2>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-border/70 bg-card p-5 sm:p-6 transition-all duration-300 hover:border-accent"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-accent">{s.n}</div>
              <div className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base">{s.title}</div>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
