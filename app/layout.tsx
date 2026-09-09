
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ReviewSidebar from "@/components/reViews"
import { ReviewSidebarProvider } from "@/components/ReviewSidebarContext"
import FloatingWhatsApp from "@/components/floating-whatsapp"

const inter = Inter({ subsets: ["latin"] })

// import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alishba Siddiq - Content Writer & SEO Content Writer",

  description:
    "Explore Alishba Siddiq's portfolio as a professional Content Writer and SEO Content Writer with 3 years of experience in SEO content writing, article writing, blog writing, website content, content optimization, and web design.",

  keywords: [
    "Alishba Siddiq",
    "content writer",
    "SEO content writer",
    "SEO writer",
    "article writer",
    "blog writer",
    "website content writer",
    "SEO content writing",
    "content optimization",
    "on-page SEO",
    "SEO expert",
    "web content writer",
    "freelance content writer",
    "content writer Pakistan",
    "SEO content writer Pakistan",
    "Alishba Siddiq portfolio",
  ],

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  authors: [{ name: "Alishba Siddiq" }],

  openGraph: {
    title: "Alishba Siddiq - Content Writer & SEO Content Writer",

    description:
      "Explore Alishba Siddiq's portfolio featuring SEO content writing, articles, blogs, website content, content optimization, and on-page SEO.",

    type: "website",

    url: "https://storycup.vercel.app/",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alishba Siddiq - Content Writer & SEO Content Writer",
      },
    ],

    siteName: "Alishba Siddiq Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title: "Alishba Siddiq - Content Writer & SEO Content Writer",

    description:
      "Professional Content Writer and SEO Content Writer specializing in SEO content, articles, blogs, website content, and content optimization.",

    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://storycup.vercel.app/",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReviewSidebarProvider>
          <ReviewSidebar />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <FloatingWhatsApp />
          </ThemeProvider>
        </ReviewSidebarProvider>
      </body>
    </html>
  )
}
