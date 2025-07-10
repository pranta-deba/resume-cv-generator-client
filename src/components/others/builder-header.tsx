import { Download, Eye, FileText, Save } from "lucide-react";
import { Button } from "../ui/button";

interface BuilderHeaderProps {
  handleSave: () => void;
}

const BuilderHeader = ({ handleSave }: BuilderHeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              Resume Builder
            </span>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BuilderHeader;
