import AcademicTemplate from "@/components/templates/academicTemplate";
import ClassicTemplate from "@/components/templates/classicTemplate";
import CreativeTemplate from "@/components/templates/creativeTemplate";
import ExecutiveTemplate from "@/components/templates/executiveTemplate";
import HealthcareTemplate from "@/components/templates/healthcareTemplate";
import MinimalTemplate from "@/components/templates/minimalTemplate";
import ModernTemplate from "@/components/templates/modernTemplate";
import SalesTemplate from "@/components/templates/salesTemplate";
import StartupTemplate from "@/components/templates/startupTemplate";
import TechnicalTemplate from "@/components/templates/technicalTemplate";
import { Button } from "@/components/ui/button";
import { dummyDataSales } from "@/constants";
import type { ResumeData } from "@/types";
import { ArrowLeft, Download, Edit, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useReactToPrint } from "react-to-print";

const Preview = () => {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get("template");
  const resumeId = searchParams.get("id");
  const resumeRef = useRef<HTMLDivElement>(null);
  const [resumeData, setResumeData] = useState<ResumeData | null>(
    dummyDataSales
  );
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

  const handleDownloadPDF = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${resumeData?.personalInfo.fullName || "Resume"}.pdf`,
  });

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
      case "executive":
        return <ExecutiveTemplate data={resumeData} />;
      case "academic":
        return <AcademicTemplate data={resumeData} />;
      case "startup":
        return <StartupTemplate data={resumeData} />;
      case "technical":
        return <TechnicalTemplate data={resumeData} />;
      case "sales":
        return <SalesTemplate data={resumeData} />;
      case "healthcare":
        return <HealthcareTemplate data={resumeData} />;
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

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <Button variant="outline" onClick={() => navigate("/builder")}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Resume
              </Button>
              <Button onClick={handleDownloadPDF}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Preview Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div ref={resumeRef} className="resume-content">
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
