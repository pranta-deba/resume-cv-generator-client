import type { TemplateProps } from "@/types";
import { BookOpen, Award, Users, FileText } from "lucide-react";

export default function AcademicTemplate({ data }: TemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200">
      {/* Scholarly Header */}
      <header className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white p-8">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-2 tracking-wide">
            {data.personalInfo.fullName}
          </h1>
          <div className="text-blue-100 space-y-2">
            <div className="flex justify-center items-center space-x-6 text-sm">
              {data.personalInfo.email && (
                <span>{data.personalInfo.email}</span>
              )}
              {data.personalInfo.phone && (
                <span>{data.personalInfo.phone}</span>
              )}
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
        </div>
      </header>

      <div className="p-8">
        {/* Research Interest */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-serif font-bold text-gray-900">
                Research Interests
              </h2>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <p className="text-gray-800 leading-relaxed font-serif">
                {data.personalInfo.summary}
              </p>
            </div>
          </section>
        )}

        {/* Academic Positions */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-serif font-bold text-gray-900">
                Academic Positions
              </h2>
            </div>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="border-l-4 border-blue-500 pl-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-indigo-700 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded text-sm font-medium">
                        {formatDate(exp.startDate)} -{" "}
                        {exp.current ? "Present" : formatDate(exp.endDate)}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-gray-700 leading-relaxed font-serif">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Award className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-serif font-bold text-gray-900">
                Education
              </h2>
            </div>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-indigo-700 font-semibold mb-2">
                        {edu.institution}
                      </p>
                      {edu.gpa && (
                        <p className="text-gray-600 font-medium">
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                    <span className="text-gray-600 font-medium">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research Skills */}
        {data.skills.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <FileText className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-serif font-bold text-gray-900">
                Research Skills & Methodologies
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.skills.map((skillCategory) => (
                <div
                  key={skillCategory.id}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="font-serif font-bold text-indigo-700 mb-3 text-lg">
                    {skillCategory.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillCategory.items.map((skill, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research Projects & Publications */}
        {data.projects.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-serif font-bold text-gray-900">
                Research Projects & Publications
              </h2>
            </div>
            <div className="space-y-6">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-blue-50 p-6 rounded-lg border border-blue-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-serif font-bold text-gray-900">
                      {project.name}
                    </h3>
                    {project.link && (
                      <span className="text-indigo-600 text-sm hover:underline">
                        {project.link}
                      </span>
                    )}
                  </div>
                  {project.technologies && (
                    <p className="text-indigo-700 font-semibold mb-2 font-serif">
                      Methodology: {project.technologies}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-gray-700 leading-relaxed font-serif">
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
