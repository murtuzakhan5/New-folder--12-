import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import { WelcomeToast } from "./welcome-toast";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/shop", label: "Shop" },
  { to: "/gallery", label: "Studio Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      {/* Top Gold Accent Line */}
      <div className="h-0.5 w-full bg-gold-gradient" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3.5 sm:px-6 py-2 sm:py-3">
        <Link to="/" className="group flex items-center min-w-0 shrink-0">
          <img
            src="/farooq-official-logo.svg"
            alt="Farooq Garments Official Logo"
            className="h-10 sm:h-12 md:h-14 w-auto max-w-[200px] sm:max-w-[240px] object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(200,160,60,0.3)]"
          />
        </Link>

        {/* Centered Desktop Navigation Bar */}
        <nav className="hidden items-center justify-center gap-6 lg:gap-8 md:flex flex-1 px-4 sm:px-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative py-1 text-sm text-foreground/80 transition-colors duration-200 hover:text-accent font-medium tracking-wide"
              activeProps={{ className: "text-accent font-bold gold-shimmer" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="https://wa.me/923168941755"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(200,160,60,0.5)]"
          >
            Order on WhatsApp
          </a>
        </div>

        <button
          className="rounded-md border border-border/60 p-2 text-foreground/80 md:hidden hover:border-accent shrink-0 ml-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-card/95 backdrop-blur-md md:hidden animate-fade-up">
          <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 py-4 space-y-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-accent/10 hover:text-accent"
                activeProps={{ className: "bg-accent/15 text-accent font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/923168941755"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gold-gradient py-2.5 text-sm font-semibold text-primary-foreground"
              >
                WhatsApp Us Directly
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-to-b from-secondary/40 to-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="inline-block">
            <img
              src="/farooq-official-logo.svg"
              alt="Farooq Garments"
              className="h-16 md:h-20 w-auto object-contain transition-opacity hover:opacity-90 filter drop-shadow-[0_2px_10px_rgba(200,160,60,0.3)]"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
            Crafted with precision, worn with pride. Elegant ladies wear, custom bridal stitching,
            and designer suit tailoring in Karachi, Pakistan.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contact Us
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-accent shrink-0" />
              <span>Farooqgarments1983@gmail.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-accent shrink-0" />
              <span>0316 8941755</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-accent shrink-0" />
              <span>0310 1060153</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>
                Lyari Basti Rd, 51/B Sector 51 B Lyari Basti Taiser Town, Karachi, 75800, Pakistan
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Farooq Garments. All rights reserved.
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <WelcomeToast />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  description,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
}) {
  const subText = subtitle || description;
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-black/80 via-secondary/30 to-background py-10 sm:py-16 md:py-20 text-center">
      {/* Background ambient gold glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 flex flex-col items-center text-center">
        {eyebrow && (
          <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-semibold shadow-[0_0_15px_rgba(200,160,60,0.2)]">
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {/* Subtle decorative gold line under title */}
        <div className="mt-3.5 h-0.5 w-16 bg-gold-gradient rounded-full" />

        {subText && (
          <p className="mt-4 max-w-2xl text-xs sm:text-base text-muted-foreground md:text-lg leading-relaxed text-center">
            {subText}
          </p>
        )}
      </div>
    </section>
  );
}

export function ImagePlaceholder({
  label,
  ratio = "4/3",
  src,
}: {
  label?: string;
  ratio?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div className="w-full overflow-hidden bg-muted" style={{ aspectRatio: ratio }}>
        <img src={src} alt={label ?? ""} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className="flex w-full items-center justify-center bg-gradient-to-br from-accent/40 to-secondary text-xs uppercase tracking-widest text-foreground/50"
      style={{ aspectRatio: ratio }}
    >
      {label ?? "Image"}
    </div>
  );
}
