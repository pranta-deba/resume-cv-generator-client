import type { TemplateProps } from "@/types";

export default function CreativeTemplate({ data }: TemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white font-sans">
      <div className="grid grid-cols-3 gap-0 min-h-screen">
        {/* Left Sidebar */}
        <div className="bg-gradient-to-b from-purple-600 to-pink-600 text-white p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {data.personalInfo.fullName}
            </h1>
            <div className="w-16 h-1 bg-white rounded"></div>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wide">
              Contact
            </h2>
            <div className="space-y-3 text-sm">
              {data.personalInfo.email && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.phone && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo.location && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>{data.personalInfo.location}</span>
                </div>
              )}
              {data.personalInfo.website && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="break-all">{data.personalInfo.website}</span>
                </div>
              )}
              {data.personalInfo.linkedin && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="break-all">
                    {data.personalInfo.linkedin}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4 uppercase tracking-wide">
                Skills
              </h2>
              <div className="space-y-4">
                {data.skills.map((skillCategory) => (
                  <div key={skillCategory.id}>
                    <h3 className="font-semibold mb-2 text-sm">
                      {skillCategory.category}
                    </h3>
                    <div className="space-y-1">
                      {skillCategory.items.map((skill, index) => (
                        <div key={index} className="text-sm">
                          <div className="flex items-center">
                            <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                            <span>{skill}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-4 uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="text-sm">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    {edu.field && (
                      <p className="text-purple-100">{edu.field}</p>
                    )}
                    <p className="text-purple-200 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-purple-200 text-xs">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                    {edu.gpa && (
                      <p className="text-purple-200 text-xs">GPA: {edu.gpa}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="col-span-2 p-8">
          {/* Professional Summary */}
          {data.personalInfo.summary && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 relative">
                About Me
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {data.personalInfo.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 relative">
                Experience
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
              </h2>
              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 mr-4"></div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {exp.position}
                            </h3>
                            <p className="text-purple-600 font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">
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
                    {index < data.experience.length - 1 && (
                      <div className="absolute left-2 top-6 w-0.5 h-16 bg-gradient-to-b from-purple-300 to-pink-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 relative">
                Projects
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
              </h2>
              <div className="grid gap-6">
                {data.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-600"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {project.name}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          className="text-purple-600 text-sm hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project →
                        </a>
                      )}
                    </div>
                    {project.technologies && (
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .split(",")
                            .map((tech, index) => (
                              <span
                                key={index}
                                className="bg-white text-purple-700 px-2 py-1 rounded text-xs font-medium"
                              >
                                {tech.trim()}
                              </span>
                            ))}
                        </div>
                      </div>
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
    </div>
  );
}
