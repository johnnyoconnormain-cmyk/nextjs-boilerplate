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
    house: (
      <>
        <path d="M3 10.5 12 4l9 6.5" />
        <path d="M5 9.5V20h14V9.5" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
    building: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </>
    ),
    store: (
      <>
        <path d="M3 9l1.5-4h15L21 9" />
        <path d="M4 9v11h16V9" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    fence: (
      <>
        <path d="M4 7l1.5-2 1.5 2v13h-3z" />
        <path d="M10 7l1.5-2 1.5 2v13h-3z" />
        <path d="M16 7l1.5-2 1.5 2v13h-3z" />
        <path d="M2 11h20M2 16h20" />
      </>
    ),
    leaf: (
      <>
        <path d="M5 19c0-8 7-15 16-15-.5 9-7 16-16 16z" />
        <path d="M5 19c4-4 8-8 14-12" />
      </>
    ),
    shovel: (
      <>
        <path d="M14 4l6 6-3 3-2-2-7 7-3-1 1-3 7-7-2-2z" />
      </>
    ),
    wall: (
      <>
        <rect x="3" y="6" width="18" height="4" />
        <rect x="3" y="14" width="18" height="4" />
        <path d="M9 6v4M15 6v4M6 14v4M12 14v4M18 14v4" />
      </>
    ),
    mower: (
      <>
        <path d="M3 16h11l2-5h4l1 3v2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M6 11l3-4" />
      </>
    ),
    drop: (
      <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z" />
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
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

// Recreation of BR Landscaping's actual logo: navy oval with bold white "BR"
// inside, fine inner border ring. Matches the screenshot of the live site.
export function BROval({
  className = "",
  size = 64,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={(size * 80) / 70}
      viewBox="0 0 70 80"
      className={className}
      role="img"
      aria-label="BR Landscaping"
    >
      <ellipse cx="35" cy="40" rx="32" ry="36" fill="var(--navy)" />
      <ellipse
        cx="35"
        cy="40"
        rx="28"
        ry="32"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        opacity="0.85"
      />
      <text
        x="35"
        y="52"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="34"
        letterSpacing="0.5"
        fill="#fff"
      >
        BR
      </text>
    </svg>
  );
}
