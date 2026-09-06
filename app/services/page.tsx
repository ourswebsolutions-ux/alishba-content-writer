import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Layers, Palette, Monitor, Printer, MessageCircle, Sparkles } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rabia Kalar's Services - SEO Content Strategy & Website Copywriting",
  description:
    "Hire Rabia Kalar for professional SEO content strategy, high-converting website copywriting, blog writing, landing page optimization, and email marketing services.",
  keywords: [
    "SEO content strategy",
    "website copywriting",
    "blog writing services",
    "landing page optimization",
    "email marketing campaigns",
    "brand storytelling",
    "content strategist Pakistan",
    "freelance copywriter",
    "B2B content strategy",
    "luxury brand copywriting",
  ],
  authors: [{ name: "Rabia Kalar" }],
  openGraph: {
    title: "Rabia Kalar's Services - SEO Content Strategy & Website Copywriting",
    description:
      "Rabia Kalar offers expert SEO content strategy, website copywriting, blog writing, landing pages, and email marketing for B2B and luxury brands worldwide.",
    type: "website",
    url: "https://storycup.vercel.app/services",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rabia Kalar SEO Content & Copywriting Services",
      },
    ],
    siteName: "Rabia Kalar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabia Kalar's Services - SEO Content Strategy & Website Copywriting",
    description:
      "Hire Rabia Kalar for professional SEO strategy, website copy, and content marketing services.",
    images: ["/services-og-image.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "SEO Content Strategy & Website Copywriting",
      provider: {
        "@type": "Person",
        name: "Rabia Kalar",
      },
      url: "https://storycup.vercel.app/services",
      description:
        "Rabia Kalar provides professional SEO content strategy, high-converting website copywriting, blog writing, landing page optimization, and email marketing for B2B and luxury brands globally.",
      areaServed: ["Pakistan", "UAE", "UK", "USA", "Global"],
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        description: "Professional SEO content strategy, website copywriting, and content marketing services",
      },
    }),
  },
}

const services = [
  {
    icon: Sparkles,
    title: "SEO Content Strategy",
    description:
      "Data-driven content strategies and planning that improve organic visibility, search rankings, and long-term traffic growth for your brand.",
    features: [
      "Keyword Research & Mapping",
      "Content Strategy Frameworks",
      "SEO Blog Planning",
      "Competitive Content Analysis",
    ],
    price: "Starting at $50",
  },
  {
    icon: Monitor,
    title: "Website Copywriting",
    description:
      "High-converting website copy that strengthens brand messaging, improves user experience, and drives engagement and conversions.",
    features: [
      "Homepage & Service Pages",
      "About & Brand Story Pages",
      "Conversion-Focused Messaging",
      "SEO-Optimized Copy",
    ],
    price: "Starting at $40",
  },
  {
    icon: Printer,
    title: "Landing Pages & Email Campaigns",
    description:
      "Persuasive landing page copy and email marketing campaigns designed to increase conversions, nurture leads, and grow revenue.",
    features: [
      "Landing Page Copy",
      "Email Sequence Writing",
      "Funnel-Based Content",
      "A/B Test Messaging Support",
    ],
    price: "Starting at $35",
  },
  {
    icon: Layers,
    title: "Brand Storytelling & Blogs",
    description:
      "Compelling long-form content and brand storytelling for luxury and B2B brands that builds authority and emotional connection.",
    features: [
      "SEO Blog Writing",
      "Brand Positioning Content",
      "Luxury Brand Storytelling",
      "WordPress Content Management",
    ],
    price: "Starting at $30",
  },
]

const packages = [
  {
    name: "Starter",
    price: "$50",
    description: "Perfect for small businesses and personal brands",
    features: [
      "SEO content audit (basic)",
      "2 SEO-optimized blog posts",
      "1 landing page or homepage copy",
      "Keyword recommendations",
      "Email support",
    ],
    popular: false,
    discount: "20% OFF",
  },
  {
    name: "Professional",
    price: "$150",
    description: "Ideal for growing brands and entrepreneurs",
    features: [
      "Full SEO content strategy",
      "5 SEO blog posts + website copy",
      "Landing page optimization",
      "Email campaign sequence (3–5 emails)",
      "Priority support",
    ],
    popular: true,
    discount: "25% OFF",
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    description: "For brands with comprehensive content needs",
    features: [
      "Complete content strategy overhaul",
      "Unlimited content revisions",
      "Full website + blog content package",
      "Ongoing email & landing page support",
      "Dedicated content strategist support",
    ],
    popular: false,
    discount: "",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">SEO Content & Copywriting Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic, conversion-focused content that improves visibility, builds brand authority, and drives measurable results.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What I Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-lg hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing Packages</h2>
            <p className="text-lg text-muted-foreground">Flexible content solutions for every stage of your brand</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "border-primary shadow-lg" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                {pkg.discount && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded z-10 shadow">
                    {pkg.discount}
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Content Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your brand, goals, audience, and current content performance" },
              { step: "02", title: "Strategy", description: "Developing SEO keywords, content frameworks, and messaging direction" },
              { step: "03", title: "Creation", description: "Writing high-converting, SEO-optimized copy and long-form content" },
              { step: "04", title: "Delivery", description: "Final revisions, optimization, and ready-to-publish content handover" },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What types of content do you specialize in?",
                answer:
                  "I specialize in SEO content strategy, high-converting website copy, blog writing, landing pages, email marketing campaigns, and brand storytelling for B2B and luxury lifestyle brands.",
              },
              {
                question: "How many revisions are included?",
                answer:
                  "All packages include 2 rounds of revisions. Additional revision rounds can be arranged at a small extra fee.",
              },
              {
                question: "Do you handle WordPress content management?",
                answer:
                  "Yes. I have experience with WordPress management and can deliver content ready for publishing or handle basic content uploads when required.",
              },
              {
                question: "What is your turnaround time?",
                answer:
                  "Most projects are delivered within 5–7 business days depending on scope. Rush delivery is available on request.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Content?</h2>
              <p className="text-muted-foreground mb-6">
                Let's create strategic, high-converting content that improves visibility and drives results. Share your goals and I'll craft a plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}