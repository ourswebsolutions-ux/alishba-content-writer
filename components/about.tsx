"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      {/* Top subtle line */}
      <div className="mx-auto max-w-6xl border-t border-white/10" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-12 md:gap-12 md:px-8">
        {/* LEFT COLUMN – Image + Button (4/12) */}
        <div className="flex flex-col items-center md:col-span-4">
          {/* Image with yellow grid + glow */}
          <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-sm">
            {/* Yellow grid background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#c9a800",
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
              }}
            />
            {/* Soft radial glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgba(255, 220, 50, 0.45) 0%, transparent 70%)",
              }}
            />
            {/* Portrait */}
            <div className="relative h-full w-full">
              <Image
                src="/hero.png"
                alt="Alishba Siddiq"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 320px"
                priority
              />
            </div>
          </div>

          {/* Contact button */}
          <Link
            href="/#contact"
            className="mt-5 flex w-full max-w-[320px] items-center justify-center border border-yellow-500/60 bg-black py-2.5 text-sm font-medium text-yellow-400 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-300"
          >
            Contact here
          </Link>
        </div>

        {/* RIGHT COLUMN – Text Content (8/12) */}
        <div className="flex flex-col md:col-span-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            About me
          </h2>

          <div className="space-y-5 text-sm leading-relaxed text-gray-300 md:text-base">
            <p>
              My name is{" "}
              <span className="font-semibold text-white">Alishba Siddiq</span>, a
              WordPress Developer and On-Page SEO Architect with over 3 years of
              experience in the digital world. My journey has been all about
              empowering others through skills and strategy.
            </p>

            <p>
              So far, I&apos;ve successfully trained 1,500+ students, helped
              1,000+ bloggers monetize their WordPress websites, and guided 500+
              housewives to start earning from the comfort of their homes.
            </p>

            <p>
              My strategies have driven over 4.32 million organic traffic across
              multiple websites — all through smart SEO, content planning, and
              high-performing WordPress development.
            </p>

            <p>
              I believe in building websites that don&apos;t just look good —
              they perform, rank, and convert. I&apos;m here to help you turn
              your digital goals into results.
            </p>

            <p>Let&apos;s connect and create something powerful — together.</p>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-4">
            {/* LinkedIn */}
           {/* Facebook */}
<a
  href="https://www.facebook.com/share/18rMjC62tH/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
  className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1877F2] text-white transition-transform hover:scale-110"
>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.003 10.125 11.927v-8.437H7.078v-3.49h3.047V9.412c0-3.018 1.792-4.686 4.533-4.686 1.312 0 2.686.236 2.686.236v2.976h-1.514c-1.491 0-1.955.93-1.955 1.885v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.076 24 18.092 24 12.073Z" />
  </svg>
</a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/92327 5561880"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01 conf-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:alishbasiddiq61@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1A73E8] text-white transition-transform hover:scale-110"
            >
              <Mail className="h-5 w-5" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom subtle line */}
      <div className="mx-auto max-w-6xl border-b border-white/10" />
    </section>
  );
}