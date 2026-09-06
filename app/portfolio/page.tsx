import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Rabia Kalar | SEO Content Strategist & Website Copywriter Portfolio",
  description:
    "Explore Rabia Kalar's portfolio featuring SEO content strategy, website copywriting, blog writing, landing page optimization, brand storytelling, and content for luxury, B2B, and lifestyle brands.",
  keywords: [
    "Rabia Kalar portfolio",
    "Rabia Kalar SEO content strategist",
    "Rabia Kalar website copywriter",
    "SEO content strategy portfolio",
    "website copywriter",
    "content strategist Pakistan",
    "luxury brand copywriting",
    "blog writer",
    "landing page copywriter",
    "email marketing content",
    "B2B content strategy",
    "brand storytelling",
    "SEO content writing",
  ],
  authors: [{ name: "Rabia Kalar" }],
  openGraph: {
    title: "Rabia Kalar | SEO Content Strategist & Website Copywriter Portfolio",
    description:
      "Explore selected SEO content, website copy, blog writing, brand storytelling, and content strategy work by Rabia Kalar.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/contentwriterhomepage.jpeg",
        width: 1200,
        height: 630,
        alt: "Rabia Kalar - SEO Content Strategist & Website Copywriter",
      },
    ],
    siteName: "Rabia Kalar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabia Kalar | SEO Content Strategist & Website Copywriter",
    description:
      "Selected work in SEO content strategy, website copywriting, blog writing, landing pages, and brand storytelling.",
    images: ["/contentwriterhomepage.jpeg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/portfolio",
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
      "@type": "CreativeWork",
      name: "Rabia Kalar's Content Strategy Portfolio",
      author: {
        "@type": "Person",
        name: "Rabia Kalar",
        jobTitle: "SEO Content Strategist | Website Copywriter | Content Marketing Specialist",
        url: "https://storycup.vercel.app",
      },
      url: "https://storycup.vercel.app/portfolio",
      description:
        "Professional portfolio featuring SEO content strategy, website copywriting, blog writing, landing page optimization, brand storytelling, and content for luxury and B2B brands.",
    }),
  },
}


