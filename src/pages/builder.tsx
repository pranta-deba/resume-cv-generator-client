import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Builder = () => {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get("template");
  const resumeId = searchParams.get("id");
  const [activeTab, setActiveTab] = useState("personal");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      summary: "",
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
  });

  console.log("Template ID:", templateId);
  console.log("Resume ID:", resumeId);

  
  return <div>builders</div>;
};

export default Builder;
