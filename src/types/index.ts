export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa: string;
  }>;
  skills: Array<{
    id: string;
    category: string;
    items: string[];
  }>;
  projects: Array<{
    id: string;
    name: string;
    description: string;
    technologies: string;
    link: string;
  }>;
}
export interface TemplateProps {
  data: ResumeData;
}

export interface BuilderHeaderProps {
  handleSave: () => void;
}

export interface User {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  lastSignInTime?: string;
}

export interface UserState {
  user: User | null;
}
