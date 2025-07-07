import { Card } from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFile, FaFolder, FaFolderOpen, FaGithub, FaGlobe, FaLink } from "react-icons/fa";

const experiences = [
  {
    title: "Google Summer of Code 2025 Contributor",
    company: "Drupal Association",
    location: "Remote",
    period: "May 2025 - Present",
    description:
      "This project aims to develop a robust, secure, and extensible Drupal module that integrates with Appwrite, an open-source backend-as-a-service (BaaS). The module will enable seamless support for Appwrite’s authentication, file storage, and database APIs within Drupal’s architecture.",
    image: "/gsoc.png",
    bulletPoints: [
      "Enabled seamless login for over 100 users by implementing secure OAuth 2.0 authentication between Appwrite and Drupal, integrating GitHub and Google flows to simplify cross-platform onboarding.",
      "Improved media management efficiency by 40% by integrating Appwrite’s storage bucket API with Drupal’s media system, allowing real-time upload, retrieval, and scoped access control of user-generated files.",
      "Reduced data retrieval latency by 50% by connecting Appwrite’s document database with Drupal, enabling efficient storage and querying of structured content and improving developer productivity.",
    ],
    technologies: [
      "PHP",
      "Symfony",
      "OAuth",
      "Drupal API",
      "Appwrite Server SDK",
      "RESTful integration with Appwrite",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-8 md:py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development building innovative
            solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-400 hidden md:block"></div>

            <div className="">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gray-400 rounded-full hidden md:block"></div>

                  <Card className="border border-gray-200 hover:border-gray-300 dark:border dark:border-gray-600 dark:hover:border-gray-400 transition-all duration-300 md:ml-16 bg-transparent overflow-hidden shadow-lg shadow-gray-600/25 hover:shadow-xl">
                    {/* Image Section */}
                    <div className="relative aspect-[5/2] -translate-y-6 bg-white rounded-t-lg border-b-2 border-b-gray-200/80">
                      <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={exp.title}
                        fill
                        className="object-cover scale-80 hover:scale-84 transition-transform ease-in-out"
                      />
                    </div>
                    {/* Content Section */}
                    <div className="px-8 -translate-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-gray-400 font-medium mb-4">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end text-sm text-gray-400 space-y-1">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <p className="text-gray-700 dark:text-gray-400">
                          {exp.description}
                        </p>
                      </div>
                      {/* Bullet Points */}
                      <ul className="space-y-2 mb-6 md:ml-4">
                        {exp.bulletPoints.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2 text-gray-500"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs ring-1 ring-inset tracking-wide ring-gray-500/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 mx-8">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="https://github.com/riteshdavv/drupal-appwrite"
                          target="_blank"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            className="w-full flex justify-center items-center gap-2"
                          >
                            View on GitHub
                            <FaGithub className="scale-115" />
                          </Button>
                        </Link>

                        <Link
                          href="https://summerofcode.withgoogle.com/programs/2025/projects/5QrB2MPf"
                          target="_blank"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            className="w-full flex justify-center items-center gap-2"
                          >
                            Visit the Site
                            <FaGlobe className="w-4" />
                          </Button>
                        </Link>
                      </div>

                      <Link
                        href="https://docs.google.com/document/d/1M8hOkZW0Zd3uu_ptFqM1yN_fEYuN0x2Mch_EDNQ4Ims/edit?usp=sharing"
                        target="_blank"
                      >
                        <Button
                          variant="outline"
                          className="w-full flex justify-center items-center gap-2"
                        >
                          View the Module
                          <FaFolder className="scale-105" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
