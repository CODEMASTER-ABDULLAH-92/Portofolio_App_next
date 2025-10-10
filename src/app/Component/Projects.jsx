
import React from "react";

const Projects = () => {
  
  const projects = [
    {
      title: "Hire Mate",
      description:
        "A full-stack job portal where recruiters can post jobs and candidates can apply. Features include role-based dashboards, filters, and scalable backend. Built with modern technologies and responsive UI.",
      demoUrl: "https://hiremateapp92.netlify.app/",
      codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/HireMate",
      technologies: [
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Express",
        "JWT Auth",
        "Vite",
        "GSAP",
        "React.js",
        "Figma",
      ],
      accentColor: "#10B981",
      icon: "💼",
      type: "Full-Stack",
    },
    {
      title: "TrooSolar",
      description:
        "A solar panel dashboard application where users can explore, purchase, and monitor electronic devices. Designed for both desktop and mobile, with a clean interface and intuitive features.",
      demoUrl: "https://troo-solar-1mif.vercel.app/",
      codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/TrooSolar",
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express",
        "Chart.js",
        "Figma",
      ],
      accentColor: "#F59E0B",
      icon: "☀️",
      type: "Frontend",
    },
    {
      title: "My Blog App",
      description:
        "A blogging platform where users can create, post, and manage blogs with ease. Built with Next.js, offering a responsive design, dynamic routing, and smooth developer experience.",
      demoUrl: "https://myblognextapp92.netlify.app/",
      codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/Full-Stack-Blog-App",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express",
        "Markdown",
        "Figma",
      ],
      accentColor: "#EF4444",
      icon: "📝",
      type: "Full-Stack",
    },
    {
      title: "CodeCraft Portfolio",
      description:
        "A modern developer portfolio showcasing my skills, projects, and professional journey. Built with performance and aesthetics in mind, featuring smooth animations and responsive design.",
      demoUrl: "https://waseemva.netlify.app/",
      codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/client_portfolio",
      technologies: [
        "React.js",
        "GSAP",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express",
        "Figma",
        "Vite",
      ],
      accentColor: "#8B5CF6",
      icon: "🎨",
      type: "Frontend",
    },
    {
      title: "Code365",
      description:
        "An aesthetic learning platform for mastering Data Structures, Algorithms, and core programming languages using interactive 3D models and modern UI.",
      demoUrl: "https://hire-mate-87dg.vercel.app/hireMate-academy-code365",
      codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/mesh-dev",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Express",
        "GSAP",
        "Vite",
        "JavaScript",
      ],
      accentColor: "#10B981",
      icon: "📚",
      type: "Frontend",
    },
  ];
  return (
    <div
      id="project"
      className=" transition-colors duration-300 py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                My Projects
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Showcase of my technical prowess through{" "}
            <span className="font-medium text-blue-500 dark:text-blue-400">innovative solutions</span>{" "}
            and{" "}
            <span className="font-medium text-purple-500 dark:text-purple-400">beautiful designs</span>
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-400/20 dark:hover:shadow-blue-900/30"
              style={{
                boxShadow: `0 10px 30px -10px ${project.accentColor}40`,
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor}80 100%)`,
                }}
              ></div>

              <div className="relative h-full rounded-2xl p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                {/* Icon + Title */}
                <div className="flex items-center mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mr-4"
                    style={{
                      background: `${project.accentColor}20`,
                      color: project.accentColor,
                    }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        style={{
                          textDecorationColor: project.accentColor,
                        }}
                      >
                        {project.title} | {project.type}
                      </a>
                    </h3>
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                      On Development Mode
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600/50 hover:scale-105 transition-all"
                      style={{
                        ...(i === 0 && {
                          background: `${project.accentColor}20`,
                          color: project.accentColor,
                          borderColor: `${project.accentColor}30`,
                        }),
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 text-center text-white shadow-lg hover:shadow-blue-400/30"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor}80 100%)`,
                    }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 text-center bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-600/50 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer GitHub CTA */}
        <div className="text-center mt-20">
          <p className="text-lg opacity-80 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/CODEMASTER-ABDULLAH-92"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Explore My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;