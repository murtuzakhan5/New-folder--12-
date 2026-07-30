import { Phone, MessageSquare, ShieldCheck, Scissors, Clock } from "lucide-react";

export function DesignerProfileCard() {
  const phoneFormatted = "0310 1060153";
  const whatsappUrl =
    "https://wa.me/923101060153?text=Hi%20Farooq%20Garments!%20I'd%20like%20to%20consult%20with%20the%20Designer%20%26%20Manager.";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-black/90 via-card to-black/95 p-6 sm:p-8 md:p-10 shadow-2xl">
      {/* Background Decorative Gold Light Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="max-w-3xl mx-auto space-y-6 text-left relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase font-semibold tracking-[0.2em] text-accent mb-1">
              <Scissors className="h-3.5 w-3.5" /> Leadership & Creative Direction
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Manager & Lead Designer
            </h2>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent self-start sm:self-center">
            Farooq Garments
          </span>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Directing custom fitting, fabric selection, and bespoke dress design at Farooq Garments.
          Every outfit is supervised personally to ensure master-level stitching and flawless
          execution.
        </p>

        {/* Contact Box */}
        <div className="rounded-xl border border-accent/30 bg-black/60 p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-semibold text-accent tracking-wider">
                  Direct Contact Line (Manager & Designer)
                </div>
                <div className="font-mono text-base sm:text-lg font-bold text-foreground">
                  {phoneFormatted}
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>Studio Hours: 9:00 AM – 6:00 PM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-transform hover:scale-[1.01] flex-1"
            >
              <MessageSquare className="h-4 w-4" /> WhatsApp Consultation
            </a>
            <a
              href={`tel:${phoneFormatted.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/50 hover:bg-accent/10 px-5 py-2.5 text-xs font-semibold text-accent transition-transform hover:scale-[1.01] flex-1"
            >
              <Phone className="h-4 w-4" /> Call Direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
