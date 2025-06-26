import ClassicTemplate from "@/components/templetes/classicTemplate";
import CreativeTemplate from "@/components/templetes/creativetemplate";
import MinimalTemplate from "@/components/templetes/minimalTemplate";
import ModernTemplate from "@/components/templetes/modernTemplate";
import { Button } from "@/components/ui/button";
import type { ResumeData } from "@/types";
import { ArrowLeft, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Preview = () => {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get("template");
  const resumeId = searchParams.get("id");

  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [template, setTemplate] = useState("modern");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading resume preview...</p>
        </div>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            No Resume Data Found
          </h2>
          <p className="text-gray-600 mb-4">
            Please go back and create or select a resume to preview.
          </p>
          <Button onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen bg-gray-100"></div>;
};

export default Preview;
