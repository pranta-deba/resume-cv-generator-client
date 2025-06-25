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

export const dummyDataTechnical = {
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
export const dummyDataAcademic = {
  personalInfo: {
    fullName: "Dr. Ethan Brown",
    email: "ethan.brown@example.com",
    phone: "+1-444-555-6666",
    location: "Chicago, IL",
    website: "",
    linkedin: "https://linkedin.com/in/drbrown",
    summary:
      "Physics researcher with focus on quantum computing and academic publications.",
  },
  experience: [],
  education: [
    {
      id: "edu1",
      institution: "University of Chicago",
      degree: "PhD",
      field: "Theoretical Physics",
      startDate: "2012-09",
      endDate: "2018-06",
      gpa: "4.0",
    },
  ],
  skills: [
    {
      id: "s1",
      category: "Research",
      items: ["Quantum Mechanics", "Mathematica", "LaTeX"],
    },
    {
      id: "s2",
      category: "Teaching",
      items: ["Curriculum Design", "Lecture Delivery"],
    },
  ],
  projects: [],
};
export const dummyDataClassic = {
  personalInfo: {
    fullName: "Robert Johnson",
    email: "robert.johnson@example.com",
    phone: "+1-222-333-4444",
    location: "Boston, MA, USA",
    website: "",
    linkedin: "https://linkedin.com/in/robertjohnson",
    summary:
      "Experienced accountant with over a decade in traditional corporate finance roles.",
  },
  experience: [
    {
      id: "exp1",
      company: "Finance Corp",
      position: "Senior Accountant",
      startDate: "2010-04",
      endDate: "2022-10",
      current: false,
      description:
        "Managed budgets, audits, and financial reporting for enterprise clients.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Harvard University",
      degree: "MBA",
      field: "Accounting",
      startDate: "2005-09",
      endDate: "2009-06",
      gpa: "3.7",
    },
  ],
  skills: [
    {
      id: "s1",
      category: "Finance",
      items: ["QuickBooks", "Tax Reporting", "Auditing"],
    },
    { id: "s2", category: "Tools", items: ["Excel", "Oracle Financials"] },
  ],
  projects: [],
};
export const dummyDataCreative = {
  personalInfo: {
    fullName: "Luna Rivera",
    email: "luna.rivera@example.com",
    phone: "+1-777-888-9999",
    location: "Los Angeles, CA",
    website: "https://lunarivera.art",
    linkedin: "https://linkedin.com/in/lunarivera",
    summary:
      "Creative UI/UX designer with a love for aesthetics, interaction design, and branding.",
  },
  experience: [
    {
      id: "exp1",
      company: "CreativeHouse",
      position: "UI Designer",
      startDate: "2019-07",
      endDate: "Present",
      current: true,
      description:
        "Designed mobile-first interfaces for e-commerce and portfolio websites.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Parsons School of Design",
      degree: "BFA",
      field: "Visual Design",
      startDate: "2014-09",
      endDate: "2018-05",
      gpa: "3.6",
    },
  ],
  skills: [
    {
      id: "s1",
      category: "Design",
      items: ["Figma", "Sketch", "Photoshop", "Illustrator"],
    },
    { id: "s2", category: "Frontend", items: ["HTML", "CSS", "GSAP"] },
  ],
  projects: [
    {
      id: "proj1",
      name: "Dribbble Shots",
      description: "Collection of micro-interaction designs",
      technologies: "Figma, Framer",
      link: "https://dribbble.com/lunarivera",
    },
  ],
};
export const dummyDataExecutive = {
  personalInfo: {
    fullName: "Margaret Lee",
    email: "margaret.lee@example.com",
    phone: "+1-111-222-3333",
    location: "Seattle, WA",
    website: "",
    linkedin: "https://linkedin.com/in/margaretlee",
    summary:
      "Seasoned executive with 15+ years of experience leading product strategy in tech.",
  },
  experience: [
    {
      id: "exp1",
      company: "BigTech Ltd.",
      position: "VP of Product",
      startDate: "2015-01",
      endDate: "Present",
      current: true,
      description:
        "Spearheaded product roadmap and led cross-functional teams across global markets.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Stanford University",
      degree: "MBA",
      field: "Business Administration",
      startDate: "2006-09",
      endDate: "2008-06",
      gpa: "3.9",
    },
  ],
  skills: [
    {
      id: "s1",
      category: "Leadership",
      items: ["Product Strategy", "Team Management", "OKRs"],
    },
    { id: "s2", category: "Tools", items: ["JIRA", "Notion", "Asana"] },
  ],
  projects: [],
};
export const dummyDataMinimal = {
  personalInfo: {
    fullName: "Daniel Kim",
    email: "daniel.kim@example.com",
    phone: "+1-555-000-1234",
    location: "Austin, TX",
    website: "",
    linkedin: "",
    summary:
      "Software engineer who values simplicity, clean code, and focused design.",
  },
  experience: [],
  education: [
    {
      id: "edu1",
      institution: "UT Austin",
      degree: "BSc",
      field: "Software Engineering",
      startDate: "2016-01",
      endDate: "2020-01",
      gpa: "3.8",
    },
  ],
  skills: [
    { id: "s1", category: "Languages", items: ["Go", "Rust", "Python"] },
    { id: "s2", category: "Tools", items: ["Git", "Docker", "VSCode"] },
  ],
  projects: [],
};
export const dummyDataModern = {
  personalInfo: {
    fullName: "Sophia Williams",
    email: "sophia.williams@example.com",
    phone: "+1-987-654-3210",
    location: "New York, NY, USA",
    website: "https://sophiaw.dev",
    linkedin: "https://linkedin.com/in/sophiawilliams",
    summary:
      "Full-stack developer with expertise in modern JavaScript frameworks and cloud-native architecture.",
  },
  experience: [
    {
      id: "exp1",
      company: "ModernTech Inc.",
      position: "Lead Developer",
      startDate: "2020-01",
      endDate: "Present",
      current: true,
      description:
        "Driving modern React and Node.js projects with scalable architecture and CI/CD pipelines.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "MIT",
      degree: "BSc",
      field: "Computer Science",
      startDate: "2015-08",
      endDate: "2019-05",
      gpa: "3.9",
    },
  ],
  skills: [
    {
      id: "s1",
      category: "Frontend",
      items: ["React", "Redux", "Tailwind CSS"],
    },
    { id: "s2", category: "Backend", items: ["Node.js", "Express"] },
  ],
  projects: [
    {
      id: "proj1",
      name: "Modern Dashboard",
      description: "An analytics dashboard for enterprise reporting.",
      technologies: "React, Chart.js, Node.js",
      link: "https://github.com/sophiawilliams/dashboard",
    },
  ],
};
export const dummyDataSales = {
  personalInfo: {
    fullName: "Emily Clark",
    email: "emily.clark@example.com",
    phone: "+1-213-456-7890",
    location: "Atlanta, GA",
    website: "",
    linkedin: "https://linkedin.com/in/emilyclark",
    summary:
      "Business development executive skilled in closing enterprise B2B deals.",
  },
  experience: [],
  education: [],
  skills: [
    {
      id: "s1",
      category: "Sales",
      items: ["CRM", "Cold Outreach", "Negotiation"],
    },
  ],
  projects: [],
};
export const dummyDataStartup = {
  personalInfo: {
    fullName: "Ava Nguyen",
    email: "ava.nguyen@example.com",
    phone: "+1-666-777-8888",
    location: "San Jose, CA, USA",
    website: "https://avastartup.dev",
    linkedin: "https://linkedin.com/in/avanguyen",
    summary:
      "Startup-focused full-stack developer with 4+ years of experience rapidly building and scaling MVPs. Passionate about innovation, lean development, and solving real-world problems through code.",
  },
  experience: [
    {
      id: "exp1",
      company: "RocketStart Labs",
      position: "Full-Stack Engineer",
      startDate: "2022-05",
      endDate: "Present",
      current: true,
      description:
        "Developed MVPs for early-stage startups using Next.js, Firebase, and Tailwind CSS. Led architecture planning and implementation, including authentication, payments, and dashboards.",
    },
    {
      id: "exp2",
      company: "QuickLaunch Studio",
      position: "Frontend Developer",
      startDate: "2020-01",
      endDate: "2022-04",
      current: false,
      description:
        "Built reusable UI components for a SaaS design system. Focused on responsive design, performance optimization, and accessibility.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2015-08",
      endDate: "2019-05",
      gpa: "3.75",
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
      items: ["Node.js", "Firebase", "Prisma", "MongoDB"],
    },
    {
      id: "skill3",
      category: "Startup Tools",
      items: ["Stripe", "Vercel", "Supabase", "Zustand"],
    },
  ],
  projects: [
    {
      id: "proj1",
      name: "PitchPad",
      description:
        "A tool that helps founders create stunning pitch decks using templates and AI suggestions.",
      technologies: "Next.js, Firebase Auth, OpenAI API, Tailwind CSS",
      link: "https://pitchpad.app",
    },
    {
      id: "proj2",
      name: "MVP Sprint Boilerplate",
      description:
        "A boilerplate for startup MVPs with built-in auth, payments, and dashboard components.",
      technologies: "Next.js, Stripe, Prisma, MongoDB",
      link: "https://github.com/avanguyen/mvp-sprint",
    },
  ],
};
export const dummyDataHealthcare = {
  personalInfo: {
    fullName: "Dr. Nina Shah",
    email: "nina.shah@example.com",
    phone: "+1-101-202-3030",
    location: "Houston, TX",
    website: "",
    linkedin: "",
    summary:
      "Board-certified physician with 10+ years of experience in internal medicine.",
  },
  experience: [],
  education: [],
  skills: [
    {
      id: "s1",
      category: "Clinical",
      items: ["Diagnosis", "Patient Care", "EMR"],
    },
  ],
  projects: [],
};
