import { Download, FileText, Palette, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose ResumeBuilder?
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to create a standout resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>10+ Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Professional templates designed by experts for different
                industries and career levels.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Easy Customization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Change colors, fonts, and layouts to match your personal style
                and industry standards.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Download className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>PDF Download</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Download your resume as a high-quality PDF ready for job
                applications.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Save & Edit</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Save your resume data and come back anytime to make updates or
                create new versions.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
