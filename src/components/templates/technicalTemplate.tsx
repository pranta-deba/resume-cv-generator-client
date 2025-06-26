import type { TemplateProps } from "@/types";
import { Code, Terminal, Cpu, GitBranch } from "lucide-react";

export default function TechnicalTemplate({ data }: TemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 text-white font-mono shadow-2xl">
      {/* Terminal-style Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="flex items-center p-4 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-4 text-gray-400 text-sm">
            ~/resume/
            {data.personalInfo.fullName.toLowerCase().replace(/\s+/g, "-")}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Terminal className="w-6 h-6 text-green-400 mr-2" />
            <span className="text-green-400">$</span>
            <span className="ml-2 text-white">whoami</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            {data.personalInfo.fullName}
          </h1>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-cyan-400">Email:</span>
              <span className="text-white ml-2">{data.personalInfo.email}</span>
            </div>
            <div>
              <span className="text-cyan-400">Phone:</span>
              <span className="text-white ml-2">{data.personalInfo.phone}</span>
            </div>
            <div>
              <span className="text-cyan-400">Location:</span>
              <span className="text-white ml-2">
                {data.personalInfo.location}
              </span>
            </div>
            <div>
              <span className="text-cyan-400">Website:</span>
              <span className="text-white ml-2">
                {data.personalInfo.website}
              </span>
            </div>
          </div>
          {data.personalInfo.linkedin && (
            <div className="mt-2 text-sm">
              <span className="text-cyan-400">LinkedIn:</span>
              <span className="text-white ml-2">
                {data.personalInfo.linkedin}
              </span>
            </div>
          )}
        </div>
      </header>

      <div className="p-8">
        {/* About */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Code className="w-5 h-5 text-green-400 mr-2" />
              <h2 className="text-xl font-bold text-green-400">// About</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                {data.personalInfo.summary}
              </p>
            </div>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <GitBranch className="w-5 h-5 text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-blue-400">// Experience</h2>
            </div>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
                >
                  <div className="bg-gray-700 px-6 py-3 border-b border-gray-600">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-2">
                          #{index + 1}
                        </span>
                        <span className="text-white font-bold">
                          {exp.position}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {formatDate(exp.startDate)} -{" "}
                        {exp.current ? "Present" : formatDate(exp.endDate)}
                      </span>
                    </div>
                    <div className="text-cyan-400 text-sm mt-1">
                      {exp.company}
                    </div>
                  </div>
                  {exp.description && (
                    <div className="p-6">
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Cpu className="w-5 h-5 text-purple-400 mr-2" />
              <h2 className="text-xl font-bold text-purple-400">// Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.skills.map((skillCategory) => (
                <div
                  key={skillCategory.id}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700"
                >
                  <h3 className="text-yellow-400 font-bold mb-3 text-lg">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-2">
                    {skillCategory.items.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-green-400 mr-2">▸</span>
                        <span className="text-gray-300">{skill}</span>
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
              <Code className="w-5 h-5 text-green-400 mr-2" />
              <h2 className="text-xl font-bold text-green-400">// Education</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700"
                >
                  <h3 className="text-white font-bold mb-2">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-cyan-400 mb-2">{edu.institution}</p>
                  <div className="text-sm text-gray-400">
                    <div>
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </div>
                    {edu.gpa && (
                      <div className="text-green-400 mt-1">GPA: {edu.gpa}</div>
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
              <GitBranch className="w-5 h-5 text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-blue-400">// Projects</h2>
            </div>
            <div className="space-y-6">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-lg border border-gray-700"
                >
                  <div className="bg-gray-700 px-6 py-3 border-b border-gray-600">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-bold">{project.name}</h3>
                      {project.link && (
                        <span className="text-cyan-400 text-sm hover:underline">
                          {project.link}
                        </span>
                      )}
                    </div>
                    {project.technologies && (
                      <div className="text-yellow-400 text-sm mt-1">
                        Tech Stack: {project.technologies}
                      </div>
                    )}
                  </div>
                  {project.description && (
                    <div className="p-6">
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
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
