import ProjectCard from "./project-card";

const projects = [
  {
    title: "Elysium | AI Reality Time Logger",
    description:
      "An AI-powered productivity tracker that logs keystrokes, app usage, and time spent; then compares it against your daily goals to generate behavioral insights.",
    image: "/elysium.jpg",
    link: "https://github.com/riteshdavv/elysium",
    weblink: "https://riteshsingh.vercel.app/elysium",
    tags: [
      "Rust",
      "Tauri",
      "Python",
      "SQLite",
      "TypeScript",
      "Llama",
      "OS Level APIs",
    ],
  },
  {
    title: "Cerebral | AI Automation Assistant",
    description:
      "An AI assistant that automates multi-app workspace setup, intelligently detects developer intent, identifies productivity barriers and organizes workflows based on user needs.",
    image: "/cerebral.jpg",
    link: "https://github.com/riteshdavv/cerebral",
    weblink: "https://riteshsingh.vercel.app/cerebral",
    tags: [
      "Rust",
      "Tauri",
      "Python",
      "SQLite",
      "TypeScript",
      "Llama",
      "OS Level APIs",
    ],
  },
  {
    title: "BuggedIRL",
    description:
      "An AI-powered bug-to-meme generator that turns frustrating errors into shareable comic relief.",
    image: "/buggedirl.jpg",
    link: "https://github.com/riteshdavv/buggedirl",
    weblink: "https://bugged-irl.vercel.app",
    tags: ["Next.js", "HuggingFace API", "Meme Generation API (ImgFlip)"],
  },
];

export default function ProjectSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj, index) => (
        <ProjectCard
          key={index}
          title={proj.title}
          description={proj.description}
          image={proj.image}
          link={proj.link}
          weblink={proj.weblink}
          tags={proj.tags}
        />
      ))}
    </div>
  );
}
