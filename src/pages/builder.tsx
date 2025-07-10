import { useSearchParams } from "react-router-dom";

const Builder = () => {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get("template");
  const resumeId = searchParams.get("id");

  console.log("Template ID:", templateId);
  console.log("Resume ID:", resumeId);
  return <div>builders</div>;
};

export default Builder;
