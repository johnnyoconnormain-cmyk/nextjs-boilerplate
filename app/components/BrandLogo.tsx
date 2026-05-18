import Image from "next/image";
import { site } from "../site-config";
import { Trinacria } from "./icons";

// Real logo file when `site.logo` is set; otherwise a clean recreation of
// their Trinacria emblem + serif wordmark so it's unmistakably *them*.
export default function BrandLogo({ light = false }: { light?: boolean }) {
  if (site.logo) {
    return (
      <Image
        src={site.logo}
        alt={site.name}
        width={170}
        height={48}
        priority
        className="h-11 w-auto"
      />
    );
  }

  return (
    <span className="flex items-center gap-3">
      <Trinacria size={42} className={light ? "text-paper" : "text-plum"} />
      <span className="leading-[1.05]">
        <span
          className={`block font-display text-xl font-bold uppercase tracking-[0.14em] ${
            light ? "text-paper" : "text-plum"
          }`}
        >
          Mario&apos;s
        </span>
        <span
          className={`block font-display text-sm font-semibold uppercase tracking-[0.34em] ${
            light ? "text-green" : "text-green"
          }`}
        >
          Painting
        </span>
      </span>
    </span>
  );
}
