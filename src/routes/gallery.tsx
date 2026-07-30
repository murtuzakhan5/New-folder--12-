import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site-layout";
import { useState, useEffect, useCallback } from "react";
import {
  ZoomIn,
  MessageSquare,
  X,
  Scissors,
  Sparkles,
  Building2,
  Layers,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Grid,
  Maximize2,
  SlidersHorizontal,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import fgOfficeDesign from "@/assets/images/fg_office_design_1785412813257.jpg";
import fgBridalWorkshop from "@/assets/images/fg_bridal_workshop_1785412826930.jpg";
import fgMasterCutting from "@/assets/images/fg_master_cutting_1785412838241.jpg";
import fgFoldedLawn from "@/assets/images/fg_folded_lawn_suits_1785412848978.jpg";
import fgSilkStack from "@/assets/images/fg_silk_fabric_stack_1785412860823.jpg";
import fgEmbossedTop from "@/assets/images/fg_embossed_top_1785412872013.jpg";
import gentsShalwarKameez from "@/assets/images/gents_designer_shalwar_kameez_1785418674046.jpg";
import kidsSportsSuit from "@/assets/images/kids_sports_suit_1785418684595.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Studio Gallery — Farooq Garments Studio & Workshop" },
      {
        name: "description",
        content:
          "Explore behind-the-scenes studio photos of Farooq Garments Karachi — master tailor fabric cutting, bridal velvet zari embroidery, pattern designing, folded suit stacks, and luxury fabric selections.",
      },
      { property: "og:title", content: "Studio Gallery — Farooq Garments" },
      {
        property: "og:description",
        content:
          "Real studio photos, tailoring workshops, and finished garments by Farooq Garments.",
      },
    ],
  }),
  component: GalleryPage,
});

type Category =
  "Studio & Design" | "Workshop & Tailoring" | "Finished Collection" | "Fabric & Materials";

interface GalleryItem {
  id: string;
  title: string;
  category: Category;
  src: string;
  subtitle: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "office-design",
    title: "Studio Design & Pattern Workstation",
    category: "Studio & Design",
    src: fgOfficeDesign,
    subtitle: "Farooq Garments Executive Design Suite",
    description:
      "Our dedicated CAD pattern designer working on custom dress layouts while consulting with a client in our Karachi studio office.",
  },
  {
    id: "bridal-workshop",
    title: "Velvet & Gold Zari Bridal Stitching",
    category: "Workshop & Tailoring",
    src: fgBridalWorkshop,
    subtitle: "Heavy Bridal Craftsmanship",
    description:
      "Master artisan cutting and hand-stitching intricate gold zari embroidered black velvet bridal fabric on industrial machinery.",
  },
  {
    id: "master-cutting",
    title: "Master Tailor Precision Cutting",
    category: "Workshop & Tailoring",
    src: fgMasterCutting,
    subtitle: "Precision Tailoring & Measurements",
    description:
      "Senior cutter executing exact pattern cuts on royal navy blue suit fabric using professional tailor shears.",
  },
  {
    id: "folded-lawn",
    title: "Stitched & Embroidered Kurta Stack",
    category: "Finished Collection",
    src: fgFoldedLawn,
    subtitle: "Ready-to-Ship Stitched Outfits",
    description:
      "A tall, pristine stack of freshly stitched white cotton kurtas with delicate pink floral neck embroidery, packaged with Farooq Garments branding.",
  },
  {
    id: "silk-stack",
    title: "Luxury Silk & Organza Collection",
    category: "Fabric & Materials",
    src: fgSilkStack,
    subtitle: "Premium Unstitched Fabrics",
    description:
      "Rich vibrant folds of pure raw silk, organza, and pleated chiffon in magenta, royal blue, orange, and emerald ready for boutique stitching.",
  },
  {
    id: "embossed-top",
    title: "Bespoke Formal Crest Top",
    category: "Finished Collection",
    src: fgEmbossedTop,
    subtitle: "Luxury Designer Finishing",
    description:
      "Tailored black sweatshirt featuring a metallic gold crest emblem, displayed alongside Farooq Garments signature luxury packaging.",
  },
  {
    id: "gents-shalwar-kameez",
    title: "Men's Designer Suit & Kameez",
    category: "Finished Collection",
    src: gentsShalwarKameez,
    subtitle: "Executive Men's Couture",
    description:
      "Precision tailored men's designer suits with detailed ban collar embroidery and cuff finishing on luxury wash & wear fabric.",
  },
  {
    id: "kids-sports-suit",
    title: "Kids' Sports Suits & Activewear",
    category: "Finished Collection",
    src: kidsSportsSuit,
    subtitle: "Junior Boys Athletic Wear",
    description:
      "High-durability tracksuits and sports hoodie sets designed specifically for active kids with custom fit and flexible waistbands.",
  },
];

