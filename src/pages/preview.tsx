import ClassicTemplate from "@/components/templetes/classicTemplate";
import CreativeTemplate from "@/components/templetes/creativetemplate";
import MinimalTemplate from "@/components/templetes/minimalTemplate";
import ModernTemplate from "@/components/templetes/modernTemplate";
import type { ResumeData } from "@/types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Preview = () => {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get("template");
  const resumeId = searchParams.get("id");

  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [template, setTemplate] = useState("modern");
  const [loading, setLoading] = useState(true);

  console.log("Template ID:", templateId);
  console.log("Resume ID:", resumeId);

  useEffect(() => {
    if (templateId) {
      setTemplate(templateId);
    }

    setLoading(false);
  }, [templateId]);

  const renderTemplate = () => {
    if (!resumeData) return null;

    switch (template) {
      case "modern":
        return <ModernTemplate data={resumeData} />;
      case "classic":
        return <ClassicTemplate data={resumeData} />;
      case "creative":
        return <CreativeTemplate data={resumeData} />;
      case "minimal":
        return <MinimalTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return <div></div>;
};

export default Preview;
