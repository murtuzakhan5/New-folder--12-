import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ImagePlaceholder } from "../components/site-layout";
import { ShoppingBag, Send, Scissors, Filter, X } from "lucide-react";
import { useState } from "react";
import casual from "@/assets/cat-casual.jpg";
import formal from "@/assets/cat-formal.jpg";
import bridal from "@/assets/cat-bridal.jpg";
import wedding from "@/assets/cat-wedding.jpg";
import party from "@/assets/cat-party.jpg";
import lawn from "@/assets/cat-lawn.jpg";
import silk from "@/assets/cat-silk.jpg";
import maxi from "@/assets/cat-maxi.jpg";
import tops from "@/assets/cat-tops.jpg";
import gentsShalwarKameez from "@/assets/images/gents_designer_shalwar_kameez_1785418674046.jpg";
import kidsSportsSuit from "@/assets/images/kids_sports_suit_1785418684595.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Our Collection — Farooq Garments" },
      {
        name: "description",
        content:
          "Ready-to-wear & custom-stitched outfits: ladies wear, men's designer suits, kids' sports suits, casual, formal, bridal, lawn & silk.",
      },
      { property: "og:title", content: "Shop Our Collection — Farooq Garments" },
      {
        property: "og:description",
        content: "Ready-to-wear and custom-stitched outfits for ladies, gents, and kids.",
      },
    ],
  }),
  component: Shop,
});

interface CollectionCategory {
  id: string;
  title: string;
  body: string;
  type: "Casual" | "Formal" | "Bridal" | "Party" | "Gents Wear" | "Kids Wear";
  img: string;
}

const CATEGORIES: CollectionCategory[] = [
  {
    id: "gents-shalwar-kameez",
    title: "Men's Designer Suit & Kameez",
    body: "Exclusive designer men's suits with embroidered ban collars, cuff details & waistcoat pairings.",
    type: "Gents Wear",
    img: gentsShalwarKameez,
  },
  {
    id: "kids-sports-suit",
    title: "Kids' Sports Suits & Tracksuits",
    body: "Trendy sports suits, tracksuits & activewear sets for boys & kids in comfortable breathable fabric.",
    type: "Kids Wear",
    img: kidsSportsSuit,
  },
  {
    id: "casual",
    title: "Ladies Casual Wear",
    body: "Everyday comfort with elegant tailored finish.",
    type: "Casual",
    img: casual,
  },
  {
    id: "formal",
    title: "Formal Outfit Sets",
    body: "Polished embroidered pieces for dinners and events.",
    type: "Formal",
    img: formal,
  },
  {
    id: "bridal",
    title: "Bridal Couture Ensembles",
    body: "Statement heavy bridal wear stitched for your big day.",
    type: "Bridal",
    img: bridal,
  },
  {
    id: "wedding",
    title: "Wedding & Festive Suits",
    body: "Crafted for sisters of the bride & wedding guests.",
    type: "Bridal",
    img: wedding,
  },
  {
    id: "party",
    title: "Party Wear & Frocks",
    body: "Glamorous party wear tailored to your exact measurements.",
    type: "Party",
    img: party,
  },
  {
    id: "lawn",
    title: "Branded Lawn Collections",
    body: "Season-ready designer lawn stitching with lace accents.",
    type: "Casual",
    img: lawn,
  },
  {
    id: "silk",
    title: "Pure Silk & Chiffon Dresses",
    body: "Luxurious silk silhouettes with contrast piping.",
    type: "Formal",
    img: silk,
  },
  {
    id: "maxi",
    title: "Flowing Flared Maxis",
    body: "Flowing, effortless elegance with inner silk lining.",
    type: "Party",
    img: maxi,
  },
  {
    id: "tops",
    title: "Modern Tops & Cigarette Pants",
    body: "Stylish separates for modern daily looks.",
    type: "Casual",
    img: tops,
  },
];

const FILTERS = ["All", "Gents Wear", "Kids Wear", "Casual", "Formal", "Bridal", "Party"];

function Shop() {
  const [filter, setFilter] = useState("All");
  const [activeItem, setActiveItem] = useState<CollectionCategory | null>(null);

  const displayedCategories =
    filter === "All" ? CATEGORIES : CATEGORIES.filter((c) => c.type === filter);

  return (
    <div>
      <PageHeader
        eyebrow="Shop & Order"
        title="Explore Our Collections"
        subtitle="Custom stitching & tailored ready-to-wear outfits for every celebration — built to your size and preference."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-border/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
            <Filter className="h-4 w-4" /> Filter Categories:
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                  filter === f
                    ? "bg-gold-gradient text-primary-foreground shadow-md font-semibold scale-105"
                    : "border border-border/70 bg-card text-muted-foreground hover:border-accent hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedCategories.map((c) => (
            <div
              key={c.id}
              onClick={() => setActiveItem(c)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border/70 bg-card transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(200,160,60,0.25)] hover:-translate-y-1"
            >
              <div className="relative">
                <ImagePlaceholder label={c.title} ratio="4/3" src={c.img} />
                <div className="absolute top-3 left-3 rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold text-accent backdrop-blur border border-accent/30 flex items-center gap-1">
                  <Scissors className="h-3 w-3" /> Custom Stitching
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                    {c.type} Wear
                  </span>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Order Details →
                  </span>
                </div>
                <h3 className="mt-1 font-serif text-xl font-bold">{c.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{c.body}</p>
                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-medium">
                  <span className="text-muted-foreground">Custom Fit Guaranteed</span>
                  <span className="text-accent flex items-center gap-1">
                    <ShoppingBag className="h-3.5 w-3.5" /> Inquire Outfit
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Item Detail Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-sm animate-fade-in-slow"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-xl w-full max-h-[92vh] overflow-y-auto rounded-2xl border border-accent/50 bg-card p-4 sm:p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-accent hover:text-black transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60">
                <img
                  src={activeItem.img}
                  alt={activeItem.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {activeItem.type} Collection
                  </span>
                  <span className="text-xs font-serif text-gold-gradient font-bold">
                    Handcrafted Couture
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold">{activeItem.title}</h3>
                <p className="text-sm text-muted-foreground">{activeItem.body}</p>

                <div className="rounded-lg bg-secondary/50 p-3 border border-border/50 text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <Scissors className="h-3.5 w-3.5 text-accent" />
                    <span className="font-semibold">Tailored To Your Body Measurements</span>
                  </div>
                  <p className="text-muted-foreground pl-5">
                    Send us your unstitched suit or fabric. We provide custom fitting, neck designs,
                    piping, and dupattas.
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <a
                    href={`https://wa.me/923168941755?text=${encodeURIComponent(
                      `Hi Farooq Garments! I am interested in ordering from the "${activeItem.title}" collection. Please guide me on stitching and booking!`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-gradient py-3.5 text-sm font-semibold text-primary-foreground shadow transition hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                    Order / Inquire On WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
