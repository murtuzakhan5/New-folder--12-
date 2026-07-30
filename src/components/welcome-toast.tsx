import { useEffect, useState } from "react";
import { Scissors, X } from "lucide-react";

export function WelcomeToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("fg-welcomed")) return;
    const t = setTimeout(() => setShow(true), 900);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setShow(false);
    try {
      sessionStorage.setItem("fg-welcomed", "1");
    } catch {
      // Ignore storage error
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 right-6 z-40 max-w-xs animate-slide-in-right">
      <div className="relative rounded-lg border border-accent/50 bg-card p-4 pr-8 shadow-2xl">
        <button
          onClick={dismiss}
          aria-label="Dismiss welcome"
          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
            <Scissors className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <div className="font-serif text-base leading-tight">
              Hello & <span className="gold-shimmer">Welcome</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Welcome to Farooq Garments. Send us your favorite design — we will stitch it to
              perfection!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
