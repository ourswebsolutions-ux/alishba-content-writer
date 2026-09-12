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
    title: "Article Writer",
    description:
      "I write well-researched, engaging, and SEO-friendly articles that provide value to readers and help websites build authority.",
    icon: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 w-40"
      >
        {/* Document */}
        <rect x="45" y="35" width="100" height="125" rx="10" fill="#BFDBFE" />
        <rect x="55" y="45" width="80" height="105" rx="6" fill="#EFF6FF" />

        {/* Article heading */}
        <rect x="68" y="60" width="50" height="8" rx="3" fill="#60A5FA" />

        {/* Article lines */}
        <rect x="68" y="80" width="55" height="6" rx="3" fill="#93C5FD" />
        <rect x="68" y="93" width="45" height="6" rx="3" fill="#93C5FD" />
        <rect x="68" y="106" width="52" height="6" rx="3" fill="#93C5FD" />
        <rect x="68" y="119" width="38" height="6" rx="3" fill="#93C5FD" />

        {/* Pencil */}
        <g transform="rotate(-40 145 65)">
          <rect x="138" y="35" width="14" height="60" rx="3" fill="#FBBF24" />
          <rect x="138" y="35" width="14" height="12" rx="3" fill="#F59E0B" />
          <path d="M138 95 L145 108 L152 95 Z" fill="#FDE68A" />
          <path d="M142 108 L145 114 L148 108 Z" fill="#1F2937" />
        </g>

        {/* Floating elements */}
        <circle cx="38" cy="55" r="10" stroke="#FBBF24" strokeWidth="3" />
        <circle cx="160" cy="125" r="9" stroke="#60A5FA" strokeWidth="3" />
      </svg>
    ),
  },

  {
    id: 2,
    title: "Content Writer",
    description:
      "I create clear, engaging, and SEO-focused content for blogs, businesses, brands, and digital platforms that connects with the target audience.",
    icon: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 w-40"
      >
        {/* Main document */}
        <rect x="40" y="35" width="105" height="125" rx="10" fill="#93C5FD" />
        <rect x="50" y="45" width="85" height="105" rx="7" fill="#EFF6FF" />

        {/* Content lines */}
        <rect x="65" y="65" width="55" height="8" rx="3" fill="#60A5FA" />
        <rect x="65" y="84" width="45" height="6" rx="3" fill="#93C5FD" />
        <rect x="65" y="98" width="52" height="6" rx="3" fill="#93C5FD" />
        <rect x="65" y="112" width="42" height="6" rx="3" fill="#93C5FD" />
        <rect x="65" y="126" width="50" height="6" rx="3" fill="#93C5FD" />

        {/* Chat/content bubble */}
        <path
          d="M120 55 Q120 45 130 45 H158 Q168 45 168 55 V82 Q168 92 158 92 H142 L132 102 V92 H130 Q120 92 120 82 Z"
          fill="#FBBF24"
        />

        <rect x="132" y="59" width="24" height="5" rx="2" fill="#78350F" />
        <rect x="132" y="70" width="20" height="5" rx="2" fill="#78350F" />

        {/* Floating pencil */}
        <g transform="rotate(-35 35 130)">
          <rect x="28" y="105" width="12" height="45" rx="3" fill="#F472B6" />
          <path d="M28 150 L34 162 L40 150 Z" fill="#EC4899" />
        </g>

        <circle cx="35" cy="45" r="8" stroke="#FBBF24" strokeWidth="3" />
      </svg>
    ),
  },

  {
    id: 3,
    title: "Website Content Writer",
    description:
      "I write professional website content including home pages, service pages, about pages, landing pages, and other content designed to engage visitors and drive conversions.",
    icon: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 w-40"
      >
        {/* Browser */}
        <rect x="35" y="40" width="130" height="105" rx="12" fill="#1E3A8A" />

        {/* Browser top */}
        <rect x="35" y="40" width="130" height="25" rx="12" fill="#312E81" />
        <rect x="35" y="53" width="130" height="12" fill="#312E81" />

        {/* Traffic lights */}
        <circle cx="51" cy="52" r="5" fill="#22C55E" />
        <circle cx="67" cy="52" r="5" fill="#EAB308" />
        <circle cx="83" cy="52" r="5" fill="#EF4444" />

        {/* Website content */}
        <rect x="50" y="78" width="45" height="8" rx="3" fill="#60A5FA" />
        <rect x="50" y="94" width="75" height="6" rx="3" fill="#93C5FD" />
        <rect x="50" y="107" width="65" height="6" rx="3" fill="#93C5FD" />

        {/* CTA button */}
        <rect x="50" y="121" width="35" height="12" rx="4" fill="#FBBF24" />

        {/* Content card */}
        <rect x="120" y="80" width="30" height="45" rx="5" fill="#4ADE80" />

        {/* Pencil */}
        <g transform="rotate(-35 145 145)">
          <rect x="139" y="120" width="11" height="42" rx="3" fill="#F472B6" />
          <path d="M139 162 L144.5 172 L150 162 Z" fill="#EC4899" />
        </g>

        {/* Code brackets */}
        <text
          x="135"
          y="110"
          textAnchor="middle"
          fill="#14532D"
          fontSize="13"
          fontWeight="bold"
          fontFamily="monospace"
        >
          {"</>"}
        </text>

        <circle cx="30" cy="100" r="8" stroke="#FBBF24" strokeWidth="3" />
      </svg>
    ),
  },

  {
    id: 4,
    title: "Copywriter",
    description:
      "I craft persuasive and conversion-focused copy for websites, landing pages, advertisements, product pages, and marketing campaigns.",
    icon: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 w-40"
      >
        {/* Megaphone */}
        <path
          d="M55 82 L120 58 V118 L55 96 Z"
          fill="#60A5FA"
        />

        <path
          d="M120 58 L150 48 V128 L120 118 Z"
          fill="#93C5FD"
        />

        {/* Megaphone handle */}
        <path
          d="M78 98 L78 135 Q78 142 85 142 H98 Q105 142 105 135 V108"
          fill="#FBBF24"
        />

        {/* Sound waves */}
        <path
          d="M145 65 Q165 75 145 85"
          stroke="#FBBF24"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M150 48 Q185 65 150 102"
          stroke="#F472B6"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Copy document */}
        <rect x="38" y="45" width="48" height="35" rx="6" fill="#EFF6FF" />
        <rect x="48" y="56" width="25" height="5" rx="2" fill="#60A5FA" />
        <rect x="48" y="66" width="18" height="5" rx="2" fill="#93C5FD" />

        {/* Sparkles */}
        <path
          d="M38 115 L42 125 L52 129 L42 133 L38 143 L34 133 L24 129 L34 125 Z"
          fill="#FBBF24"
        />

        <circle cx="158" cy="140" r="7" fill="#A78BFA" />
        <circle cx="175" cy="120" r="5" fill="#4ADE80" />
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