import type { TemplateProps } from "@/types";

const ModernTemplate = ({ data }: TemplateProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return <div></div>;
};

export default ModernTemplate;
