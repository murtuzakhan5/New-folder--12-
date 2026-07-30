import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "923168941755"; // 0316 8941755
  const msg = encodeURIComponent("Hello! I'm interested in Farooq Garments stitching services.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2"
    >
      <span className="hidden rounded-full bg-foreground px-3 py-2 text-xs font-medium text-background shadow-lg transition-all group-hover:inline-block md:inline-block">
        Chat on WhatsApp
      </span>
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl animate-pulse-ring"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-7 w-7 fill-white" strokeWidth={0} />
        <svg viewBox="0 0 24 24" className="absolute h-7 w-7" fill="white" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.88 11.88 0 0 0 5.7 1.45h.01c6.56 0 11.89-5.33 11.89-11.88 0-3.17-1.24-6.16-3.43-8.43zM12.06 21.5h-.01a9.6 9.6 0 0 1-4.89-1.34l-.35-.21-3.77.99 1.01-3.67-.23-.38a9.6 9.6 0 0 1-1.47-5.11c0-5.31 4.32-9.63 9.63-9.63 2.57 0 4.99 1 6.81 2.82a9.56 9.56 0 0 1 2.82 6.82c0 5.31-4.32 9.62-9.55 9.62zm5.28-7.2c-.29-.14-1.71-.84-1.98-.94-.27-.1-.46-.14-.66.14-.2.29-.76.94-.93 1.14-.17.2-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.09-.2.05-.37-.02-.51-.07-.14-.65-1.57-.89-2.15-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37s-1.03 1-1.03 2.44 1.05 2.83 1.2 3.03c.14.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.11.56-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.37-.07-.11-.26-.18-.55-.32z" />
        </svg>
      </span>
    </a>
  );
}
