import type { TemplateProps } from "@/types";

const MinimalTemplate = ({ data }: TemplateProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 font-light">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-thin text-gray-900 mb-6 tracking-wide">
          {data.personalInfo.fullName}
        </h1>
        <div className="flex flex-wrap gap-8 text-gray-600 text-sm">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && (
            <span>{data.personalInfo.location}</span>
          )}
          {data.personalInfo.website && (
            <span>{data.personalInfo.website}</span>
          )}
          {data.personalInfo.linkedin && (
            <span>{data.personalInfo.linkedin}</span>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.personalInfo.summary && (
        <section className="mb-12">
          <p className="text-gray-800 leading-loose text-lg font-light">
            {data.personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-medium text-gray-900 mb-8 uppercase tracking-widest">
            Experience
          </h2>
          <div className="space-y-10">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-light text-gray-900">
                    {exp.position}
                  </h3>
                  <span className="text-gray-500 text-sm">
                    {formatDate(exp.startDate)} —{" "}
                    {exp.current ? "Present" : formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="text-gray-700 mb-3 font-medium">{exp.company}</p>
                {exp.description && (
                  <p className="text-gray-600 leading-relaxed font-light">
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
        <section className="mb-12">
          <h2 className="text-sm font-medium text-gray-900 mb-8 uppercase tracking-widest">
            Education
          </h2>
          <div className="space-y-6">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-light text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <span className="text-gray-500 text-sm">
                    {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{edu.institution}</p>
                {edu.gpa && (
                  <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-medium text-gray-900 mb-8 uppercase tracking-widest">
            Skills
          </h2>
          <div className="space-y-4">
            {data.skills.map((skillCategory) => (
              <div key={skillCategory.id}>
                <h3 className="text-gray-900 font-medium mb-2">
                  {skillCategory.category}
                </h3>
                <p className="text-gray-600 font-light">
                  {skillCategory.items.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-gray-900 mb-8 uppercase tracking-widest">
            Projects
          </h2>
          <div className="space-y-8">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-light text-gray-900">
                    {project.name}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-gray-500 text-sm hover:text-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View →
                    </a>
                  )}
                </div>
                {project.technologies && (
                  <p className="text-gray-700 font-medium mb-2 text-sm">
                    {project.technologies}
                  </p>
                )}
                {project.description && (
                  <p className="text-gray-600 leading-relaxed font-light">
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
};

export default MinimalTemplate;
