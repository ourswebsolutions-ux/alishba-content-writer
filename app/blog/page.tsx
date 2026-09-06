"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import {
  Calendar,
  Clock,
  Search,
  ArrowRight,
  X,
} from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title:
      "Summative, Quality Improvement Project Improving Patient Safety and Service Efficiency in an NHS Acute Hospital Trust (1)",
    excerpt:
      "A comprehensive academic project examining quality improvement strategies, patient safety, service efficiency, and opportunities for improving healthcare delivery within an NHS acute hospital trust.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    category: "Academic Writing",
    date: "Academic Work",
    readTime: "12 min read",
    liveUrl:
      "https://drive.google.com/drive/folders/10Gef-39zypHbGdpDI4Lst4ftqHIOpfWT",
    featured: true,
    client: "Academic Project",
  },

  {
    id: 2,
    title: "Strategic Financial Ratio Analysis of ASOS Plc",
    excerpt:
      "A detailed academic financial analysis evaluating key financial ratios, business performance, financial position, and strategic considerations of ASOS Plc.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    category: "Academic Writing",
    date: "Academic Work",
    readTime: "10 min read",
    liveUrl:
      "https://drive.google.com/drive/folders/10Gef-39zypHbGdpDI4Lst4ftqHIOpfWT",
    featured: true,
    client: "Academic Project",
  },

  {
    id: 3,
    title:
      "Kegel Exercises vs Jelqing Which Is Safe and Which Actually Works",
    excerpt:
      "A research-based article comparing Kegel exercises and jelqing, presenting information about their intended purposes, effectiveness, and important safety considerations.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    category: "Research & Article Writing",
    date: "Published Work",
    readTime: "8 min read",
    liveUrl:
      "https://drive.google.com/drive/folders/10Gef-39zypHbGdpDI4Lst4ftqHIOpfWT",
    featured: true,
    client: "Academic Writing Project",
  },

  {
    id: 4,
    title: "The Most Popular Diamond Jewellery Among UAE Luxury Buyers",
    excerpt:
      "An informative jewellery article exploring the most popular diamond jewellery choices among UAE luxury buyers, highlighting elegant styles, buying preferences, and timeless designs.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    category: "Jewellery & Lifestyle Writing",
    date: "Published Work",
    readTime: "8 min read",
    liveUrl:
      "https://docs.google.com/document/d/12ZtfbluO16Tmj5hEY7VJSEAaW8v_YTPl-fhAxw82TJA/edit?tab=t.0#heading=h.y93sd6g5ro87",
    featured: true,
    client: "Kashesh Global",
  },

  {
    id: 5,
    title: "Gold Diamond Bracelets: Timeless Elegance for Every Occasion",
    excerpt:
      "A polished jewellery article exploring gold diamond bracelets, their timeless appeal, styling possibilities, and why they remain an elegant choice for every occasion.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
    category: "Jewellery & Lifestyle Writing",
    date: "Published Work",
    readTime: "7 min read",
    liveUrl:
      "https://docs.google.com/document/d/1KnjNgY0aZ4KXhpsISdkXqNT9n7Ycu0yoYmuMxFvsmGg/edit?tab=t.0#heading=h.lho68ithun8k",
    featured: true,
    client: "Kashesh Global",
  },

  {
    id: 6,
    title: "The Role of Certification in Purchasing a Diamond Ring",
    excerpt:
      "A detailed guide explaining the importance of diamond certification when purchasing a ring, helping buyers understand quality, authenticity, grading, and informed jewellery decisions.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
    category: "Jewellery & Buying Guide",
    date: "Published Work",
    readTime: "8 min read",
    liveUrl:
      "https://docs.google.com/document/d/1GD52BYEmhNcu8vchga2kn7lr8Hv3WPEA3afK49uyrVA/edit?tab=t.0#heading=h.ruho2om9izhe",
    featured: true,
    client: "Kashesh Global",
  },

  {
    id: 7,
    title: "5 Wedding Fashion Trends in 2025 You Should Not Overlook",
    excerpt:
      "A trend-focused fashion article highlighting five important wedding fashion trends for 2025, covering stylish ideas and contemporary choices for memorable wedding celebrations.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    category: "Fashion & Lifestyle Writing",
    date: "Published Work",
    readTime: "7 min read",
    liveUrl:
      "https://docs.google.com/document/d/10HPx-jqwpRkDtwZ_nmIrTNOC__X8lVIKDRkucMk33QU/edit?tab=t.0",
    featured: true,
    client: "Kashesh Global",
  },
]

