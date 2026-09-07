
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
    image: "/p1.png",
    alt: "Client WhatsApp testimonial – SEO results",
  },
  {
    id: 2,
    image: "/p2.png",
    alt: "Client WhatsApp testimonial – ranking improvement",
  },
  {
    id: 3,
    image: "/p3.png",
    alt: "Client WhatsApp testimonial – student success",
  },
  {
    id: 4,
    image: "/p4.png",
    alt: "Client WhatsApp testimonial – traffic growth",
  },
];

export default function TestimonialSlider() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setReduceMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  // Duplicate items for a seamless infinite loop
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-28">
      {/* Ambient yellow glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(234, 179, 8, 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            My Previous{" "}
            <span className="text-yellow-400">On-page SEO</span> Projects
          </h2>

          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Real feedback from clients and students I&apos;ve helped grow.
          </p>
        </div>

        {/* Slider with edge fade */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          {/* Moving Track */}
          <div
            className={`flex w-max gap-6 ${
              reduceMotion ? "" : "animate-marquee-rtl"
            }`}
            style={
              reduceMotion
                ? undefined
                : {
                    animation: "marquee-rtl 45s linear infinite",
                  }
            }
            onMouseEnter={(event) => {
              if (!reduceMotion) {
                event.currentTarget.style.animationPlayState = "paused";
              }
            }}
            onMouseLeave={(event) => {
              if (!reduceMotion) {
                event.currentTarget.style.animationPlayState = "running";
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

      {/* Infinite Right-to-Left Animation */}
      <style jsx global>{`
        @keyframes marquee-rtl {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-rtl {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
