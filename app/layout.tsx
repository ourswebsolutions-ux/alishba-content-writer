
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ReviewSidebar from "@/components/reViews"
import { ReviewSidebarProvider } from "@/components/ReviewSidebarContext"
import FloatingWhatsApp from "@/components/floating-whatsapp"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rabia Kalar - Creative Graphic Designer",

  description:
    "Explore Rabia Kalar's graphic design portfolio. Expert in brand identity, logo design, social media graphics, and visual communication that makes brands stand out.",

  keywords: [
    "graphic designer",
    "logo design",
    "brand identity",
    "visual design",
    "social media design",
    "Rabia Kalar portfolio",
    "freelance graphic designer",
    "creative designer Pakistan",
  ],

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  authors: [{ name: "Rabia Kalar" }],

  openGraph: {
    title: "Rabia Kalar - Creative Graphic Designer",
    description:
      "Explore Rabia Kalar's portfolio of brand identities, logo designs, social media graphics, and visual storytelling for businesses and brands.",
    type: "website",
    url: "https://storycup.vercel.app/",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rabia Kalar Graphic Design Portfolio",
      },
    ],
    siteName: "Rabia Kalar Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rabia Kalar - Creative Graphic Designer",
    description:
      "Explore Rabia Kalar's portfolio of brand identities, logo designs, and visual communication.",
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
}

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
