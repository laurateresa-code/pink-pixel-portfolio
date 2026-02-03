import { useEffect, useRef } from "react";
import { Code2, Heart, Lightbulb, Target, Brain, MessageSquare, Users, Gauge } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Foco em boas práticas e legibilidade",
  },
  {
    icon: Lightbulb,
    title: "Aprendizado Contínuo",
    description: "Sempre buscando novos conhecimentos",
  },
  {
    icon: Target,
    title: "Organização",
    description: "Estrutura e planejamento em cada projeto",
  },
  {
    icon: Heart,
    title: "Dedicação",
    description: "Comprometida com a qualidade",
  },
  {
    icon: Brain,
    title: "Pensamento Lógico",
    description: "Abordagem criativa para soluções eficientes",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Técnica",
    description: "Clareza ao explicar ideias e decisões",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Boa adaptação em times multidisciplinares",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Foco em escalabilidade e produto final",
  },
];

const About = () => {
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
    <section id="sobre" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 section-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo Placeholder */}
            <div className="section-animate relative group">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-background/50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src="/placeholder.svg" 
                  alt="Laura Teresa" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Decorative elements behind photo */}
              <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/30" />
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-primary/5" />
            </div>

            {/* Text Content */}
            <div className="space-y-6 section-animate flex flex-col justify-center h-full">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Sou desenvolvedora de sistemas júnior, recém-formada, com interesse em construir soluções bem estruturadas e funcionais. Estou em constante aprendizado e busco aplicar boas práticas de desenvolvimento, organização de código e atenção aos detalhes em cada projeto.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Gosto de transformar ideias em aplicações claras e eficientes, sempre com foco na experiência do usuário. Tenho uma postura colaborativa, valorizo feedbacks e encaro cada desafio como uma oportunidade de evoluir tecnicamente e como profissional.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Acredito que o desenvolvimento é um processo contínuo e estou motivada a crescer, aprender novas tecnologias e contribuir de forma positiva para os projetos dos quais participo.
              </p>
            </div>
          </div>

          {/* Soft Skills Header */}
          <div id="soft-skills" className="text-center mb-12 section-animate scroll-mt-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Soft <span className="text-gradient">Skills</span>
            </h3>
            <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
          </div>

          {/* Highlights Grid - Moved to bottom */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="section-animate p-6 rounded-2xl bg-card border border-border card-hover text-center hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
