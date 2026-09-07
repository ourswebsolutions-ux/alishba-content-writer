"use client";

import Image from "next/image";
// import Navbar from "@/components/Navbar"; // adjust path if your Navbar lives elsewhere

export default function HomePage() {
  const handleDownloadResume = async () => {
    const response = await fetch("/Alishba-Resume.pdf");
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "Alishba-Resume.pdf");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Existing Navbar – DO NOT MODIFY */}
      {/* <Navbar /> */}

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* Background glow – soft yellow/olive radial on the right */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 78% 50%, rgba(180, 160, 40, 0.35) 0%, rgba(40, 50, 10, 0.15) 40%, transparent 70%)",
          }}
        />

        {/* Subtle bottom divider */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100vh-66px)] max-w-[1440px] flex-col items-center px-6 pt-8 md:flex-row md:items-center md:px-10 lg:px-16">
          {/* LEFT – Headline + Button */}
          <div className="z-10 w-full md:w-[52%] lg:w-[50%] md:pr-8">
            <h1 className="text-[32px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[40px] md:text-[48px] lg:text-[52px]">
              Hi, I&apos;m{" "}
              <span className="text-[#F5C518]">Alishba Siddiq</span> Your
              <br />
              Trusted SEO Expert &amp; Mentor
              <br />
              of Successful Students
            </h1>

            {/* Download Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[#F5C518] px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5C518] hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </button>
          </div>

          {/* RIGHT – Portrait */}
          <div className="relative mt-10 flex w-full justify-center md:mt-0 md:w-[48%] md:justify-end lg:w-[50%]">
            <div className="relative h-[420px] w-[320px] sm:h-[480px] sm:w-[360px] md:h-[520px] md:w-[400px] lg:h-[580px] lg:w-[440px]">
              <Image
                src="/hero.png"
                alt="Alishba Siddiq – SEO Expert & Mentor"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}