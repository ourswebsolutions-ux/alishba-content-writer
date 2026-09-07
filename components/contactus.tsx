
"use client";

import Link from "next/link";
import { Phone, Mail, Linkedin, ArrowUpRight } from "lucide-react";

interface ContactMethod {
  id: number;
  title: string;
  value: string;
  href: string;
  type: "phone" | "email" | "linkedin";
  cta: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: "Phone",
    value: "+92 327 5561880 ",
    href: "tel:+92 327 5561880",
    type: "phone",
    cta: "Call Me",
  },
  {
    id: 2,
    title: "Email",
    value: "alishbasiddiq61@gmail.com",
    href: "mailto:alishbasiddiq61@gmail.com",
    type: "email",
    cta: "Send Email",
  },
  {
    id: 3,
    title: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/your-profile/",
    type: "linkedin",
    cta: "View Profile",
  },
];

const iconMap = {
  phone: Phone,
  email: Mail,
  linkedin: Linkedin,
};

export default function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-28">
      {/* Ambient yellow glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(234, 179, 8, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400 md:text-lg">
            Have a project in mind or want to discuss an opportunity? Feel free
            to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method) => {
            const Icon = iconMap[method.type];
            const isExternal = method.type === "linkedin";

            return (
              <Link
                key={method.id}
                href={method.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                {/* Subtle hover glow */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(234, 179, 8, 0.14) 0%, transparent 70%)",
                  }}
                />

                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400/40 group-hover:bg-yellow-400/20">
                  <Icon className="h-5 w-5 text-yellow-400" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {method.title}
                </h3>

                {/* Value */}
                <p className="mb-5 text-sm text-gray-400">{method.value}</p>

                {/* CTA */}
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-400 transition-all duration-300 group-hover:gap-2.5">
                  {method.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom message + CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-base text-gray-400">
            Let&apos;s build something great together.
          </p>
          <Link
            href="mailto:alishbasiddiq61@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20"
          >
            Start a Conversation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}