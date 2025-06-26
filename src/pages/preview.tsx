import type { ResumeData } from "@/types";
import { useState } from "react";
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
  return <div></div>;
};

export default Preview;
