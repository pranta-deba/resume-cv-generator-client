import { FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FileText className="h-6 w-6 text-blue-400" />
            <span className="ml-2 text-xl font-bold">ResumeBuilder</span>
          </div>
          <div className="text-gray-400">
            © 2024 ResumeBuilder. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
