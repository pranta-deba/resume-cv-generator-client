import type { TemplateProps } from "@/types";
import { Heart, Award, Users, GraduationCap } from "lucide-react";

export default function HealthcareTemplate({ data }: TemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg">
      {/* Header with Medical Theme */}
      <header className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 mr-3 text-red-200" />
          <h1 className="text-3xl font-bold tracking-wide">
            {data.personalInfo.fullName}
          </h1>
        </div>
        <div className="text-center text-blue-100 space-y-2">
          <div className="flex justify-center items-center space-x-6 text-sm">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && (
              <span>{data.personalInfo.location}</span>
            )}
          </div>
          {(data.personalInfo.website || data.personalInfo.linkedin) && (
            <div className="flex justify-center items-center space-x-4 text-sm">
              {data.personalInfo.website && (
                <span>{data.personalInfo.website}</span>
              )}
              {data.personalInfo.linkedin && (
                <span>{data.personalInfo.linkedin}</span>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="p-8">
        {/* Professional Summary */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Professional Profile
              </h2>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-800 leading-relaxed">
                {data.personalInfo.summary}
              </p>
            </div>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Clinical Experience
              </h2>
            </div>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-4 border-teal-500 pl-6 pb-6"
                >
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-teal-600 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {formatDate(exp.startDate)} -{" "}
                        {exp.current ? "Present" : formatDate(exp.endDate)}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education & Certifications */}
        {data.education.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Education & Certifications
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-blue-700 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </span>
                    {edu.gpa && (
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Core Competencies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.skills.map((skillCategory) => (
                <div
                  key={skillCategory.id}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="font-bold text-blue-700 mb-3 text-lg">
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Research & Projects
            </h2>
            <div className="space-y-6">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-teal-50 p-6 rounded-lg border border-teal-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {project.name}
                    </h3>
                    {project.link && (
                      <span className="text-teal-600 text-sm hover:underline">
                        {project.link}
                      </span>
                    )}
                  </div>
                  {project.technologies && (
                    <p className="text-teal-700 font-semibold mb-2">
                      Methods: {project.technologies}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
