import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetUrl(asset: unknown): string {
  if (!asset) return "/farooq-brand-logo.jpg";
  let url = "";

  if (typeof asset === "string") {
    url = asset;
  } else if (typeof asset === "object" && asset !== null) {
    const a = asset as Record<string, unknown>;
    if (typeof a.url === "string") {
      url = a.url;
    } else if (a.default) {
      if (typeof a.default === "string") {
        url = a.default;
      } else if (
        typeof a.default === "object" &&
        a.default !== null &&
        "url" in a.default &&
        typeof (a.default as { url?: unknown }).url === "string"
      ) {
        url = (a.default as { url: string }).url;
      }
    }
  }

  // Fallback to the user's official brand logo
  if (!url || url.includes("/__l5e/")) {
    return "/farooq-brand-logo.jpg";
  }

  return url;
}
