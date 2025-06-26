import type { TemplateProps } from "@/types";
import { Rocket, Zap, Star, Lightbulb } from "lucide-react";

export default function StartupTemplate({ data }: TemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden">
      {/* Creative Header */}
      <header className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-10 h-10 mr-4 text-yellow-300 animate-pulse" />
            <h1 className="text-4xl font-bold tracking-wide">
              {data.personalInfo.fullName}
            </h1>
          </div>

          <div className="text-center space-y-3">
            <div className="flex flex-wrap justify-center gap-4 text-purple-100">
              {data.personalInfo.email && (
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {data.personalInfo.email}
                </span>
              )}
              {data.personalInfo.phone && (
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {data.personalInfo.phone}
                </span>
              )}
              {data.personalInfo.location && (
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {data.personalInfo.location}
                </span>
              )}
            </div>

            {(data.personalInfo.website || data.personalInfo.linkedin) && (
              <div className="flex flex-wrap justify-center gap-4 text-pink-100">
                {data.personalInfo.website && (
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {data.personalInfo.website}
                  </span>
                )}
                {data.personalInfo.linkedin && (
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {data.personalInfo.linkedin}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-8">
        {/* Vision Statement */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Vision & Mission
              </h2>
            </div>
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 p-6 rounded-xl border-l-4 border-purple-500">
              <p className="text-gray-800 leading-relaxed text-lg italic">
                "{data.personalInfo.summary}"
              </p>
            </div>
          </section>
        )}

        {/* Experience Journey */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-orange-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Innovation Journey
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-orange-500"></div>
              <div className="space-y-8">
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="ml-16 bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-purple-600 font-bold text-lg">
                            {exp.company}
                          </p>
                        </div>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
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
            </div>
          </section>
        )}

        {/* Skills Showcase */}
        {data.skills.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Superpowers</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.skills.map((skillCategory, categoryIndex) => (
                <div
                  key={skillCategory.id}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-colors"
                >
                  <h3 className="font-bold text-purple-700 mb-4 text-lg">
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                          (categoryIndex + index) % 3 === 0
                            ? "bg-purple-500 text-white"
                            : (categoryIndex + index) % 3 === 1
                            ? "bg-pink-500 text-white"
                            : "bg-orange-500 text-white"
                        }`}
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

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-blue-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Learning Foundation
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-shadow"
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

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Rocket className="w-6 h-6 text-purple-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Game-Changing Projects
              </h2>
            </div>
            <div className="space-y-6">
              {data.projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`p-6 rounded-xl border-2 hover:shadow-lg transition-all ${
                    index % 3 === 0
                      ? "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"
                      : index % 3 === 1
                      ? "bg-gradient-to-br from-pink-50 to-orange-50 border-pink-200"
                      : "bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200"
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.name}
                    </h3>
                    {project.link && (
                      <span className="text-purple-600 text-sm hover:underline font-medium">
                        {project.link}
                      </span>
                    )}
                  </div>
                  {project.technologies && (
                    <p className="text-purple-700 font-semibold mb-2">
                      Stack: {project.technologies}
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
