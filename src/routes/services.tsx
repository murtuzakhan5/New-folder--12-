import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site-layout";
import { Check, Send, Scissors } from "lucide-react";
import { StitchingEstimator } from "../components/stitching-estimator";
import bridal from "@/assets/cat-bridal.jpg";
import lawn from "@/assets/cat-lawn.jpg";
import party from "@/assets/cat-party.jpg";
import maxi from "@/assets/cat-maxi.jpg";
import formal from "@/assets/cat-formal.jpg";
import silk from "@/assets/cat-silk.jpg";
import tops from "@/assets/cat-tops.jpg";
import atelier from "@/assets/atelier.jpg";
import gentsShalwarKameez from "@/assets/images/gents_designer_shalwar_kameez_1785418674046.jpg";
import kidsSportsSuit from "@/assets/images/kids_sports_suit_1785418684595.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Stitching Services — Farooq Garments" },
      {
        name: "description",
        content:
          "Complete tailoring services: Men's Designer Suits, Kids' Sports Tracksuits, bridal, formal, casual, party wear, lawn, silk & custom stitching in Karachi.",
      },
      { property: "og:title", content: "Our Stitching Services — Farooq Garments" },
      {
        property: "og:description",
        content:
          "Men's Designer Suits, Kids' Sports Activewear, and Ladies Custom Couture in Karachi.",
      },
    ],
  }),
  component: Services,
});

interface ServiceCategory {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  features: string[];
}

const FEATURED_SERVICES: ServiceCategory[] = [
  {
    title: "Men's Designer Suit & Executive Tailoring",
    subtitle: "Gents Executive Tailoring",
    description:
      "Exclusive men's designer suits with detailed embroidered ban collars, cuff stitching, wash & wear fabrics, and bespoke waistcoats.",
    img: gentsShalwarKameez,
    features: [
      "Custom ban collar & cuff embroidery",
      "Premium wash & wear & cotton fabrics",
      "Executive waistcoat pairing & stitching",
    ],
  },
  {
    title: "Kids' Sports Suits & Tracksuits",
    subtitle: "Kids Athletic Wear",
    description:
      "Comfortable, high-quality sports suits, activewear tracksuits, hoodies, and jogger sets designed specifically for boys and kids.",
    img: kidsSportsSuit,
    features: [
      "Soft, stretchable & breathable activewear fabric",
      "Durable stitching for active kids play",
      "Trendy athletic designs & vibrant colors",
    ],
  },
  {
    title: "Bridal Couture & Heavy Wedding Wear",
    subtitle: "Custom Tailoring",
    description:
      "Intricate zardozi, heavy dupattas, and custom lehengas crafted for brides & valima events.",
    img: bridal,
    features: [
      "Perfect fitted bodice & flared skirts",
      "Heavy lining & canvas reinforcement",
      "Hand dori tassels & pearl edging",
    ],
  },
  {
    title: "Branded Suit & Designer Lawn Stitching",
    subtitle: "Maria.B, Khaadi & Branded Suits",
    description: "Expert stitching for unstitched designer lawn, chiffon & cotton collections.",
    img: lawn,
    features: [
      "Organza border attachments",
      "Custom sleeves & neckline cuts",
      "Piping & finish tape",
    ],
  },
  {
    title: "Formal Outfits & Party Wear",
    subtitle: "Festive & Party Wear",
    description: "Glamorous party wear, fancy frocks, and dinner suits tailored to your exact fit.",
    img: party,
    features: [
      "Fancy dupattas & borders",
      "Atal silk inner lining",
      "Modern sequence & lace placement",
    ],
  },
  {
    title: "Flowing Flared Maxis & Gowns",
    subtitle: "Statement Silhouettes",
    description: "High-volume flared maxis, kalidar gowns, and layered dresses with smooth pleats.",
    img: maxi,
    features: [
      "Full flare pleated kalis",
      "Hidden zips & inner padding",
      "Custom floor-length hemline",
    ],
  },
  {
    title: "Pure Silk & Chiffon Tailoring",
    subtitle: "Luxury Fabrics",
    description:
      "Delicate silk, tissue & chiffon tailoring requiring high-precision craftsmanship.",
    img: silk,
    features: [
      "Fine French seam finishing",
      "Hand-crafted neck plackets",
      "Contrast piping & facing",
    ],
  },
  {
    title: "Modern Tops, Shirts & Cigarette Pants",
    subtitle: "Casual & Smart Wear",
    description: "Clean everyday tops, short kurtis, cigarette trousers, and Tulip pants.",
    img: tops,
    features: [
      "Tailored cigarette & tulip pants",
      "Modern neck loop buttons",
      "Clean, comfortable daily fit",
    ],
  },
  {
    title: "Custom Picture & Design Stitching",
    subtitle: "Reference Photo Stitching",
    description:
      "Bring us any image from Instagram, Pinterest, or magazines — we replicate the exact cut.",
    img: atelier,
    features: ["100% accurate cut replication", "Custom size adjustments", "Expert consultation"],
  },
  {
    title: "Neckline Styles & Finishing Details",
    subtitle: "Boutique Finishing",
    description: "Angrakha, Ban collar, cutwork V-necks, and custom sleeve embroidery placement.",
    img: formal,
    features: ["Pearl & bead hand attachments", "Cutwork organza necklines", "Dori tassel work"],
  },
];

