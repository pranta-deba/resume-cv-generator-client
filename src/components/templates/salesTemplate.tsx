import type { TemplateProps } from "@/types";
import { TrendingUp, Target, DollarSign, Award } from "lucide-react";

export default function SalesTemplate({ data }: TemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl">
      {/* Dynamic Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 mr-3 text-yellow-300" />
            <h1 className="text-3xl font-bold tracking-wide">
              {data.personalInfo.fullName}
            </h1>
          </div>
          <div className="text-center text-orange-100 space-y-2">
            <div className="flex justify-center items-center space-x-6 text-sm font-medium">
              {data.personalInfo.email && (
                <span>📧 {data.personalInfo.email}</span>
              )}
              {data.personalInfo.phone && (
                <span>📱 {data.personalInfo.phone}</span>
              )}
              {data.personalInfo.location && (
                <span>📍 {data.personalInfo.location}</span>
              )}
            </div>
            {(data.personalInfo.website || data.personalInfo.linkedin) && (
              <div className="flex justify-center items-center space-x-4 text-sm">
                {data.personalInfo.website && (
                  <span>🌐 {data.personalInfo.website}</span>
                )}
                {data.personalInfo.linkedin && (
                  <span>💼 {data.personalInfo.linkedin}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-8">
        {/* Value Proposition */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-orange-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Value Proposition
              </h2>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-600">
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                {data.personalInfo.summary}
              </p>
            </div>
          </section>
        )}

        {/* Sales Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <DollarSign className="w-6 h-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Sales Achievement Record
              </h2>
            </div>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-orange-600 font-bold text-lg">
                            {exp.company}
                          </p>
                        </div>
                        <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold">
                          {formatDate(exp.startDate)} -{" "}
                          {exp.current ? "Present" : formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                  {exp.description && (
                    <div className="ml-16 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Education & Training
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow"
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
                      <span className="font-bold text-green-600">
                        GPA: {edu.gpa}
                      </span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Core Sales Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.skills.map((skillCategory) => (
                <div
                  key={skillCategory.id}
                  className="bg-white border-2 border-orange-200 rounded-lg p-6 hover:border-orange-400 transition-colors"
                >
                  <h3 className="font-bold text-orange-700 mb-3 text-lg">
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Projects & Initiatives
            </h2>
            <div className="space-y-6">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.name}
                    </h3>
                    {project.link && (
                      <span className="text-orange-600 text-sm hover:underline font-medium">
                        {project.link}
                      </span>
                    )}
                  </div>
                  {project.technologies && (
                    <p className="text-orange-700 font-semibold mb-2">
                      Tools & Methods: {project.technologies}
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
