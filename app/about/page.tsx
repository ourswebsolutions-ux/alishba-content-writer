import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, GraduationCap, Briefcase } from "lucide-react"
import type { Metadata } from "next"
import { DownloadResumeButton } from "@/components/DownloadResumeButton"

export const metadata: Metadata = {
  title: "About Rabia Kalar | SEO Content Strategist & Website Copywriter",
  description:
    "Learn about Rabia Kalar, an SEO Content Strategist, Website Copywriter and Content Marketing Specialist from Karachi, Pakistan specializing in high-converting website copy, SEO strategies, email marketing, and brand storytelling for B2B and luxury brands.",
  keywords: [
    "Rabia Kalar",
    "SEO Content Strategist",
    "Website Copywriter",
    "Content Marketing Specialist",
    "SEO blog writing",
    "landing page copywriting",
    "email marketing",
    "brand storytelling",
    "content strategist Pakistan",
    "freelance copywriter",
    "B2B content strategy",
    "luxury brand copywriting",
  ],
  authors: [{ name: "Rabia Kalar" }],
  openGraph: {
    title: "About Rabia Kalar | SEO Content Strategist & Website Copywriter",
    description:
      "Discover Rabia Kalar's experience in SEO content strategy, website copywriting, email marketing, and brand storytelling for international clients.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/about-dpp.jpg.jpg",
        width: 1200,
        height: 630,
        alt: "Rabia Kalar - SEO Content Strategist & Website Copywriter",
      },
    ],
    siteName: "Rabia Kalar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rabia Kalar | SEO Content Strategist & Website Copywriter",
    description:
      "Learn about Rabia Kalar's experience in SEO strategy, high-converting copywriting, and content marketing.",
    images: ["/about-dpp.jpg.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/about",
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
      "@type": "Person",
      name: "Rabia Kalar",
      jobTitle: "SEO Content Strategist | Website Copywriter | Content Marketing Specialist",
      url: "https://storycup.vercel.app/about",
      email: "rabiakb4545@gmail.com",
      telephone: "+92 3142013682",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        addressCountry: "Pakistan",
      },
      description:
        "Rabia Kalar is a highly skilled SEO Content Strategist, Email Marketer and Website Copywriter from Karachi, Pakistan with 5+ years of experience specializing in B2B, digital marketing, and luxury lifestyle brands across the UAE, UK, and global remote clients.",
      sameAs: [
        "https://rabiakb4545.wixsite.com/rabia-kalar",
      ],
    }),
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <Image
              src="/alina-dp.jpeg"
              alt="Rabia Kalar"
              fill
              className="rounded-full border-4 border-primary/30 object-cover object-top"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-2">
            Rabia Kalar
          </h1>
          <p className="text-lg text-primary font-medium mb-4">
            SEO Content Strategist | Website Copywriter | Content Marketing Specialist
          </p>
          <p className="text-muted-foreground mb-6">
            Karachi, Sindh, Pakistan · +92 3142013682 · rabiakb4545@gmail.com
          </p>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Highly skilled SEO Content Strategist, Email Marketer and Website Copywriter with over 5+ years of experience specializing in B2B, digital marketing, and luxury lifestyle brands. Proven expertise in crafting high-converting website copy, SEO blog strategies, landing pages, and email campaigns that improve visibility, engagement, and conversions. Adept at blending storytelling with data-driven strategy to build strong digital brand identities across international markets, including the UAE, UK, and global remote clients.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Experience
          </h2>

          <div className="space-y-8">

            {/* Getdigital.ae */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>SEO Content Specialist & Strategist</CardTitle>
                    <p className="text-muted-foreground">Getdigital.ae (Dubai, UAE – Remote) · 09/2020 – Present</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Worked as a core SEO Content Specialist and Strategist for a Dubai-based digital agency, developing high-performance content strategies for international clients.</li>
                  <li>Created SEO-optimized website copy, blogs, and digital content that improved organic visibility and search rankings.</li>
                  <li>Collaborated with marketing teams to strengthen brand messaging and drive conversion-focused content execution.</li>
                  <li>Delivered content frameworks that enhanced engagement, traffic growth, and user experience across multiple industries.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Strategy</Badge>
                  <Badge variant="secondary">Website Copy</Badge>
                  <Badge variant="secondary">Content Frameworks</Badge>
                  <Badge variant="secondary">Brand Messaging</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Careerslinked.com */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Website Copywriter & Content Strategist</CardTitle>
                    <p className="text-muted-foreground">Careerslinked.com · 03/2019 – Present</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Developed B2B website copy and content strategies leading to a 30% increase in website traffic.</li>
                  <li>Improved lead generation by 20% through optimized messaging and funnel-based content planning.</li>
                  <li>Created SEO blog posts and landing pages contributing to a 25% improvement in search rankings.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">B2B Copywriting</Badge>
                  <Badge variant="secondary">Lead Generation</Badge>
                  <Badge variant="secondary">SEO Blogs</Badge>
                  <Badge variant="secondary">Landing Pages</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Askquejay.com */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Strategist & Copywriter</CardTitle>
                    <p className="text-muted-foreground">Askquejay.com · 05/2020 – 08/2023</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Built marketing strategies for B2B brands improving visibility by 25% and engagement by 15%.</li>
                  <li>Developed persuasive landing page copy increasing conversion rates by 20%.</li>
                  <li>Contributed to revenue growth through strategic content structuring and brand messaging.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Marketing Strategy</Badge>
                  <Badge variant="secondary">Conversion Copy</Badge>
                  <Badge variant="secondary">Brand Messaging</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Global Clicks */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Blog Writer & Copywriter</CardTitle>
                    <p className="text-muted-foreground">Global Clicks (Onsite) · 02/2023 – 09/2024</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Created SEO-optimized blog content and website copy to support digital marketing goals.</li>
                  <li>Delivered long-form and short-form content aligned with brand voice and search performance objectives.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Blog Writing</Badge>
                  <Badge variant="secondary">SEO Content</Badge>
                  <Badge variant="secondary">Copywriting</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  SEO & Content Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Content Strategy</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Website Copywriting</span>
                    <span>96%</span>
                  </div>
                  <Progress value={96} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Landing Page Optimization</span>
                    <span>93%</span>
                  </div>
                  <Progress value={93} className="[&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Content Creation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Blog & Long-Form Content</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Email Marketing Campaigns</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Brand Storytelling</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="[&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Platforms & Specialties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>WordPress Management</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Luxury & B2B Content</span>
                    <span>93%</span>
                  </div>
                  <Progress value={93} className="[&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Content Planning</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="[&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Master’s Degree in Psychology</CardTitle>
                    <p className="text-muted-foreground">Federal Urdu University, Karachi</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed a Master’s Degree in Psychology, building strong analytical, research, and communication skills that support audience-focused content strategy and persuasive brand messaging.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Core Competencies
          </h2>

          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "SEO Content Strategy & Planning",
                  "Website Copywriting (High-Converting)",
                  "Blog Writing & Long-Form Content",
                  "Landing Page Optimization",
                  "Email Marketing Campaigns",
                  "Brand Storytelling & Positioning",
                  "WordPress Management",
                  "Content Strategy for Luxury Brands",
                  "B2B Content Strategy",
                  "Conversion-Focused Copy",
                  "Digital Brand Identity",
                  "Funnel-Based Content Planning",
                  "Search Rankings Optimization",
                  "Audience Engagement",
                  "International Client Collaboration",
                ].map((specialty) => (
                  <Badge
                    key={specialty}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Languages
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-4 text-center">
                <div>
                  <p className="font-medium">English</p>
                  <p className="text-sm text-muted-foreground">Professional Working Proficiency</p>
                </div>
                <div>
                  <p className="font-medium">Urdu</p>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}