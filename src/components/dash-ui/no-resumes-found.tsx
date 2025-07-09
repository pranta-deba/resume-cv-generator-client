import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";

const NoResumesFound = () => {
  return (
    <Card>
      <CardContent className="text-center py-12">
        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No resumes yet
        </h3>
        <p className="text-gray-600 mb-4">
          Create your first resume to get started
        </p>
        <Link to="/builder">
          <Button>Create Resume</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default NoResumesFound;
