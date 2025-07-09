import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description:
      "Clean and contemporary design perfect for tech and creative industries",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Professional",
  },
  {
    id: "classic",
    name: "Classic Traditional",
    description:
      "Timeless design suitable for traditional industries and formal positions",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Traditional",
  },
  {
    id: "creative",
    name: "Creative Designer",
    description:
      "Bold and artistic layout for designers and creative professionals",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Creative",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Simple and elegant design that focuses on content",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Minimal",
  },
  {
    id: "executive",
    name: "Executive Premium",
    description:
      "Sophisticated design for senior-level positions and executives",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Executive",
  },
  {
    id: "academic",
    name: "Academic Scholar",
    description: "Formal layout perfect for academic and research positions",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Academic",
  },
  {
    id: "startup",
    name: "Startup Dynamic",
    description:
      "Modern and energetic design for startup and entrepreneurial roles",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Modern",
  },
  {
    id: "technical",
    name: "Technical Expert",
    description:
      "Structured layout ideal for engineering and technical positions",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Technical",
  },
  {
    id: "sales",
    name: "Sales Professional",
    description:
      "Results-focused design for sales and business development roles",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Business",
  },
  {
    id: "healthcare",
    name: "Healthcare Professional",
    description:
      "Clean and trustworthy design for medical and healthcare professionals",
    preview: "/placeholder.svg?height=400&width=300",
    category: "Healthcare",
  },
];

const TemplatesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {templates.map((template) => (
        <Card
          key={template.id}
          className="hover:shadow-lg transition-shadow group"
        >
          <CardHeader className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={template.preview || "/placeholder.svg"}
                alt={template.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                  {template.category}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-lg mb-2">{template.name}</CardTitle>
            <CardDescription className="text-sm text-gray-600 mb-4">
              {template.description}
            </CardDescription>
            <div className="flex space-x-2">
              <Link to={`/builder?template=${template.id}`} className="flex-1">
                <Button className="w-full">Use Template</Button>
              </Link>
              <Link to={`/preview?template=${template.id}`}>
                <Button variant="outline" size="sm">
                  Preview
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TemplatesGrid;
