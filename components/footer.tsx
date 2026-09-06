import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Github, Linkedin, Mail, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
  <img
    src="/logo.png"
    alt="Rabia Kalar Logo"
    className="h-auto w-[150px] max-w-full object-contain sm:w-[200px] md:w-[220px] lg:w-[240px]"
  />
</div>
            <p className="text-muted-foreground">Crafted with strategy by your dedicated SEO Content Strategist & Copywriter</p>

            <div className="flex space-x-2">
              {/* <Button size="icon" variant="ghost" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button> */}
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.linkedin.com" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://rabiakb4545.wixsite.com/rabia-kalar" target="_blank">
                  <Youtube className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="mailto:rabiakb4545@gmail.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-blue">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-blue">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-blue">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">SEO Content Strategy</span>
              </li>
              <li>
                <span className="text-muted-foreground">Website Copywriting</span>
              </li>
              <li>
                <span className="text-muted-foreground">Blog Writing & Landing Pages</span>
              </li>
              <li>
                <span className="text-muted-foreground">Email Marketing Campaigns</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">rabiakb4545@gmail.com</span>
              </li>
              <li>
                <span className="text-muted-foreground">+92 3142013682</span>
              </li>
              <li>
                <span className="text-muted-foreground">Karachi, Sindh, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rabia Kalar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}