import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Download, FileText, Plus } from "lucide-react";

const QuickAction = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
        <Link to="/builder">
          <CardHeader>
            <div className="flex items-center">
              <Plus className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <CardTitle>Create New Resume</CardTitle>
                <CardDescription>
                  Start building a new resume from scratch
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Link>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
        <Link to="/templates">
          <CardHeader>
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <CardTitle>Browse Templates</CardTitle>
                <CardDescription>
                  Explore our professional resume templates
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Link>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center">
            <Download className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <CardTitle>Recent Downloads</CardTitle>
              <CardDescription>
                Access your recently downloaded resumes
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default QuickAction;