const projects = [
  {
    id: 1,
    title: "GetDigital – Digital Experiences & Web Development",
    description:
      "SEO content strategy and website copy for GetDigital, a Dubai-based digital agency focused on brand identity, UI/UX design, frontend development, e-commerce solutions, AI solutions, CMS platforms, and custom web development.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "SEO Content Strategy",
    originalCategory: "Digital & Technology Content",
    technologies: [
      "Website Content",
      "SEO Content Strategy",
      "Technology Research",
      "Brand Content",
      "Web Development Content",
    ],
    liveUrl: "https://getdigital.ae/",
    featured: true,
  },

  {
    id: 2,
    title: "Diamonds by Pelvi – Luxury Jewellery E-commerce",
    description:
      "High-converting website copy and SEO content for a luxury jewellery e-commerce brand featuring engagement rings, bridal collections, necklaces, pendants, bracelets, earrings, lab-grown diamonds, gifting, and bespoke jewellery services.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
    category: "Luxury Brand Content",
    originalCategory: "Luxury Jewellery & E-commerce",
    technologies: [
      "E-commerce Content",
      "SEO Writing",
      "Product Content",
      "Luxury Brand Storytelling",
      "Product Research",
    ],
    liveUrl: "https://diamondsbypelvi.com/",
    featured: true,
  },

  {
    id: 3,
    title: "Lab Jewel Nation – Lab-Grown Diamond E-commerce",
    description:
      "SEO blogs, brand storytelling, and website copy for Lab Jewel Nation, a luxury lab-grown diamond jewellery brand showcasing collections, engagement rings, bracelets, earrings, necklaces, pendants, gifting products, and jewellery inspiration.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    category: "Luxury Brand Content",
    originalCategory: "Jewellery & Product Content",
    technologies: [
      "SEO Content",
      "Product Descriptions",
      "E-commerce Writing",
      "Luxury Positioning",
      "Blog Content",
    ],
    liveUrl: "https://labjewelnation.ae/",
    featured: true,
  },

  {
    id: 4,
    title: "Style Codes – Personal Styling & Fashion Content",
    description:
      "Content strategy and copy for Style Codes, a luxury personal styling and shopping platform covering personal shopping, wardrobe editing, colour and style analysis, men's styling, workshops, presentations, fashion guides, and lifestyle content.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    category: "Lifestyle & Fashion",
    originalCategory: "Fashion & Lifestyle Content",
    technologies: [
      "SEO Content Writing",
      "Fashion Writing",
      "Lifestyle Content",
      "Blog Writing",
      "Brand Storytelling",
    ],
    liveUrl: "https://www.style-codes.com/",
    featured: true,
  },

  {
    id: 5,
    title: "Luxury Jewellery Product & Collection Content",
    description:
      "Research-driven product and collection content developed around luxury jewellery, engagement rings, bridal collections, lab-grown diamonds, gifting, bespoke designs, and customer-focused shopping experiences.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    category: "Luxury Brand Content",
    originalCategory: "Luxury & E-commerce Writing",
    technologies: [
      "Article Writing",
      "Product Research",
      "SEO Writing",
      "Luxury Content",
      "E-commerce Content",
    ],
    liveUrl: "https://diamondsbypelvi.com/",
    featured: false,
  },

  {
    id: 6,
    title: "Fashion & Personal Styling Content",
    description:
      "Professional fashion and lifestyle content covering personal styling, wardrobe organization, colour analysis, shopping guidance, signature style, event dressing, and fashion trends for a luxury audience.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    category: "Lifestyle & Fashion",
    originalCategory: "Fashion & Lifestyle Writing",
    technologies: [
      "Fashion Writing",
      "Lifestyle Writing",
      "SEO Content",
      "Blog Writing",
      "Research",
    ],
    liveUrl: "https://www.style-codes.com/",
    featured: false,
  },

  {
    id: 7,
    title: "Digital Agency & Technology Content",
    description:
      "Professional technology and B2B content covering digital transformation, brand identity, UI/UX design, CMS platforms, e-commerce solutions, AI solutions, mobile applications, and custom web development.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    category: "SEO Content Strategy",
    originalCategory: "Technology & Business Content",
    technologies: [
      "Technology Writing",
      "SEO Content",
      "Business Research",
      "Web Content",
      "B2B Content Strategy",
    ],
    liveUrl: "https://getdigital.ae/",
    featured: false,
  },
]
const categories = [
  "All",
  "SEO Content Strategy",
  "Luxury Brand Content",
  "Lifestyle & Fashion",
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 pt-12 sm:pt-16 lg:pt-20 pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Selected Work
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              My Portfolio
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A selection of SEO content strategies, high-converting website
              copy, brand storytelling, and blog writing created for luxury
              lifestyle, jewellery, fashion, and digital brands across the UAE
              and international markets.
            </p>
          </div>
        </section>

        {/* Portfolio */}
        <section className="container mx-auto px-4 py-10 sm:py-14 lg:py-16">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="h-auto flex flex-wrap justify-center gap-1 p-1 max-w-5xl">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 py-2 text-sm"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => {
              const filteredProjects =
                category === "All"
                  ? projects
                  : projects.filter(
                      (project) => project.category === category
                    )

              return (
                <TabsContent
                  key={category}
                  value={category}
                  className="mt-0"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredProjects.map((project) => (
                      <Card
                        key={project.id}
                        className="group overflow-hidden border-border/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                          {project.featured && (
                            <Badge className="absolute top-4 left-4">
                              Featured
                            </Badge>
                          )}

                          <Badge
                            variant="secondary"
                            className="absolute bottom-4 left-4 backdrop-blur-sm"
                          >
                            {project.originalCategory}
                          </Badge>
                        </div>

                        {/* Content */}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((technology) => (
                              <Badge
                                key={technology}
                                variant="outline"
                                className="text-xs font-normal"
                              >
                                {technology}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            size="sm"
                            className="w-full sm:w-auto"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Published Work
                              <ExternalLink className="ml-2 h-3.5 w-3.5" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                      <p className="text-muted-foreground">
                        No projects available in this category yet.
                      </p>
                    </div>
                  )}
                </TabsContent>
              )
            })}
          </Tabs>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 lg:py-20">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
              <Badge variant="secondary" className="mb-4">
                Let's Work Together
              </Badge>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Have a Content Project in Mind?
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Need SEO content strategy, high-converting website copy, blog
                writing, landing pages, email campaigns, or brand storytelling?
                Let's create clear, search-friendly, conversion-focused content
                for your brand.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}