import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
interface Resume {
  id: string;
  title: string;
  template: string;
  lastModified: string;
  status: "draft" | "completed";
}
const resumes: Resume[] = [
  {
    id: "1",
    title: "Software Engineer Resume",
    template: "modern",
    lastModified: "2024-01-15",
    status: "completed",
  },
  {
    id: "2",
    title: "Marketing Manager Resume",
    template: "professional",
    lastModified: "2024-01-10",
    status: "draft",
  },
];

const MyResumes = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Resumes</h2>
        <Link to="/builder">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            New Resume
          </Button>
        </Link>
      </div>

      {resumes.length === 0 ? (
        <p className="text-gray-600">You have no resumes yet.</p>
      ) : (
        <div>ddd</div>
      )}
    </div>
  );
};

export default MyResumes;