const CATEGORIES = [
  "All",
  "Studio & Design",
  "Workshop & Tailoring",
  "Finished Collection",
  "Fabric & Materials",
] as const;

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const handleNext = useCallback(() => {
    if (filteredItems.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (filteredItems.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  // Autoplay handler
  useEffect(() => {
    if (!isPlaying || filteredItems.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, handleNext, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxItem) {
        if (e.key === "Escape") setLightboxItem(null);
        return;
      }
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, lightboxItem]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageHeader
        eyebrow="Real Studio Photos"
        title="Farooq Garments Studio Gallery"
        description="Explore an interactive 3D view of our Karachi boutique studio, master cutting room, bridal stitching workshop, and luxury fabrics."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        {/* Brand Header Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-accent/30 bg-card/60 p-2 sm:p-2.5 px-5 shadow-sm">
            <img
              src="/farooq-official-logo.svg"
              alt="Farooq Garments Official Logo"
              className="h-10 sm:h-14 w-auto object-contain shrink-0 filter drop-shadow-[0_2px_8px_rgba(200,160,60,0.3)]"
            />
            <div className="text-left">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Farooq Garments Studio
              </div>
              <div className="text-xs font-serif text-foreground/90 font-medium">
                Official Studio & Tailoring Collection
              </div>
            </div>
          </div>
        </div>

        {/* Top Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-card/60 p-4 rounded-2xl border border-border/80 backdrop-blur-md shadow-md">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative rounded-full px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-gold-gradient rounded-full shadow-lg glow-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode & Autoplay Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold border transition-all ${
                isPlaying
                  ? "border-accent bg-accent/20 text-accent glow-gold"
                  : "border-border/80 bg-secondary/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              <span>{isPlaying ? "Pause Slideshow" : "Autoplay"}</span>
            </button>

            <div className="flex items-center rounded-lg border border-border/80 bg-secondary/40 p-1">
              <button
                onClick={() => setViewMode("showcase")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  viewMode === "showcase"
                    ? "bg-accent text-primary-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="3D Stage Showcase"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" /> Showcase
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  viewMode === "grid"
                    ? "bg-accent text-primary-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Masonry Grid View"
              >
                <Grid className="h-3.5 w-3.5" /> Grid
              </button>
            </div>
          </div>
        </div>

        {/* 3D CENTER SHOWCASE MODE */}
        {viewMode === "showcase" && filteredItems.length > 0 && (
          <div className="space-y-8">
            {/* Main Stage Container */}
            <div className="relative py-6 sm:py-10 flex flex-col items-center justify-center min-h-[500px]">
              {/* Background Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 blur-3xl">
                <div className="h-96 w-96 rounded-full bg-accent/40" />
              </div>

              {/* 3D Carousel Stage */}
              <div className="relative w-full max-w-5xl flex items-center justify-center min-h-[420px] sm:min-h-[520px]">
                {filteredItems.map((item, idx) => {
                  const offset = idx - currentIndex;
                  const absOffset = Math.abs(offset);
                  const isCenter = offset === 0;

                  if (absOffset > 2 && absOffset !== filteredItems.length - 1) return null;

                  return (
                    <motion.div
                      key={item.id}
                      className="absolute cursor-pointer transition-all duration-500 ease-out"
                      initial={false}
                      animate={{
                        x:
                          offset === 0
                            ? 0
                            : offset < 0
                              ? -260 * Math.min(absOffset, 2)
                              : 260 * Math.min(absOffset, 2),
                        scale: isCenter ? 1 : 0.82 - absOffset * 0.08,
                        rotateY: offset === 0 ? 0 : offset < 0 ? 18 : -18,
                        zIndex: 30 - absOffset * 10,
                        opacity: isCenter ? 1 : 0.5 - absOffset * 0.15,
                        filter: isCenter ? "brightness(1) blur(0px)" : "brightness(0.6) blur(2px)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 25,
                      }}
                      onClick={() => {
                        if (!isCenter) setCurrentIndex(idx);
                      }}
                    >
                      <div
                        className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                          isCenter
                            ? "w-[300px] sm:w-[380px] md:w-[440px] aspect-[3/4] border-accent/80 bg-card shadow-[0_0_50px_rgba(212,175,55,0.35)] ring-2 ring-accent/40"
                            : "w-[240px] sm:w-[300px] aspect-[3/4] border-border/60 bg-card/80 shadow-xl hover:border-accent/50"
                        }`}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-black/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent backdrop-blur-md">
                            {item.category === "Studio & Design" && (
                              <Building2 className="h-3 w-3" />
                            )}
                            {item.category === "Workshop & Tailoring" && (
                              <Scissors className="h-3 w-3" />
                            )}
                            {item.category === "Finished Collection" && (
                              <Sparkles className="h-3 w-3" />
                            )}
                            {item.category === "Fabric & Materials" && (
                              <Layers className="h-3 w-3" />
                            )}
                            {item.category}
                          </span>
                        </div>

                        {/* Fullscreen Zoom Icon on Center Card */}
                        {isCenter && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxItem(item);
                            }}
                            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 bg-black/80 text-accent shadow-lg transition-transform hover:scale-110 hover:bg-accent hover:text-primary-foreground backdrop-blur-md"
                            title="Open Fullscreen"
                          >
                            <Maximize2 className="h-4 w-4" />
                          </button>
                        )}

                        {/* Bottom Overlay Info on Center Card */}
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left space-y-2"
                          >
                            <div className="text-xs font-serif text-accent uppercase tracking-widest font-semibold">
                              {item.subtitle}
                            </div>
                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                              {item.description}
                            </p>

                            <div className="pt-2 flex items-center gap-3">
                              <a
                                href={`https://wa.me/923101060153?text=Hi%20Farooq%20Garments!%20I'm%20inquiring%20about%20the%20${encodeURIComponent(
                                  item.title,
                                )}%20seen%20in%20your%20studio%20gallery.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg glow-gold hover:scale-105 transition-all"
                              >
                                <MessageSquare className="h-3.5 w-3.5" /> WhatsApp Inquiry
                              </a>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightboxItem(item);
                                }}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                              >
                                <ZoomIn className="h-3.5 w-3.5" /> Enlarge
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-black/70 text-accent shadow-2xl transition-all hover:scale-110 hover:bg-accent hover:text-primary-foreground backdrop-blur-md"
                title="Previous Photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-black/70 text-accent shadow-2xl transition-all hover:scale-110 hover:bg-accent hover:text-primary-foreground backdrop-blur-md"
                title="Next Photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Interactive Filmstrip Thumbnails */}
            <div className="bg-card/40 p-4 rounded-2xl border border-border/60 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-2">
                  <SlidersHorizontal className="h-3.5 w-3.5" /> Click any photo to bring to center
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  {currentIndex + 1} / {filteredItems.length}
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 overflow-x-auto py-2 scrollbar-none">
                {filteredItems.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative flex-shrink-0 h-20 w-16 sm:h-24 sm:w-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        isActive
                          ? "border-accent scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)] ring-2 ring-accent/60"
                          : "border-border/60 opacity-60 hover:opacity-100 hover:border-accent/40"
                      }`}
                    >
                      <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
                      {isActive && (
                        <div className="absolute inset-0 border-2 border-accent rounded-xl pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* MASONRY GRID VIEW MODE */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-card shadow-lg transition-all duration-300 hover:border-accent hover:shadow-[0_0_25px_rgba(200,160,60,0.25)] flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-black/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur-md">
                      {item.category === "Studio & Design" && <Building2 className="h-3 w-3" />}
                      {item.category === "Workshop & Tailoring" && <Scissors className="h-3 w-3" />}
                      {item.category === "Finished Collection" && <Sparkles className="h-3 w-3" />}
                      {item.category === "Fabric & Materials" && <Layers className="h-3 w-3" />}
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Quick View Button */}
                  <button
                    onClick={() => setLightboxItem(item)}
                    className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-black/70 text-accent opacity-90 transition-transform hover:scale-110 hover:bg-accent hover:text-primary-foreground backdrop-blur-md"
                    title="View Full Size"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>

                  {/* Bottom Overlay Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-left">
                    <div className="text-xs font-serif text-accent">{item.subtitle}</div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mt-1">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setLightboxItem(item)}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                    >
                      <ZoomIn className="h-3.5 w-3.5" /> Enlarge & Details
                    </button>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="p-4 border-t border-border/50 bg-secondary/30 flex items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/923101060153?text=Hi%20Farooq%20Garments!%20I'm%20inquiring%20about%20the%20${encodeURIComponent(
                      item.title,
                    )}%20seen%20in%20your%20studio%20gallery.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700/90 hover:bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition-all shadow-sm"
                  >
                    <MessageSquare className="h-3.5 w-3.5" /> Inquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-accent/50 bg-card p-5 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-foreground border border-border hover:border-accent hover:text-accent transition-colors shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="overflow-hidden rounded-2xl border border-accent/40 bg-black/70 max-h-[60vh] flex items-center justify-center shadow-inner">
                  <img
                    src={lightboxItem.src}
                    alt={lightboxItem.title}
                    className="h-full w-full object-contain max-h-[60vh]"
                  />
                </div>

                <div className="space-y-4 text-left">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {lightboxItem.category}
                  </span>

                  <div>
                    <div className="text-xs font-serif text-accent uppercase tracking-wider font-semibold">
                      {lightboxItem.subtitle}
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-1">
                      {lightboxItem.title}
                    </h2>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lightboxItem.description}
                  </p>

                  <div className="pt-4 border-t border-border/60 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Farooq Garments Karachi Studio
                    </div>
                    <a
                      href={`https://wa.me/923101060153?text=Hi%20Farooq%20Garments!%20I'm%20interested%20in%20custom%20stitching/fabric%20similar%20to%20"${encodeURIComponent(
                        lightboxItem.title,
                      )}".`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg glow-gold w-full transition-transform hover:scale-[1.02]"
                    >
                      <MessageSquare className="h-4 w-4" /> Book Consultation / Order
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
