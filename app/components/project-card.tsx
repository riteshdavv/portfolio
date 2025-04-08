import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  weblink: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, weblink, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-gray-100/30 hover:border-gray-50">
      <div className="-translate-y-3 scale-115 w-full h-[200px]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-t-lg transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-x-4 p-4 pt-0">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
        <Link href={weblink} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Globe className="h-4 w-4"/>
          Visit the Site
        </Link>
      </CardFooter>
    </Card>
  )
}

