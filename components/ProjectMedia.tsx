"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"

type ProjectMediaProps = {
  video?: string
  image?: string
  title: string
  featured: boolean
}

export default function ProjectMedia({ video, image, title, featured }: ProjectMediaProps) {
  return (
    <div className="relative h-48 bg-black overflow-hidden">
      {video ? (
        <video
          src={video}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}
      {featured && (
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          Featured
        </Badge>
      )}
    </div>
  )
}
