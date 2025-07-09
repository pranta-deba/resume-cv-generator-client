import PageHeader from "@/components/others/page-header";
import TemplatesGrid from "@/components/others/templates-grid";

const Templates = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader />
        <TemplatesGrid />
      </div>
    </div>
  );
};

export default Templates;
