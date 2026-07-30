import { useState } from "react";
import { Scissors, Check, Send, Calculator } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  timeframe: string;
  description: string;
}

const OUTFIT_TYPES: ServiceOption[] = [
  {
    id: "gents-shalwar-kameez",
    name: "Men's Designer Suit / Kameez",
    timeframe: "3-5 Days",
    description: "Embroidered ban collar, cuff stitching & optional waistcoat pairing",
  },
  {
    id: "kids-sports-suit",
    name: "Kids' Sports Suit / Tracksuit",
    timeframe: "2-4 Days",
    description: "Durable athletic tracksuits, hoodies & jogger sets for boys",
  },
  {
    id: "casual",
    name: "Casual Ladies Suit (2-pc / 3-pc)",
    timeframe: "3-5 Days",
    description: "Clean stitching, simple piping & finishing",
  },
  {
    id: "lawn",
    name: "Branded Designer Lawn",
    timeframe: "3-5 Days",
    description: "Lace attachments, neck design & organza borders",
  },
  {
    id: "formal",
    name: "Formal / Party Wear",
    timeframe: "5-7 Days",
    description: "Heavy lining, piping, fancy sleeves & embellishments",
  },
  {
    id: "maxi",
    name: "Flowing Maxi / Gown",
    timeframe: "5-7 Days",
    description: "Full flare, multiple pleats, inner lining & zip",
  },
  {
    id: "bridal",
    name: "Bridal / Heavy Wedding Wear",
    timeframe: "10-14 Days",
    description: "Couture fit, heavy dupattas, intricate finishing",
  },
  {
    id: "tops",
    name: "Stylish Top & Pants Separates",
    timeframe: "2-4 Days",
    description: "Modern cuts, button details & cigarette pants",
  },
];

const FABRICS = [
  { id: "client", name: "My Own Fabric Provided" },
  { id: "lawn", name: "Premium Cotton / Lawn" },
  { id: "silk", name: "Pure Raw Silk / Chiffon" },
  { id: "velvet", name: "Velvet / Organza / Net" },
];

const ADDONS = [
  { id: "neckline", name: "Designer Cutwork & Pearl Neckline" },
  { id: "laces", name: "Fancy Border Lace & Dori Tassels" },
  { id: "lining", name: "Full Inner Atal Silk Lining" },
  { id: "express", name: "Express Urgent Stitching" },
];

export function StitchingEstimator() {
  const [selectedOutfit, setSelectedOutfit] = useState<ServiceOption>(OUTFIT_TYPES[1]);
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["neckline"]);
  const [notes, setNotes] = useState("");

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  const generateWhatsAppLink = () => {
    const activeAddonNames = ADDONS.filter((a) => selectedAddons.includes(a.id))
      .map((a) => a.name)
      .join(", ");

    const text = `Hi Farooq Garments! 👋\nI would like to book a custom stitching order:\n\n👗 *Outfit Style*: ${selectedOutfit.name}\n🧵 *Fabric*: ${selectedFabric.name}\n✂️ *Customizations*: ${activeAddonNames || "Standard Finishing"}\n⏱ *Turnaround*: ${selectedOutfit.timeframe}\n${notes ? `📝 *Notes*: ${notes}\n` : ""}\nPlease guide me on the ordering process and details!`;

    return `https://wa.me/923168941755?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative rounded-2xl border border-accent/40 bg-card/60 p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-md">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs uppercase tracking-widest text-accent">
            <Calculator className="h-3.5 w-3.5" />
            Customization Tool
          </div>
          <h3 className="mt-2 font-serif text-xl sm:text-2xl md:text-3xl font-semibold">
            Custom Stitching Order Selector
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Select your outfit style and customizations to send your order request directly on
            WhatsApp.
          </p>
        </div>
        <div className="rounded-xl border border-accent/40 bg-black/40 px-4 py-2.5 sm:px-5 sm:py-3 text-left sm:text-right shrink-0">
          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
            Selected Style
          </div>
          <div className="font-serif text-lg sm:text-xl font-bold text-gold-gradient">
            {selectedOutfit.name.split(" ")[0]} Couture
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Step 1: Select Outfit Type */}
        <div className="space-y-6">
          <div>
            <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-accent">
              1. Choose Outfit Style
            </label>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {OUTFIT_TYPES.map((o) => {
                const isSelected = selectedOutfit.id === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setSelectedOutfit(o)}
                    className={`flex flex-col justify-between rounded-lg border p-3.5 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-accent bg-accent/15 shadow-[0_0_12px_rgba(200,160,60,0.25)]"
                        : "border-border/70 bg-card/40 hover:border-accent/50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-base font-medium">{o.name}</span>
                        {isSelected && <Check className="h-4 w-4 shrink-0 text-accent" />}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{o.description}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-2 text-xs">
                      <span className="text-accent font-semibold flex items-center gap-1">
                        <Scissors className="h-3 w-3" /> Custom Stitching
                      </span>
                      <span className="text-[10px] text-muted-foreground">{o.timeframe}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Choose Fabric option */}
          <div>
            <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-accent">
              2. Select Fabric Source
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              {FABRICS.map((f) => {
                const isSelected = selectedFabric.id === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedFabric(f)}
                    className={`flex items-center justify-between rounded-lg border p-3 text-left text-xs transition-all ${
                      isSelected
                        ? "border-accent bg-accent/15 text-foreground"
                        : "border-border/70 bg-card/40 hover:border-accent/50 text-muted-foreground"
                    }`}
                  >
                    <span className="font-medium">{f.name}</span>
                    <span className="text-accent font-semibold">Selected</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step 3: Add-ons & Order Preview */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-accent">
              3. Customize Details & Add-ons
            </label>
            <div className="space-y-2.5">
              {ADDONS.map((a) => {
                const isSelected = selectedAddons.includes(a.id);
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => toggleAddon(a.id)}
                    className={`flex w-full items-center justify-between rounded-lg border p-3 text-left text-xs transition-all ${
                      isSelected
                        ? "border-accent bg-accent/15 text-foreground shadow-sm"
                        : "border-border/70 bg-card/40 hover:border-accent/40 text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-4 w-4 items-center justify-center rounded border ${
                          isSelected
                            ? "border-accent bg-accent text-primary-foreground"
                            : "border-muted-foreground"
                        }`}
                      >
                        {isSelected && <Check className="h-3 w-3" />}
                      </div>
                      <span className="font-medium">{a.name}</span>
                    </div>
                    <span className="text-accent font-semibold">Available</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-xs text-muted-foreground">
                Special Instructions or Neckline Notes (Optional):
              </label>
              <input
                type="text"
                maxLength={300}
                placeholder="e.g. Angrakha style with pearl buttons on cuffs..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-md border border-border/70 bg-background/80 px-3 py-2 text-xs outline-none focus:border-accent"
              />
            </div>
          </div>

          {/* Action Box */}
          <div className="rounded-xl border border-accent/30 bg-black/40 p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Ready to turn your idea into reality?</span>
              <span className="flex items-center gap-1 text-accent">
                <Scissors className="h-3.5 w-3.5" /> Est. {selectedOutfit.timeframe}
              </span>
            </div>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gold-gradient py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(200,160,60,0.5)]"
            >
              <Send className="h-4 w-4" />
              Book This Order via WhatsApp
            </a>
            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              Direct connection with Farooq Garments master tailors in Karachi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
