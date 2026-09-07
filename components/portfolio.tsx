"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nexuslinkagency.com",
    description:
      "A professional agency website designed with a modern business-focused layout and conversion-oriented presentation.",
    url: "https://nexuslinkagency.com",
  },
  {
    id: 2,
    title: "Glowbyfatima.com",
    description:
      "A modern e-commerce website focused on product presentation, user experience, and online shopping.",
    url: "https://glowbyfatima.com",
  },
  {
    id: 3,
    title: "Marketingtrendspro.com",
    description:
      "A digital marketing niche website created for marketing insights, services, and informative content.",
    url: "https://marketingtrendspro.com",
  },
  {
    id: 4,
    title: "Siamesemania.com",
    description:
      "A pets niche website focused on Siamese cats, useful information, and an engaging reader-friendly experience.",
    url: "https://siamesemania.com",
  },
  {
    id: 5,
    title: "Gardenchains.com",
    description:
      "A gardening niche website designed around useful gardening content, clean navigation, and readable presentation.",
    url: "https://gardenchains.com",
  },
  {
    id: 6,
    title: "Homestylespots.com",
    description:
      "An interior designing website featuring home styling ideas, interior inspiration, and visually organized content.",
    url: "https://homestylespots.com",
  },
  {
    id: 7,
    title: "Skinglowbucket.com",
    description:
      "A skin care and beauty niche website focused on skincare information, beauty content, and a clean modern interface.",
    url: "https://skinglowbucket.com",
  },
  {
    id: 8,
    title: "Healthnutriblog.com",
    description:
      "A health and nutrition website designed to provide informative content through a clean and easy-to-read layout.",
    url: "https://healthnutriblog.com",
  },
];

export default function PreviousWebDesigningProjects() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-28">
      {/* Subtle ambient yellow glow */}
      <div
        className="pointer-events-none absolute -right-20 top-0 h-[500px] w-[600px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(234, 179, 8, 0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Previous Web{" "}
            <span className="text-yellow-400">Designing Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 md:text-lg">
            A selection of websites I&apos;ve designed and developed for
            different businesses and industries.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-500/5"
            >
              {/* Subtle inner glow */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(234, 179, 8, 0.12) 0%, transparent 70%)",
                }}
              />

              {/* Project number */}
              <span className="absolute right-5 top-5 text-sm font-medium text-white/15">
                {String(project.id).padStart(2, "0")}
              </span>

              {/* Label */}
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-yellow-400/80">
                Web Design Project
              </p>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400 sm:text-2xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* CTA */}
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition-all duration-300 group-hover:gap-3 hover:text-yellow-300"
              >
                View Website
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}