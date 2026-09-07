"use client";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "SEO",
    description:
      "SEO, or Search Engine Optimization, is the process of optimizing websites to rank higher in search results.",
    icon: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 w-40"
      >
        {/* Monitor base */}
        <rect x="45" y="40" width="110" height="80" rx="8" fill="#60A5FA" />
        <rect x="52" y="48" width="96" height="58" rx="4" fill="#1E3A5F" />
        {/* Stand */}
        <rect x="85" y="120" width="30" height="12" rx="2" fill="#93C5FD" />
        <rect x="70" y="132" width="60" height="8" rx="3" fill="#93C5FD" />
        {/* Chart bars */}
        <rect x="65" y="85" width="10" height="15" rx="2" fill="#FBBF24" />
        <rect x="80" y="75" width="10" height="25" rx="2" fill="#34D399" />
        <rect x="95" y="68" width="10" height="32" rx="2" fill="#F472B6" />
        <rect x="110" y="78" width="10" height="22" rx="2" fill="#A78BFA" />
        {/* Upward arrow */}
        <path
          d="M60 95 L95 55 L130 80"
          stroke="#F87171"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M118 55 L130 55 L130 70"
          stroke="#F87171"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Magnifying glass */}
        <circle cx="145" cy="105" r="14" stroke="#38BDF8" strokeWidth="5" fill="none" />
        <line x1="155" y1="115" x2="168" y2="128" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
        {/* Floating rings */}
        <circle cx="40" cy="55" r="10" stroke="#FBBF24" strokeWidth="3" fill="none" />
        <circle cx="160" cy="45" r="8" stroke="#60A5FA" strokeWidth="3" fill="none" />
        <circle cx="35" cy="110" r="7" stroke="#F472B6" strokeWidth="3" fill="none" />
        {/* Cloud */}
        <ellipse cx="55" cy="30" rx="16" ry="10" fill="#E0F2FE" />
        <ellipse cx="68" cy="28" rx="12" ry="8" fill="#E0F2FE" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Content writing",
    description:
      "Content writing is the art of creating written material for websites, blogs, or other platforms.",
    icon: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 w-40"
      >
        {/* Document back */}
        <rect x="40" y="35" width="90" height="110" rx="10" fill="#93C5FD" />
        {/* Document front */}
        <rect x="50" y="45" width="90" height="110" rx="10" fill="#BFDBFE" />
        {/* Lines on doc */}
        <rect x="65" y="70" width="55" height="8" rx="3" fill="#60A5FA" />
        <rect x="65" y="88" width="45" height="8" rx="3" fill="#60A5FA" />
        <rect x="65" y="106" width="50" height="8" rx="3" fill="#60A5FA" />
        {/* Red notepad / sticky */}
        <rect x="105" y="55" width="55" height="70" rx="8" fill="#F87171" />
        {/* Lines on red */}
        <rect x="115" y="72" width="35" height="5" rx="2" fill="#FEE2E2" />
        <rect x="115" y="85" width="28" height="5" rx="2" fill="#FEE2E2" />
        <rect x="115" y="98" width="32" height="5" rx="2" fill="#FEE2E2" />
        {/* Pencil */}
        <g transform="rotate(-25 145 40)">
          <rect x="138" y="20" width="14" height="55" rx="3" fill="#FBBF24" />
          <rect x="138" y="20" width="14" height="12" rx="3" fill="#60A5FA" />
          <path d="M138 75 L145 88 L152 75 Z" fill="#F59E0B" />
          <path d="M142 88 L145 95 L148 88 Z" fill="#1F2937" />
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    title: "web designing",
    description:
      "We provide professional web designing services to create visually appealing and user-friendly websites.",
    icon: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 w-40"
      >
        {/* Browser window */}
        <rect x="45" y="35" width="110" height="90" rx="12" fill="#1E3A8A" />
        {/* Top bar */}
        <rect x="45" y="35" width="110" height="22" rx="12" fill="#312E81" />
        <rect x="45" y="47" width="110" height="10" fill="#312E81" />
        {/* Traffic lights */}
        <circle cx="60" cy="46" r="5" fill="#22C55E" />
        <circle cx="76" cy="46" r="5" fill="#EAB308" />
        <circle cx="92" cy="46" r="5" fill="#EF4444" />
        {/* WEB label */}
        <rect x="115" y="40" width="30" height="12" rx="3" fill="#4ADE80" />
        <text
          x="130"
          y="49"
          textAnchor="middle"
          fill="#14532D"
          fontSize="8"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          WEB
        </text>
        {/* Code brackets circle */}
        <circle cx="100" cy="95" r="28" fill="#FBBF24" />
        <text
          x="100"
          y="102"
          textAnchor="middle"
          fill="#1E3A8A"
          fontSize="22"
          fontWeight="bold"
          fontFamily="monospace"
        >
          {"</>"}
        </text>
        {/* Gear bottom left */}
        <circle cx="55" cy="145" r="18" fill="#A78BFA" />
        <circle cx="55" cy="145" r="8" fill="#1E1B4B" />
        {/* Pencil left */}
        <g transform="rotate(-40 40 120)">
          <rect x="30" y="100" width="10" height="40" rx="2" fill="#F472B6" />
          <path d="M30 140 L35 150 L40 140 Z" fill="#EC4899" />
        </g>
        {/* Connecting lines */}
        <path
          d="M55 127 Q 40 110 50 90"
          stroke="#F472B6"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M145 127 Q 160 110 150 90"
          stroke="#FBBF24"
          strokeWidth="3"
          fill="none"
        />
        {/* Small gear right */}
        <circle cx="145" cy="145" r="12" fill="#FBBF24" />
        <circle cx="145" cy="145" r="5" fill="#1E3A8A" />
      </svg>
    ),
  },
];

export default function MyServicesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-28">
      {/* Subtle top-right ambient glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(234, 179, 8, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
          My Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6 flex h-44 w-44 items-center justify-center md:h-48 md:w-48">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold capitalize text-yellow-400">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}