const categories = [
  "All",
  "Academic Writing",
  "Research & Article Writing",
  "Jewellery & Lifestyle Writing",
  "Jewellery & Buying Guide",
  "Fashion & Lifestyle Writing",
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category === activeCategory

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.client.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const featuredPosts = filteredPosts.filter(
    (post) => post.featured
  )

  const recentPosts = filteredPosts.filter(
    (post) => !post.featured
  )

  const clearFilters = () => {
    setActiveCategory("All")
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              Content Writing Portfolio
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Published Work &{" "}
              <span className="text-primary">
                Content Portfolio
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Explore selected SEO content, website copy, blog
              writing, cybersecurity content, AI articles, home
              service content, and content management projects
              published across live client websites.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              I also work with Google Search Console (GSC), GA4,
              and analytics reporting to monitor content performance
              and drive data-informed improvements.
            </p>
          </div>
        </section>

        {/* Search + Categories */}
        <section className="container mx-auto px-4 pb-12">
          <div className="rounded-2xl border bg-card p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Search articles, niches, clients..."
                  className="h-11 pl-10 pr-10"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Category Tabs */}
              <div className="flex w-full gap-2 overflow-x-auto pb-1 lg:w-auto lg:flex-wrap lg:justify-end">
                {categories.map((category) => {
                  const active = activeCategory === category

                  return (
                    <Button
                      key={category}
                      type="button"
                      size="sm"
                      variant={active ? "default" : "outline"}
                      onClick={() =>
                        setActiveCategory(category)
                      }
                      className="shrink-0 whitespace-nowrap"
                    >
                      {category}
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Active filters */}
            {(activeCategory !== "All" || searchQuery) && (
              <div className="mt-5 flex flex-wrap items-center gap-2 border-t pt-4">
                <span className="text-sm text-muted-foreground">
                  Showing:
                </span>

                {activeCategory !== "All" && (
                  <Badge variant="secondary">
                    {activeCategory}
                  </Badge>
                )}

                {searchQuery && (
                  <Badge variant="secondary">
                    Search: &quot;{searchQuery}&quot;
                  </Badge>
                )}

                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="ml-1"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Results */}
        {filteredPosts.length === 0 ? (
          <section className="container mx-auto px-4 pb-20">
            <div className="rounded-2xl border border-dashed p-12 text-center">
              <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

              <h2 className="text-2xl font-semibold">
                No articles found
              </h2>

              <p className="mt-2 text-muted-foreground">
                Try another search term or select a different
                category.
              </p>

              <Button
                type="button"
                onClick={clearFilters}
                className="mt-5"
              >
                View All Articles
              </Button>
            </div>
          </section>
        ) : (
          <>
            {/* Featured */}
            {featuredPosts.length > 0 && (
              <section className="container mx-auto px-4 pb-16">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-primary">
                      SELECTED WORK
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight">
                      Featured Articles
                    </h2>
                  </div>

                  <span className="hidden text-sm text-muted-foreground sm:block">
                    {featuredPosts.length} featured{" "}
                    {featuredPosts.length === 1
                      ? "article"
                      : "articles"}
                  </span>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  {featuredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <a
                        href={post.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read ${post.title}`}
                      >
                        <div className="relative h-56 overflow-hidden sm:h-64">
                          <Image
                            src={post.image}
                            alt={`${post.title} - ${post.client}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            unoptimized
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                          <Badge className="absolute left-4 top-4">
                            Featured
                          </Badge>
                        </div>
                      </a>

                      <CardHeader>
                        <div className="mb-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="secondary">
                            {post.category}
                          </Badge>

                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </div>

                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </div>
                        </div>

                        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-primary">
                          {post.client}
                        </p>

                        <CardTitle className="text-xl leading-snug transition-colors group-hover:text-primary sm:text-2xl">
                          <a
                            href={post.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.title}
                          </a>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="mb-5 leading-7 text-muted-foreground">
                          {post.excerpt}
                        </p>

                        <Button
                          variant="ghost"
                          className="group/btn h-auto p-0"
                          asChild
                        >
                          <a
                            href={post.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Recent */}
            {recentPosts.length > 0 && (
              <section className="container mx-auto px-4 pb-20">
                <div className="mb-8">
                  <p className="mb-2 text-sm font-medium text-primary">
                    MORE PUBLISHED WORK
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight">
                    Recent Articles
                  </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {recentPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <a
                        href={post.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read ${post.title}`}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={`${post.title} - ${post.client}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            unoptimized
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </a>

                      <CardHeader>
                        <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <Badge variant="secondary">
                            {post.category}
                          </Badge>

                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </div>
                        </div>

                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
                          {post.client}
                        </p>

                        <CardTitle className="text-lg leading-snug transition-colors group-hover:text-primary">
                          <a
                            href={post.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.title}
                          </a>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="mb-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="group/btn"
                            asChild
                          >
                            <a
                              href={post.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}