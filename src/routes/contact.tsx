import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site-layout";
import { DesignerProfileCard } from "../components/designer-profile";
import {
  Mail,
  Phone,
  MapPin,
  Scissors,
  Send,
  Clock,
  CheckCircle2,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Farooq Garments Karachi" },
      {
        name: "description",
        content:
          "Get in touch with Farooq Garments for custom stitching orders, bridal consultations, and inquiries in Karachi, Pakistan.",
      },
      { property: "og:title", content: "Contact Farooq Garments" },
      {
        property: "og:description",
        content:
          "Reach us by WhatsApp, phone, or email for stitching orders and design consultations.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [fullName, setFullName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Bot detected - silently ignore
      return;
    }
    const cleanName = fullName.trim().slice(0, 100);
    const cleanContact = contactInfo.trim().slice(0, 120);
    const cleanMsg = message.trim().slice(0, 1000);

    if (!cleanName || !cleanContact || !cleanMsg) return;

    setSent(true);
  };

  return (
    <div>
      <PageHeader
        eyebrow="Contact & Orders"
        title="Get in Touch with Farooq Garments"
        subtitle="Share your design ideas, reference images, or stitching inquiries. Our master tailors in Karachi are ready to bring your vision to life."
      />

      {/* Centered Brand & Support Badge */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-accent/30 bg-card/60 p-2 sm:p-2.5 px-6 shadow-sm">
          <img
            src="/farooq-official-logo.svg"
            alt="Farooq Garments Logo"
            className="h-12 sm:h-16 w-auto object-contain shrink-0 filter drop-shadow-[0_2px_8px_rgba(200,160,60,0.3)]"
          />
          <div className="text-left border-l border-accent/30 pl-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Ladies Couture Studio
            </div>
            <div className="text-xs font-serif text-foreground/90 font-medium">
              Karachi, Pakistan · Worldwide Delivery
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Section: Atelier Image + Contact Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 grid gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Studio Image & Interactive Animation Box (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Studio Info Card */}
          <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-card p-6 shadow-2xl space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Scissors className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                  Tailoring Studio
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Boutique Stitching & Custom Fits
                </h3>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              We specialize in custom stitching, bridal ensembles, formal suits, and branded lawn
              tailoring with guaranteed custom fitting.
            </p>

            {/* Studio Details List */}
            <div className="space-y-3 pt-2 border-t border-border/60">
              <div className="flex items-center gap-3 text-xs text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Send reference picture on WhatsApp for instant quote</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Custom necklines, piping & organza lace attachments</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Fast 3-5 days turnaround for standard stitching</span>
              </div>
            </div>
          </div>

          {/* Quick Direct WhatsApp Card */}
          <div className="rounded-2xl border border-accent/40 bg-black/80 p-5 text-center shadow-xl relative overflow-hidden">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            <div className="text-xs font-semibold text-accent uppercase tracking-widest">
              Fastest Response
            </div>
            <h4 className="mt-1 font-serif text-lg font-bold">Chat Directly on WhatsApp</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Our team answers queries and guides you on fabric & measurement details instantly.
            </p>
            <a
              href="https://wa.me/923168941755?text=Hi%20Farooq%20Garments!%20I'd%20like%20to%20inquire%20about%20stitching%20a%20dress."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gold-gradient py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" /> Open WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Right Column: Send Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-accent/40 bg-card p-6 sm:p-8 shadow-2xl relative"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold mb-1">
              <Mail className="h-4 w-4" /> Message Us
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Send an Inquiry</h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Fill in your details below and we will get back to you shortly regarding your
              stitching order.
            </p>

            {/* Hidden honeypot field for security against automated bots */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website_url_hp"
                tabIndex={-1}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="mt-6 space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  maxLength={100}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ayesha Khan"
                  className="mt-1.5 w-full rounded-lg border border-border/70 bg-background px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Phone Number or Email
                </label>
                <input
                  required
                  type="text"
                  maxLength={120}
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="e.g. 0300 1234567 or email@domain.com"
                  className="mt-1.5 w-full rounded-lg border border-border/70 bg-background px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your Stitching Inquiry or Notes
                </label>
                <textarea
                  required
                  rows={4}
                  maxLength={1000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the dress type, fabric, or design idea you have in mind..."
                  className="mt-1.5 w-full rounded-lg border border-border/70 bg-background px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gold-gradient py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Submit Message
              </button>

              {sent && (
                <div className="mt-4 rounded-lg bg-accent/15 border border-accent/40 p-3 text-center text-xs font-medium text-accent animate-fade-in">
                  ✓ Thank you! Your message has been recorded. We will contact you shortly.
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Lead Designer & Manager Direct Contact Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <DesignerProfileCard />
      </section>

      {/* Centered 3 Contact Cards Grid */}
      <section className="border-t border-border/60 bg-secondary/30 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Contact Channels
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold">
              Reach Our Team Directly
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
              Choose your preferred contact method below for assistance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* Email Card */}
            <a
              href="mailto:Farooqgarments1983@gmail.com"
              className="group flex flex-col items-center text-center rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(200,160,60,0.2)] hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold">Email Support</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                For detailed questions & order confirmations
              </p>
              <span className="mt-3 text-xs font-semibold text-accent group-hover:underline truncate max-w-full">
                Farooqgarments1983@gmail.com
              </span>
            </a>

            {/* Phone Card */}
            <div className="flex flex-col items-center text-center rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(200,160,60,0.2)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold">Phone Lines</h3>
              <p className="mt-1 text-xs text-muted-foreground">Call us during studio hours</p>
              <div className="mt-3 space-y-1.5 text-xs font-semibold text-accent">
                <a href="tel:+923168941755" className="block hover:underline">
                  Main Studio: 0316 8941755
                </a>
                <a href="tel:+923101060153" className="block hover:underline text-foreground">
                  Manager & Designer: <span className="text-accent">0310 1060153</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex flex-col items-center text-center rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(200,160,60,0.2)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold">Location & Studio</h3>
              <p className="mt-1 text-xs text-muted-foreground">Tailoring Studio Address</p>
              <span className="mt-3 text-xs font-semibold text-foreground/90 max-w-[260px]">
                Lyari Basti Rd, 51/B Sector 51 B Lyari Basti Taiser Town, Karachi, 75800, Pakistan
              </span>
              <span className="mt-2 text-[11px] text-muted-foreground flex items-center gap-1 justify-center">
                <Clock className="h-3 w-3 text-accent" /> Mon - Sat: 9:00 AM - 6:00 PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section className="border-t border-border/60 bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                <Navigation className="h-3.5 w-3.5" /> Google Maps Location
              </div>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
                Visit Our Tailoring Studio
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Lyari Basti Rd, 51/B Sector 51 B Lyari Basti Taiser Town, Karachi, 75800, Pakistan
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Lyari+Basti+Rd,+51/B+Sector+51+B+Lyari+Basti+Taiser+Town,+Karachi,+75800,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-5 py-3 text-xs font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 shrink-0"
            >
              <ExternalLink className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-card shadow-2xl">
            {/* Map Frame */}
            <div className="h-[380px] sm:h-[450px] w-full">
              <iframe
                title="Farooq Garments Location - Lyari Basti Rd, 51/B Sector 51 B Lyari Basti Taiser Town, Karachi"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Lyari%20Basti%20Rd%2C%2051%2FB%20Sector%2051%20B%20Lyari%20Basti%20Taiser%20Town%2C%20Karachi%2C%2075800%2C%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
              />
            </div>
            <div className="bg-black/90 p-4 border-t border-accent/30 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span className="text-foreground font-medium">
                  Farooq Garments: Lyari Basti Rd, 51/B Sector 51 B Lyari Basti Taiser Town,
                  Karachi, 75800, Pakistan
                </span>
              </div>
              <span className="text-accent font-medium">Visiting Hours: 11:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
