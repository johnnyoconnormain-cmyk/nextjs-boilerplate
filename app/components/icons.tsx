import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function Icon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const paths: Record<string, React.ReactNode> = {
    roller: (
      <>
        <rect x="3" y="4" width="13" height="5" rx="1" />
        <path d="M16 6.5h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-7a2 2 0 0 0-2 2V20" />
      </>
    ),
    house: (
      <>
        <path d="M3 10.5 12 4l9 6.5" />
        <path d="M5 9.5V20h14V9.5" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
    cabinet: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M12 3v18M9 7v3M15 7v3" />
      </>
    ),
    heritage: (
      <>
        <path d="M4 21h16M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6M9 11h6" />
      </>
    ),
    log: (
      <>
        <ellipse cx="7" cy="12" rx="3" ry="7" />
        <path d="M7 5h10M7 19h10" />
        <ellipse cx="17" cy="12" rx="3" ry="7" />
        <path d="M17 10v4" />
      </>
    ),
    building: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </>
    ),
    phone: (
      <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L17 12l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    check: <path d="M5 12.5l4 4 10-10" />,
    star: (
      <path
        d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8-4.3-4.1 5.9-.9z"
        fill="currentColor"
        stroke="none"
      />
    ),
    shield: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    badge: (
      <>
        <circle cx="12" cy="10" r="6" />
        <path d="M8.5 15l-1.5 6 5-3 5 3-1.5-6" />
      </>
    ),
    quote: (
      <path
        d="M9 7c-2.5 1-4 3.2-4 6v4h5v-5H7c0-1.7 1-3.2 2.6-4zm9 0c-2.5 1-4 3.2-4 6v4h5v-5h-3c0-1.7 1-3.2 2.6-4z"
        fill="currentColor"
        stroke="none"
      />
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };

  return (
    <svg {...base} width="24" height="24" aria-hidden="true" {...props}>
      {paths[name] ?? null}
    </svg>
  );
}

// A clean recreation of Mario's Sicilian Trinacria mark: three bent legs in
// 120° rotational symmetry around a central roundel, with a painter's roller
// motif. Single-ink so it reads like their original stamp logo.
export function Trinacria({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  const leg = (
    <path
      d="M24 24 L24 9 Q24 6 27 6 L31 6 Q34 6 33.5 9 L31 13"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Mario's Painting"
    >
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <g>
        {leg}
        <g transform="rotate(120 24 24)">{leg}</g>
        <g transform="rotate(240 24 24)">{leg}</g>
      </g>
      <circle cx="24" cy="24" r="6.5" fill="currentColor" />
      {/* painter's roller across the center */}
      <rect
        x="17.5"
        y="22.4"
        width="13"
        height="3.2"
        rx="1"
        fill="var(--color-paper, #f7f4ef)"
      />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" />
    </svg>
  );
}
