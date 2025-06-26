import type { TemplateProps } from "@/types";
import { Crown, Briefcase, TrendingUp, Shield } from "lucide-react";

export default function ExecutiveTemplate({ data }: TemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl border border-gray-300">
      {/* Executive Header */}
      <header className="bg-gradient-to-r from-slate-800 to-gray-900 text-white p-8">
        <div className="flex items-center justify-center mb-6">
          <Crown className="w-8 h-8 mr-3 text-yellow-400" />
          <h1 className="text-4xl font-bold tracking-wide">
            {data.personalInfo.fullName}
          </h1>
        </div>
        <div className="text-center text-gray-300 space-y-3">
          <div className="flex justify-center items-center space-x-8 text-sm">
            {data.personalInfo.email && (
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                {data.personalInfo.email}
              </span>
            )}
            {data.personalInfo.phone && (
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                {data.personalInfo.phone}
              </span>
            )}
            {data.personalInfo.location && (
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                {data.personalInfo.location}
              </span>
            )}
          </div>
          {(data.personalInfo.website || data.personalInfo.linkedin) && (
            <div className="flex justify-center items-center space-x-6 text-sm">
              {data.personalInfo.website && (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  {data.personalInfo.website}
                </span>
              )}
              {data.personalInfo.linkedin && (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  {data.personalInfo.linkedin}
                </span>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="p-8">
        {/* Executive Summary */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-slate-700 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Executive Summary</h2>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg border-l-4 border-slate-700">
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                {data.personalInfo.summary}
              </p>
            </div>
          </section>
        )}

        {/* Leadership Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-slate-700 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Leadership Experience</h2>
            </div>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-100 to-gray-100 p-6 border-b border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-slate-700 font-bold text-lg">{exp.company}</p>
                      </div>
                      <span className="bg-slate-700 text-white px-4 py-2 rounded font-medium text-sm">
                        {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                      </span>
                    </div>
                  </div>
                  {exp.description && (
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Core Competencies */}
        {data.skills.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-slate-700 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Core Competencies</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.skills.map((skillCategory) => (
                <div key={skillCategory.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-slate-700 mb-4 text-lg border-b border-gray-200 pb-2">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-2">
                    {skillCategory.items.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
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
              <Crown className="w-6 h-6 text-slate-700 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Education & Credentials</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-lg border-2 border-slate-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-slate-700 font-bold mb-2">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                    {edu.gpa && <span className="font-bold text-slate-700">GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Strategic Initiatives */}
        {data.projects.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-slate-700 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Strategic Initiatives</h2>
            </div>
            <div className="space-y-6">
              {data.projects.map((project) => (
                <div key={project.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    {project.link && (
                      <span className="text-slate-600 text-sm hover:underline font-medium">
                        {project.link}
                      </span>
                    )}
                  </div>
                  {project.technologies && (
                    <p className="text-slate-700 font-bold mb-2">
                      Key Focus Areas: {project.technologies}
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