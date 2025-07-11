import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Download, Edit, Trash2 } from "lucide-react";

interface Resume {
  id: string;
  title: string;
  template: string;
  lastModified: string;
  status: "draft" | "completed";
}

interface ResumeCardProps {
  resume: Resume;
}

const ResumeCard = ({ resume }: ResumeCardProps) => {
  const handleDeleteResume = (id: string) => {
    console.log(`Deleting resume with ID: ${id}`);
  };

  return (
    <Card key={resume.id} className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{resume.title}</CardTitle>
            <CardDescription>
              Template: {resume.template} • {resume.status}
            </CardDescription>
          </div>
          <div
            className={`px-2 py-1 rounded-full text-xs ${
              resume.status === "completed"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {resume.status}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          Last modified: {new Date(resume.lastModified).toLocaleDateString()}
        </p>
        <div className="flex space-x-2">
          <Link to={`/builder?id=${resume.id}`}>
            <Button size="sm" variant="outline">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </Link>
          <Link to={`/preview?id=${resume.id}`}>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          </Link>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleDeleteResume(resume.id)}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeCard;
