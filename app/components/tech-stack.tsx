import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 transition-transform ease-in-out shadow-lg dark:shadow-gray-600/25 hover:shadow-xl hover:border-gray-50">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill} 
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-gray-500/10"
                >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}