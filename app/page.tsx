"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import AboutMeSection from "@/components/about";
import ServicesSection from "@/components/service";
import TestimonialSlider from "@/components/testimonial-slider";
import OnPageSEOProjectsSlider from "@/components/OnPageSEOProjectsSlider";
import PreviousContentWritingProjects from "@/components/PreviousContentWritingProjects";
import PricingPackages from "@/components/pricing";
import Portfolio from "@/components/portfolio";
import ContactForm from "@/components/contactus";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      <main>
        {/* Home */}
        <section id="home" className="scroll-mt-[66px]">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-[66px]">
          <AboutMeSection />
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-[66px]">
          <ServicesSection />
        </section>

        {/* Client Testimonials */}
        {/* <TestimonialSlider /> */}

        {/* On-Page SEO Projects */}
        <OnPageSEOProjectsSlider />

        {/* Previous Content Writing Projects */}
        <PreviousContentWritingProjects />

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-[66px]">
          <PricingPackages />
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="scroll-mt-[66px]">
          <Portfolio />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-[66px]">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
