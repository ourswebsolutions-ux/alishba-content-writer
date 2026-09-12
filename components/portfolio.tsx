
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
    title: "Sourpussclothing.com",
    description:
      "A bold fashion e-commerce website focused on modern gothic clothing, strong visual presentation, and an engaging shopping experience.",
    url: "https://www.sourpussclothing.com",
  },
  {
    id: 2,
    title: "Awwwards",
    description:
      "A leading web design inspiration platform showcasing creative, innovative, and award-winning digital experiences from around the world.",
    url: "https://www.awwwards.com",
  },
  {
    id: 3,
    title: "BuiltWith",
    description:
      "A technology intelligence platform that helps users discover the technologies, tools, and frameworks powering websites across the internet.",
    url: "https://builtwith.com",
  },
  {
    id: 4,
    title: "Uptodown",
    description:
      "A global software and mobile application platform providing users with access to Android apps, games, and digital software.",
    url: "https://en.uptodown.com",
  },
  {
    id: 5,
    title: "Mob.org",
    description:
      "A mobile gaming platform offering Android games, apps, and downloadable content with a user-friendly browsing experience.",
    url: "https://mob.org",
  },
  {
    id: 6,
    title: "APKMirror",
    description:
      "A trusted Android application platform providing access to APK downloads with a clean interface and organized application library.",
    url: "https://www.apkmirror.com",
  },
  {
    id: 7,
    title: "MDPI",
    description:
      "An international open-access publishing platform featuring scientific research and academic journals across healthcare, technology, and other disciplines.",
    url: "https://www.mdpi.com",
  },
  {
    id: 8,
    title: "BerneDirect.com",
    description:
      "A pet-focused e-commerce website offering dog products and services with a customer-friendly shopping experience.",
    url: "https://bernedirect.com",
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
            A selection of websites and digital platforms I&apos;ve worked on
            across fashion, technology, mobile applications, gaming, and
            publishing industries.
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
