import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Studio Gallery — Farooq Garments" },
      {
        name: "description",
        content:
          "View Farooq Garments Karachi studio photos, custom stitching, and bridal tailoring.",
      },
    ],
  }),
  component: OurWorkRedirect,
});

function OurWorkRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to Studio Gallery page
    const timer = setTimeout(() => {
      navigate({ to: "/gallery" });
    }, 1200);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center space-y-6">
      <div className="relative p-3 rounded-2xl bg-card border border-accent/30 shadow-lg">
        <img
          src="/farooq-official-logo.svg"
          alt="Farooq Garments"
          className="h-24 sm:h-32 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(200,160,60,0.4)]"
        />
      </div>

      <div className="space-y-2 max-w-md">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          <Sparkles className="h-3.5 w-3.5" /> Farooq Garments Showcase
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
          Redirecting to Studio Gallery...
        </h1>
        <p className="text-sm text-muted-foreground">
          Our work showcase has been consolidated into our interactive 3D Studio Gallery.
        </p>
      </div>

      <Link
        to="/gallery"
        className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg glow-gold hover:scale-105 transition-transform"
      >
        <span>Explore Studio Gallery Now</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
