export const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description:
      "Clean and contemporary design perfect for tech and creative industries",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Professional",
  },
  {
    id: "classic",
    name: "Classic Traditional",
    description:
      "Timeless design suitable for traditional industries and formal positions",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Traditional",
  },
  {
    id: "creative",
    name: "Creative Designer",
    description:
      "Bold and artistic layout for designers and creative professionals",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Creative",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Simple and elegant design that focuses on content",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Minimal",
  },
  {
    id: "executive",
    name: "Executive Premium",
    description:
      "Sophisticated design for senior-level positions and executives",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Executive",
  },
  {
    id: "academic",
    name: "Academic Scholar",
    description: "Formal layout perfect for academic and research positions",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Academic",
  },
  {
    id: "startup",
    name: "Startup Dynamic",
    description:
      "Modern and energetic design for startup and entrepreneurial roles",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Modern",
  },
  {
    id: "technical",
    name: "Technical Expert",
    description:
      "Structured layout ideal for engineering and technical positions",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Technical",
  },
  {
    id: "sales",
    name: "Sales Professional",
    description:
      "Results-focused design for sales and business development roles",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Business",
  },
  {
    id: "healthcare",
    name: "Healthcare Professional",
    description:
      "Clean and trustworthy design for medical and healthcare professionals",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Healthcare",
  },
];

export const dummyData = {
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-123-456-7890",
    location: "San Francisco, CA, USA",
    website: "https://johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    summary:
      "A highly motivated full-stack developer with 5+ years of experience building scalable web applications using React, Node.js, and MongoDB.",
  },
  experience: [
    {
      id: "exp1",
      company: "TechCorp Inc.",
      position: "Senior Software Engineer",
      startDate: "2021-03",
      endDate: "Present",
      current: true,
      description:
        "Leading a team of developers to build scalable microservices and modern UI components for SaaS products.",
    },
    {
      id: "exp2",
      company: "WebSolutions Ltd.",
      position: "Frontend Developer",
      startDate: "2018-06",
      endDate: "2021-02",
      current: false,
      description:
        "Worked on several eCommerce platforms using React, Redux, and Tailwind CSS.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2014-08",
      endDate: "2018-05",
      gpa: "3.85",
    },
  ],
  skills: [
    {
      id: "skill1",
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      id: "skill2",
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      id: "skill3",
      category: "Tools & DevOps",
      items: ["Docker", "Git", "Jest", "AWS"],
    },
  ],
  projects: [
    {
      id: "proj1",
      name: "Portfolio Website",
      description: "A modern portfolio site to showcase my projects and blogs.",
      technologies: "React, Tailwind CSS, Netlify",
      link: "https://johndoe.dev",
    },
    {
      id: "proj2",
      name: "E-Commerce Backend",
      description:
        "A RESTful API backend for an e-commerce platform supporting products, users, and payments.",
      technologies: "Node.js, Express, MongoDB, JWT",
      link: "https://github.com/johndoe/ecommerce-api",
    },
  ],
};
