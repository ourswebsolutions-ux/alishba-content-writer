// components/testimonial-slider.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  image: string;
  alt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/ss1.png",
    alt: "Client WhatsApp testimonial – SEO results",
  },
  {
    id: 2,
    image: "/ss2.png",
    alt: "Client WhatsApp testimonial – ranking improvement",
  },
  {
    id: 3,
    image: "/ss3.png",
    alt: "Client WhatsApp testimonial – student success",
  },
  {
    id: 4,
    image: "/ss4.png",
    alt: "Client WhatsApp testimonial – traffic growth",
  },
  {
    id: 5,
    image: "/ss5.png",
    alt: "Client WhatsApp testimonial – WordPress project",
  },
  {
    id: 6,
    image: "/ss6.png",
    alt: "Client WhatsApp testimonial – mentorship feedback",
  },
  {
    id: 7,
    image: "/ss7.png",
    alt: "Client WhatsApp testimonial – mentorship feedback",
  },
];

export default function TestimonialSlider() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Duplicate the list for seamless infinite loop
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-28">
      {/* Subtle yellow ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(234, 179, 8, 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Client Success{" "}
            <span className="text-yellow-400">Stories</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Real feedback from clients and students I&apos;ve helped grow.
          </p>
        </div>

        {/* Slider container with edge fade */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            className={`flex w-max gap-6 ${
              reduceMotion ? "" : "animate-marquee-ltr group-hover:[animation-play-state:paused]"
            }`}
            style={
              reduceMotion
                ? undefined
                : {
                    animation: "marquee-ltr 45s linear infinite",
                  }
            }
            onMouseEnter={(e) => {
              if (!reduceMotion) {
                (e.currentTarget as HTMLDivElement).style.animationPlayState =
                  "paused";
              }
            }}
            onMouseLeave={(e) => {
              if (!reduceMotion) {
                (e.currentTarget as HTMLDivElement).style.animationPlayState =
                  "running";
              }
            }}
          >
            {loopItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="relative flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-xl shadow-black/40 backdrop-blur-sm"
                style={{
                  width: "clamp(280px, 28vw, 340px)",
                }}
              >
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 768px) 280px, 340px"
                    quality={90}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes injected via style tag for reliability */}
      <style jsx global>{`
        @keyframes marquee-ltr {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-ltr {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}