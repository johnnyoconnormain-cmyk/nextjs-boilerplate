import Image from "next/image";
import { site } from "../site-config";
import { BROval } from "./icons";

// Real logo file when `site.logo` is set; otherwise a clean recreation of
// their navy "BR" oval mark + "LANDSCAPING LLC" wordmark.
export default function BrandLogo({ light = false }: { light?: boolean }) {
  if (site.logo) {
    return (
      <Image
        src={site.logo}
        alt={site.name}
        width={170}
        height={56}
        priority
        className="h-12 w-auto"
      />
    );
  }

  return (
    <span className="flex items-center gap-3">
      <BROval size={46} />
      <span className="leading-tight">
        <span
          className={`block text-[1.05rem] font-extrabold uppercase tracking-[0.16em] ${
            light ? "text-bone" : "text-navy"
          }`}
        >
          Landscaping
        </span>
        <span
          className={`block text-[0.62rem] font-bold uppercase tracking-[0.32em] ${
            light ? "text-lime" : "text-navy/70"
          }`}
        >
          LLC · Since {site.established}
        </span>
      </span>
    </span>
  );
}
