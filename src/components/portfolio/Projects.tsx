import { useEffect, useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Landing Page Moderna",
    description:
      "Uma landing page responsiva e elegante para uma startup fictícia. Desenvolvida com HTML, CSS e JavaScript, focando em animações suaves e boa experiência do usuário.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "App de Lista de Tarefas",
    description:
      "Aplicação web para gerenciamento de tarefas com funcionalidades de adicionar, editar e excluir itens. Dados persistidos no localStorage.",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfólio Pessoal",
    description:
      "Este próprio site! Um portfólio moderno e responsivo para apresentar meus projetos e habilidades como desenvolvedora.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
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
    <section id="projetos" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 section-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos projetos que desenvolvi durante minha jornada de aprendizado
            </p>
            <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full mt-4" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="section-animate group bg-card rounded-2xl border border-border overflow-hidden card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Folder className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="Ver código no GitHub"
                      >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                      <a
                        href={project.link}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="Ver projeto"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Footer */}
                <div className="p-6 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 section-animate">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver mais no GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
