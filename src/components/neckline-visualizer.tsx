import { useState } from "react";
import { Scissors, ZoomIn, Check, Send } from "lucide-react";
import formal from "@/assets/cat-formal.jpg";
import party from "@/assets/cat-party.jpg";
import silk from "@/assets/cat-silk.jpg";
import lawn from "@/assets/cat-lawn.jpg";
import tops from "@/assets/cat-tops.jpg";
import bridal from "@/assets/cat-bridal.jpg";

interface StylePattern {
  id: string;
  name: string;
  category: string;
  description: string;
  img: string;
  popularFor: string;
}

const PATTERNS: StylePattern[] = [
  {
    id: "angrakha",
    name: "Classic Angrakha Flared Neck",
    category: "Formal & Party",
    description: "Overlapping front panels tied with hand-crafted dori tassels and lace edging.",
    img: party,
    popularFor: "Maxi, Silk Suits & Festive Wear",
  },
  {
    id: "ban-collar",
    name: "Chinese Ban Collar with Loops",
    category: "Casual & Lawn",
    description:
      "High neat ban collar with fabric loop buttons, pearl accents, and contrast piping.",
    img: lawn,
    popularFor: "Printed Lawn & Branded Kurtas",
  },
  {
    id: "cutwork-v",
    name: "Organza Cutwork V-Neck",
    category: "Designer Lawn",
    description: "Laser cutwork border stitched onto delicate sheer organza with pearl droplets.",
    img: formal,
    popularFor: "Maria.B & Khaadi Suit Stitching",
  },
  {
    id: "keyhole-pearl",
    name: "Round Keyhole with Pearl Trim",
    category: "Semi-Formal",
    description:
      "Elegant circular keyhole cut at neckline decorated with freshwater pearls and laces.",
    img: silk,
    popularFor: "Silk Dresses & Party Tops",
  },
  {
    id: "heavy-embroidered",
    name: "Bridal Zardozi Neck Framing",
    category: "Bridal Couture",
    description:
      "Full heavy neck border reinforcement crafted for heavy zari and sequence fabrics.",
    img: bridal,
    popularFor: "Lehengas, Shararas & Heavy Gowns",
  },
  {
    id: "overlap-patti",
    name: "Overlapping Placket Patti",
    category: "Modern Casual",
    description: "Clean straight overlap patti with subtle pin-tucks and metal button accents.",
    img: tops,
    popularFor: "Cigarette Pant & Kurti Sets",
  },
];

export function NecklineVisualizer() {
  const [activePattern, setActivePattern] = useState<StylePattern>(PATTERNS[0]);
  const [zoomModal, setZoomModal] = useState<StylePattern | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
            <Scissors className="h-3.5 w-3.5" />
            Finishing Mastery
          </div>
          <h3 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
            Popular Necklines & Tailoring Details
          </h3>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Explore our signature neck styles and finishing techniques. Click any design to preview
            details or request it for your suit.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Gallery Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
          {PATTERNS.map((p) => {
            const isSelected = activePattern.id === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setActivePattern(p)}
                className={`group relative cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 ${
                  isSelected
                    ? "border-accent ring-2 ring-accent/40 shadow-[0_0_20px_rgba(200,160,60,0.3)] scale-[1.02]"
                    : "border-border/60 bg-card hover:border-accent/50"
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {isSelected && (
                    <div className="absolute top-3 right-3 rounded-full bg-accent p-1 text-primary-foreground shadow">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomModal(p);
                    }}
                    className="absolute top-3 left-3 rounded-md bg-black/70 p-2 text-white backdrop-blur opacity-100 sm:opacity-0 transition-opacity sm:group-hover:opacity-100 hover:bg-black"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                      {p.category}
                    </span>
                    <h4 className="mt-1 font-serif text-lg font-medium text-white drop-shadow">
                      {p.name}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Detail Spotlight Card */}
        <div className="flex flex-col justify-between rounded-xl border border-accent/40 bg-card/80 p-6 shadow-xl backdrop-blur-md">
          <div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-border/60 relative mb-4">
              <img
                src={activePattern.img}
                alt={activePattern.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-[10px] uppercase text-accent font-semibold backdrop-blur">
                Farooq Garments Finish
              </div>
            </div>

            <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold">
              {activePattern.category}
            </span>
            <h4 className="mt-1 font-serif text-2xl font-bold">{activePattern.name}</h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {activePattern.description}
            </p>

            <div className="mt-4 rounded-lg bg-secondary/50 p-3 border border-border/50">
              <span className="text-xs font-semibold text-foreground">Best Suited For:</span>
              <p className="mt-0.5 text-xs text-accent font-medium">{activePattern.popularFor}</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/60">
            <a
              href={`https://wa.me/923168941755?text=${encodeURIComponent(
                `Hi Farooq Garments! I would like to get my outfit stitched with the "${activePattern.name}" style (${activePattern.category}). Please let me know how to proceed!`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-gradient py-3 text-sm font-semibold text-primary-foreground shadow transition-all hover:scale-105"
            >
              <Send className="h-4 w-4" />
              Request This Neckline on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-sm animate-fade-in-slow"
          onClick={() => setZoomModal(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto rounded-2xl border border-accent/50 bg-card p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomModal(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-accent hover:text-black transition"
            >
              ✕
            </button>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60">
              <img
                src={zoomModal.img}
                alt={zoomModal.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4">
              <span className="text-xs uppercase text-accent font-semibold tracking-wider">
                {zoomModal.category}
              </span>
              <h3 className="font-serif text-2xl font-bold">{zoomModal.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{zoomModal.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
