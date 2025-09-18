interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "todo",
    name: "Todo App",
    description: "A simple todo app built with React and TypeScript.",
    link: "todo",
    imageUrl: "/images/projects/todo.png",
    techStack: ["React", "TypeScript", "CSS"],
  },
];

export const featuredProjects: Project[] = [
  {
    id: "todo",
    name: "Todo App",
    description: "A simple todo app built with React and TypeScript.",
    link: "todo",
    imageUrl: "/images/projects/todo.png",
    techStack: ["React", "TypeScript", "CSS"],
  },
];
