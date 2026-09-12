
"use client";

const projects = [
  "Sourpuss Clothing — Fashion & Gothic Lifestyle",
  "Awwwards — Web Design & Technology",
  "BuiltWith — Technology & Web Intelligence",
  "Uptodown — Apps & Mobile Games",
  "Mob.org — Android Games & Apps",
  "APKMirror — Android Apps & Software",
  "MDPI — Healthcare & Scientific Publishing",
];

export default function PreviousContentWritingProjects() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 md:py-24">
      {/* Soft yellow glow from top-right */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-[420px] w-[520px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(234, 179, 8, 0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
          Previous Content Writing Projects
        </h2>

        {/* Project Grid */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-md bg-yellow-400 px-6 py-3 text-center text-sm font-medium text-black transition-colors hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
