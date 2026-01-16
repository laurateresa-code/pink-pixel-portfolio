import { useEffect, useRef } from "react";

const skills = [
  { name: "HTML5", level: 85, color: "from-orange-400 to-orange-500" },
  { name: "CSS3", level: 80, color: "from-blue-400 to-blue-500" },
  { name: "JavaScript", level: 70, color: "from-yellow-400 to-yellow-500" },
  { name: "React", level: 60, color: "from-cyan-400 to-cyan-500" },
  { name: "Git", level: 65, color: "from-red-400 to-red-500" },
  { name: "FlutterFlow", level: 75, color: "from-purple-400 to-purple-500" },
  { name: "Tailwind CSS", level: 70, color: "from-teal-400 to-teal-500" },
  { name: "Figma", level: 60, color: "from-pink-400 to-pink-500" },
];

const tools = [
  "VS Code",
  "GitHub",
  "Terminal",
  "Notion",
  "Trello",
  "Canva",
  "ChatGPT",
  "Lovable",
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="habilidades" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 section-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Minhas <span className="text-gradient">Habilidades</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que estou aprendendo e utilizando no meu dia a dia
            </p>
            <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="section-animate"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div className="section-animate">
            <h3 className="text-xl font-semibold text-center mb-8">
              Ferramentas que utilizo
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
