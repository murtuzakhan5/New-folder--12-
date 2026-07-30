import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  outfit: string;
  text: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Saima Rizwan",
    location: "DHA Phase 6, Karachi",
    rating: 5,
    outfit: "Bridal Lehenga & Dupatta",
    text: "Farooq Garments did an absolutely magnificent job on my daughter's wedding outfit! The fitting was 100% spot on in the first try, and the dupatta finishing with heavy laces was so neat.",
    date: "2 weeks ago",
  },
  {
    id: "2",
    name: "Dr. Ayesha Malik",
    location: "Gulshan-e-Iqbal, Karachi",
    rating: 5,
    outfit: "Maria.B Lawn Designer Suits",
    text: "I always send my designer unstitched lawn suits to Farooq Garments. They stitch exactly like the brand catalogue picture — organza borders, sleeve loops, cutwork, everything!",
    date: "1 month ago",
  },
  {
    id: "3",
    name: "Farah Naeem",
    location: "PECHS, Karachi",
    rating: 5,
    outfit: "Velvet Maxi & Party Dress",
    text: "Their stitching is pure perfection. I sent a reference picture from Instagram on WhatsApp and got my dress ready within 4 days. Excellent customer service!",
    date: "3 weeks ago",
  },
  {
    id: "4",
    name: "Hira Tariq",
    location: "Clifton, Karachi",
    rating: 5,
    outfit: "Khaadi & Silk Kurti Sets",
    text: "Honest tailors with great attention to detail. The necklines are very neat and stitching holds up after multiple washes without shrinking.",
    date: "1 month ago",
  },
];

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = REVIEWS[index];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-card/60 p-4 sm:p-6 md:p-8 shadow-xl backdrop-blur-md">
      {/* Background Gold Ambient Radial */}
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/50 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-serif text-base sm:text-lg font-bold text-gold-gradient">
              5.0 Out Of 5 Stars
            </span>
          </div>
          <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
            Verified Reviews From Karachi Clients
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
            className="rounded-full border border-border/70 p-2 text-foreground/80 transition hover:border-accent hover:bg-accent/10"
            aria-label="Previous Review"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-xs text-muted-foreground font-mono px-2">
            {index + 1} / {REVIEWS.length}
          </span>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % REVIEWS.length)}
            className="rounded-full border border-border/70 p-2 text-foreground/80 transition hover:border-accent hover:bg-accent/10"
            aria-label="Next Review"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 transition-all duration-500 min-h-[140px] flex flex-col justify-between">
        <div>
          <Quote className="h-8 w-8 text-accent/40 mb-3" />
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 italic">
            "{current.text}"
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border/40 pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 font-serif font-bold text-accent border border-accent/40">
              {current.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-sm text-foreground">{current.name}</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
              </div>
              <span className="text-xs text-muted-foreground">{current.location}</span>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {current.outfit}
            </span>
            <span className="block text-[10px] text-muted-foreground mt-1">{current.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