const ALL_SERVICES = [
  "Men's Designer Suit & Kameez (Custom Executive Tailoring)",
  "Kids' Sports Suits & Tracksuits (Boys Activewear)",
  "Gents Kurta, Ban Collar & Waistcoat Stitching",
  "Made-to-order dresses & ladies wear",
  "Pakistani bridal dresses & formal wear",
  "Pakistani wedding dresses",
  "Branded suit stitching services",
  "Fancy & casual stitching",
  "Lawn designer dresses",
  "Simple lawn dress stitching",
  "Silk dresses & flared maxis",
  "Party wear dresses & frocks",
  "Women's tops and pants",
  "Latest dress designs & modern neck styles",
  "Custom stitching from pictures & design ideas",
];

const BRANDS = [
  "Maria.B",
  "Khaadi",
  "Nishat Linen",
  "Sana Safinaz",
  "Zara Shahjahan",
  "J.",
  "Baroque",
  "Aghanoor",
];

function Services() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Our Stitching Services"
        subtitle="A complete range of ladies stitching services for casual, formal, bridal, and party wear — with custom fitting and exquisite finishing."
      />

      {/* Featured Service Cards with Images */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold flex items-center justify-center gap-1.5">
            <Scissors className="h-4 w-4" /> Tailoring Showcase
          </div>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl">
            Explore Our Specialty Stitching
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Each service is executed with master precision, quality thread work, and durable inner
            finishes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-card transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(200,160,60,0.25)] hover:-translate-y-1"
            >
              <div>
                {/* Medium sized image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-muted">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-[10px] uppercase tracking-wider font-semibold text-accent bg-black/70 px-2.5 py-0.5 rounded border border-accent/30 backdrop-blur">
                    {s.subtitle}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="mt-3.5 space-y-1.5 border-t border-border/50 pt-3 text-xs">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-foreground/80">
                        <Check className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <a
                  href={`https://wa.me/923168941755?text=${encodeURIComponent(
                    `Hi Farooq Garments! I am interested in your "${s.title}" stitching service. Please share details!`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-accent/50 bg-accent/10 py-2.5 text-xs font-semibold text-accent transition-all hover:bg-gold-gradient hover:text-primary-foreground"
                >
                  <Send className="h-3.5 w-3.5" />
                  Inquire Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Service Checklist */}
      <section className="border-t border-border/60 bg-secondary/20 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Complete List
            </span>
            <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold">
              All Stitching & Customization Services
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_SERVICES.map((s) => (
              <div
                key={s}
                className="flex items-start gap-3 rounded-md border border-border/70 bg-card p-3.5 sm:p-4 transition-all duration-200 hover:border-accent hover:shadow-md"
              >
                <Check className="mt-0.5 h-4 sm:h-5 w-4 sm:w-5 shrink-0 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-foreground/90">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Customizer */}
      <section className="border-t border-border/60 bg-secondary/30 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <StitchingEstimator />
        </div>
      </section>

      {/* Brands Section */}
      <section className="border-t border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] opacity-80">
            Branded Suit Stitching
          </div>
          <h2 className="mt-2 sm:mt-3 font-serif text-xl sm:text-2xl md:text-3xl">
            We work with styles inspired by:
          </h2>
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
            {BRANDS.map((b) => (
              <span
                key={b}
                className="rounded-full border border-primary-foreground/30 px-3.5 py-1 text-xs sm:text-sm"
              >
                {b}
              </span>
            ))}
            <span className="rounded-full px-3 py-1 text-xs sm:text-sm opacity-70">& more</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Have a design in mind?</h2>
        <p className="mt-3 text-xs sm:text-base text-muted-foreground">
          Share a reference picture or a simple idea — we'll turn it into a finished, wearable
          piece.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-md bg-gold-gradient px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 shadow-md transition-transform hover:scale-105"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
