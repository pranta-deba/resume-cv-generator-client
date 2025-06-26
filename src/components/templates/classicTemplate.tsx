import type { TemplateProps } from "@/types";

export default function ClassicTemplate({ data }: TemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 font-serif">
      {/* Header */}
      <header className="text-center border-b-2 border-gray-800 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">
          {data.personalInfo.fullName}
        </h1>
        <div className="text-gray-700 space-y-1">
          {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
          {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
          {data.personalInfo.location && (
            <div>{data.personalInfo.location}</div>
          )}
          {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
          {data.personalInfo.linkedin && (
            <div>{data.personalInfo.linkedin}</div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.personalInfo.summary && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-400 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">
            {data.personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-400 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 font-medium">
                    {formatDate(exp.startDate)} -{" "}
                    {exp.current ? "Present" : formatDate(exp.endDate)}
                  </span>
                </div>
                {exp.description && (
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-400 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p className="text-gray-700 font-semibold">
                      {edu.institution}
                    </p>
                    {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
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

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-400 pb-2">
            Skills
          </h2>
          <div className="space-y-3">
            {data.skills.map((skillCategory) => (
              <div key={skillCategory.id}>
                <h3 className="font-bold text-gray-900 mb-1">
                  {skillCategory.category}:
                </h3>
                <p className="text-gray-800">
                  {skillCategory.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-400 pb-2">
            Projects
          </h2>
          <div className="space-y-6">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.name}
                  </h3>
                  {project.link && (
                    <span className="text-gray-600 text-sm">
                      {project.link}
                    </span>
                  )}
                </div>
                {project.technologies && (
                  <p className="text-gray-700 font-semibold mb-2">
                    Technologies: {project.technologies}
                  </p>
                )}
                {project.description && (
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
